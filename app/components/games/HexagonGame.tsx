'use client';

import { useState, useEffect, useCallback } from 'react';
import { Github, Info, X } from 'lucide-react';
const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const MESSAGES = {
  'start': 'Click any cell to start the game!',
  'memorize': 'Memorize the numbers!',
  'playing': 'Click 3 cells in a row that makes the target number.',
};

export default function HexagonGame() {
  const [showDescription, setShowDescription] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const [numbersSeen, setNumbersSeen] = useState(false);
  const [target, setTarget] = useState(-1);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(0);
  const [timeInput, setTimeInput] = useState(60);
  const [size] = useState(3);
  const [rangeInput, setRangeInput] = useState(7);
  const [hexagons, setHexagons] = useState<Array<Array<{char: string, num: number}>>>([]);
  const [selected, setSelected] = useState<Array<{char: string, num: number}>>([]);
  const [message, setMessage] = useState(MESSAGES['start']);
  const [candidates, setCandidates] = useState<{[key: string]: number}>({});
  const [numPossibleAnswer, setNumPossibleAnswer] = useState<number | undefined>(undefined);

  const generateNumbers = useCallback(() => {
    const n = size;
    const totalHexSize = (n - 1)*(3 * n - 2) + (2 * n) - 1;
    const tempHex = Array.from({length: totalHexSize}, () => Math.floor(Math.random() * rangeInput) + 1)
      .map((num, i) => ({ char: ALPHABET[i], num: num }));
    
    const newHexagons: Array<Array<{char: string, num: number}>> = [];
    const numHexArray = 2 * n - 1;
    let j = 0;
    
    for (let i = 0; i < numHexArray; i++) {
      const idx = (i < n) ? n + i : n + (2 * n - 2 - i);
      newHexagons.push(tempHex.slice(j, j + idx));
      j += idx;
    }
    
    setHexagons(newHexagons);
    return newHexagons;
  }, [size, rangeInput]);

  const saveCandidate = useCallback((x?: {char: string, num: number}, y?: {char: string, num: number}, z?: {char: string, num: number}) => {
    if (x && y && z) {
      const candidate = [x.char, y.char, z.char].sort().join('');
      const sum = x.num + y.num + z.num;
      return { candidate, sum };
    }
    return null;
  }, []);

  const generateCandidates = useCallback((hexArray: Array<Array<{char: string, num: number}>>) => {
    const newCandidates: {[key: string]: number} = {};
    const k = 3;
    const longest = size - 1;

    for (let i = 0; i < hexArray.length; i++) {
      const row0 = hexArray[i];
      const row1 = hexArray[i + 1];
      const row2 = hexArray[i + 2];
      const rowsExist = row0 && row1 && row2;

      // Straight lines
      for (let j = 0; j < row0.length - 2; j++) {
        const result = saveCandidate(...row0.slice(j, j + k));
        if (result) {
          newCandidates[result.candidate] = result.sum;
        }
      }

      // Diagonals
      if (rowsExist) {
        for (let j = 0; j < row0.length; j++) {
          let q1Coords, q2Coords;
          
          if (i === longest) {
            q1Coords = [[j, 0], [j - 1, 1], [j - 2, 2]];
            q2Coords = [[j, 0], [j, 1], [j, 2]];
          } else if (i === longest - 1) {
            q1Coords = [[j, 0], [j, 1], [j - 1, 2]];
            q2Coords = [[j, 0], [j + 1, 1], [j + 1, 2]];
          } else if (row0[j] && row1[j] && row2[j]) {
            q1Coords = [[j, 0], [j, 1], [j, 2]];
            q2Coords = [[j, 0], [j + 1, 1], [j + 2, 2]];
          } else {
            continue;
          }

          [q1Coords, q2Coords].forEach(coords => {
            const cells = coords.map(([x, y]) => {
              const row = [row0, row1, row2][y];
              return row && row[x];
            });
            const result = saveCandidate(...(cells as [{char: string, num: number}, {char: string, num: number}, {char: string, num: number}]));
            if (result) {
              newCandidates[result.candidate] = result.sum;
            }
          });
        }
      }
    }
    
    setCandidates(newCandidates);
    return newCandidates;
  }, [size, saveCandidate]);

  const generateTarget = useCallback((candidatesObj: {[key: string]: number}) => {
    const targets: {[key: number]: number} = {};
    let mostFrequent = 0;
    let newTarget = -1;

    Object.values(candidatesObj).forEach(num => {
      if (!targets[num]) {
        targets[num] = 0;
      }
      targets[num] += 1;

      if (targets[num] > mostFrequent) {
        mostFrequent = targets[num];
        newTarget = num;
      }
    });

    setTarget(newTarget);
    setNumPossibleAnswer(targets[newTarget]);
  }, []);

  const checkAnswer = useCallback(() => {
    const answer = selected.map(cell => cell.char).sort().join('');
    const sumNum = selected.reduce((sum, cell) => sum + cell.num, 0);
    
    const isCorrect = sumNum === target;
    const isIncluded = Object.keys(candidates).includes(answer);

    setPoints(prev => prev + (isCorrect && isIncluded ? 1 : -1));
    setSelected([]);
    
    if (isIncluded) {
      const newCandidates = { ...candidates };
      delete newCandidates[answer];
      setCandidates(newCandidates);
    }
  }, [selected, target, candidates]);

  const onSelect = useCallback((cell: {char: string, num: number}) => {
    if (!showNumbers && !numbersSeen) {
      setShowNumbers(true);
      setMessage(MESSAGES['memorize']);
      setTime(timeInput);
    } else if (selected.includes(cell)) {
      setSelected(prev => prev.filter(val => val !== cell));
    } else if (selected.length < 3) {
      setSelected(prev => [...prev, cell]);
    }
  }, [showNumbers, numbersSeen, selected, timeInput]);

  const reset = useCallback(() => {
    setPoints(0);
    nextGame();
  }, []);

  const nextGame = useCallback(() => {
    setTarget(-1);
    setSelected([]);
    setNumbersSeen(false);
    setMessage(MESSAGES['start']);
    const newHexagons = generateNumbers();
    const newCandidates = generateCandidates(newHexagons);
    generateTarget(newCandidates);
  }, [generateNumbers, generateCandidates, generateTarget]);

  useEffect(() => {
    if (selected.length === 3) {
      checkAnswer();
    }
  }, [selected, checkAnswer]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (time > 0) {
      timer = setInterval(() => {
        setTime(prev => {
          if (prev === 1) {
            setShowNumbers(false);
            setMessage(MESSAGES['playing']);
            setNumbersSeen(true);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    const newHexagons = generateNumbers();
    const newCandidates = generateCandidates(newHexagons);
    generateTarget(newCandidates);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center mb-6 relative">
        <h1 className="text-4xl font-sansita">Hexagon</h1>
          <Info
            size={28}
            className="ml-2 p-1 cursor-pointer hover:text-[var(--accent)] transition-colors"
            onClick={() => setShowDescription(true)}
          />
        <div className="absolute top-0 right-0">
          <a 
            href="https://github.com/heeyeonl/the-website/blob/main/app/components/games/HexagonGame.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <Github size={32} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              See code here
            </span>
          </a>
        </div>
      </div>
      
      {/* Description Wrapper */}
      <div className="relative mb-9">
        {/* Overlay to detect outside clicks */}
        {showDescription && (
          <div 
            className="fixed inset-0 z-[5]" 
            onClick={() => setShowDescription(false)}
          ></div>
        )}
        
        <div className={`
          ${showDescription ? 'opacity-100 visible' : 'opacity-0 invisible'}
          absolute top-0 left-0 z-10 w-full md:w-2/3 max-w-xl
          bg-[var(--ui-white)] rounded-lg shadow-md transition-all duration-300
        `}
        onClick={(e) => e.stopPropagation()} // Prevent clicks from reaching the overlay
        >
          <div className="absolute top-2 right-2">
            <X
              size={28}
              className="p-1 cursor-pointer hover:text-[var(--accent)] transition-colors"
              onClick={() => setShowDescription(false)}
            />
          </div>
          <div className="p-4 pt-8">
            <ul className="space-y-4">
              <li>This game, featured in the Korean reality show <a href="https://www.netflix.com/title/81653386" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--accent-hover)]">The Devil&apos;s Plan,</a> challenges memory and strategy.</li>
              <li>
                <p className="mb-2">How to play:</p>
                <ol className="list-disc pl-5 space-y-2">
                  <li>The grid displays 19 random numbers (1-9) for 60 seconds before they turn into alphabet characters in order.</li>
                  <li>A timer starts when you select your first tile.</li>
                  <li>You are given a target number and must recall which three tiles add up to it.</li>
                  <li>Tiles can only be selected if they form a straight line (e.g., ABC, ADH, AEJ).</li>
                  <li>Select and deselect tiles as needed, but once three tiles are chosen, the combination is locked.</li>
                  <li>Earn 1 point for a correct combination, but lose 1 point for an incorrect one or for repeating a previously used combination.</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <div className="flex flex-col items-center gap-1">
          <div>Target Number</div>
          <div className="text-3xl text-[var(--foreground)]">{numbersSeen ? target : '?'}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Possible Answers</div>
          <div className="text-3xl text-[var(--foreground)]">{numbersSeen ? numPossibleAnswer : '?'}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Earned Points</div>
          <div className="text-3xl text-[var(--foreground)]">{points}</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-6 pb-[90px]">
        {hexagons.map((row, i) => (
          <div key={i} className="clear-left">
            {row.map(cell => {
              const isSelectedCell = selected.includes(cell);
              return (
                <div
                  key={cell.char}
                  className={`
                    float-left -mb-[13px] sm:-mb-[20px] md:-mb-[26px] ml-[2px] sm:ml-[3px] cursor-pointer group
                    ${showNumbers ? 'cursor-not-allowed' : ''}
                  `}
                  onClick={() => !showNumbers && onSelect(cell)}
                >
                  <div className={`
                    w-0 border-l-[26px] border-r-[26px] sm:border-l-[39px] sm:border-r-[39px] md:border-l-[52px] md:border-r-[52px] border-transparent
                    ${showNumbers 
                      ? 'border-b-[15px] sm:border-b-[23px] md:border-b-[30px] border-b-[var(--foreground)]' 
                      : isSelectedCell
                        ? 'border-b-[15px] sm:border-b-[23px] md:border-b-[30px] border-b-[var(--foreground)] group-hover:border-b-[var(--foreground-hover)]'
                        : 'border-b-[15px] sm:border-b-[23px] md:border-b-[30px] border-b-[var(--ui-white)] group-hover:border-b-[var(--foreground)]'
                    }
                    transition-colors
                  `} />
                  <div className={`
                    flex items-center justify-center w-[52px] sm:w-[78px] md:w-[104px] h-[30px] sm:h-[45px] md:h-[60px] text-[19px] sm:text-[29px] md:text-[38px]
                    ${showNumbers
                      ? 'bg-[var(--foreground)] text-[var(--ui-white)]'
                      : isSelectedCell
                        ? 'text-[var(--ui-white)] bg-[var(--foreground)] group-hover:bg-[var(--foreground-hover)]'
                        : 'bg-[var(--ui-white)] group-hover:bg-[var(--foreground)] group-hover:text-[var(--ui-white)]'
                    }
                    transition-colors
                  `}>
                    {showNumbers ? cell.num : cell.char}
                  </div>
                  <div className={`
                    w-0 border-l-[26px] border-r-[26px] sm:border-l-[39px] sm:border-r-[39px] md:border-l-[52px] md:border-r-[52px] border-transparent
                    ${showNumbers
                      ? 'border-t-[15px] sm:border-t-[23px] md:border-t-[30px] border-t-[var(--foreground)]'
                      : isSelectedCell
                        ? 'border-t-[15px] sm:border-t-[23px] md:border-t-[30px] border-t-[var(--foreground)] group-hover:border-t-[var(--foreground-hover)]'
                        : 'border-t-[15px] sm:border-t-[23px] md:border-t-[30px] border-t-[var(--ui-white)] group-hover:border-t-[var(--foreground)]'
                    }
                    transition-colors
                  `} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <p>{message}</p>
        {time > 0 && (
          <p className={`
            ${time < 11 ? 'text-5xl text-[var(--accent)] animate-[shake_0.25s_infinite]' : 'text-4xl'}
          `}>
            {time}
          </p>
        )}
        {numbersSeen && (
          <div className="flex gap-6">
            <button
              onClick={nextGame}
              className="w-[130px] py-3 text-center text-[var(--ui-white)] bg-[var(--foreground)] rounded-lg shadow-md hover:bg-[var(--foreground-hover)] transition-colors hover:cursor-pointer"
            >
              Next Game
            </button>
            <button
              onClick={reset}
              className="w-[130px] py-3 text-center text-[var(--ui-white)] bg-[var(--foreground)] rounded-lg shadow-md hover:bg-[var(--foreground-hover)] transition-colors hover:cursor-pointer"
            >
              Reset (0 points)
            </button>
          </div>
        )}
        <div className="flex justify-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <div>Set Time (seconds)</div>
            <input
              type="text"
              value={timeInput}
              onChange={(e) => setTimeInput(Number(e.target.value))}
              className="w-[100px] h-6 px-2 py-4 bg-[var(--ui-white)] rounded-lg shadow-md border-none"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>Set Range (max num of cell)</div>
            <input
              type="text"
              value={rangeInput}
              onChange={(e) => setRangeInput(Number(e.target.value))}
              className="w-[100px] h-6 px-2 py-4 bg-[var(--ui-white)] rounded-lg shadow-md border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 