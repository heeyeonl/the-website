'use client';

import { useState, useEffect, useCallback } from 'react';
import { Info, X } from 'lucide-react';
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
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Hexagon</h1>
        {!showDescription && (
          <Info
            size={28}
            className="mb-6 p-1 cursor-pointer hover:text-red-600 transition-colors"
            onClick={() => setShowDescription(true)}
          />
        )}
      </div>
      
      <div className={`
        ${showDescription ? 'opacity-100 h-auto mb-9 p-4' : 'h-0 opacity-0 overflow-hidden'}
        flex flex-col bg-white rounded-lg shadow-md transition-all duration-500
      `}>
        <div className="text-right -mb-6 md:mb-0">
          <X
            size={28}
            className="p-1 cursor-pointer hover:text-red-600 transition-colors"
            onClick={() => setShowDescription(false)}
          />
        </div>
        <ul className="space-y-2">
          <li>This game is from Korean reality show called <a href="https://www.netflix.com/title/81653386" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">The Devil&apos;s Plan</a>.</li>
          <li>There are 19 random numbers from 1 to 9, and after 60 seconds, the numbers will be replaced with an alphabet character in order.</li>
          <li>You will be given a target number, and you must remember which 3 combinations of numbers will make the target number.</li>
          <li>You can select and deselect the number, and once 3 numbers are selected, you will gain 1 point if it is correct, but you will lose 1 point if it is incorrect.</li>
          <li><b>You can only select 3 numbers that make a straight line (ex. ABC, ADH, AEJ).</b></li>
        </ul>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        <div className="flex flex-col items-center gap-1">
          <div>Target Number</div>
          <div className="text-3xl text-blue-500">{numbersSeen ? target : '?'}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Possible Answers</div>
          <div className="text-3xl text-blue-500">{numbersSeen ? numPossibleAnswer : '?'}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div>Earned Points</div>
          <div className={`text-3xl ${points < 0 ? 'text-red-600' : 'text-blue-500'}`}>{points}</div>
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
                    float-left -mb-[26px] ml-[3px] cursor-pointer group
                    ${showNumbers ? 'cursor-not-allowed' : ''}
                  `}
                  onClick={() => !showNumbers && onSelect(cell)}
                >
                  <div className={`
                    w-0 border-l-[52px] border-r-[52px] border-transparent
                    ${showNumbers 
                      ? 'border-b-[30px] border-b-blue-500' 
                      : isSelectedCell
                        ? 'border-b-[30px] border-b-red-500 group-hover:border-b-red-600'
                        : 'border-b-[30px] border-b-white group-hover:border-b-blue-500'
                    }
                    transition-colors
                  `} />
                  <div className={`
                    flex items-center justify-center w-[104px] h-[60px] text-[38px]
                    ${showNumbers
                      ? 'bg-blue-500 text-white'
                      : isSelectedCell
                        ? 'bg-red-500 text-white group-hover:bg-red-600'
                        : 'bg-white group-hover:bg-blue-500 group-hover:text-white'
                    }
                    transition-colors
                  `}>
                    {showNumbers ? cell.num : cell.char}
                  </div>
                  <div className={`
                    w-0 border-l-[52px] border-r-[52px] border-transparent
                    ${showNumbers
                      ? 'border-t-[30px] border-t-blue-500'
                      : isSelectedCell
                        ? 'border-t-[30px] border-t-red-500 group-hover:border-t-red-600'
                        : 'border-t-[30px] border-t-white group-hover:border-t-blue-500'
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
            ${time < 11 ? 'text-5xl text-red-500 animate-[shake_0.25s_infinite]' : 'text-4xl'}
          `}>
            {time}
          </p>
        )}
        {numbersSeen && (
          <div className="flex gap-6">
            <button
              onClick={nextGame}
              className="w-[130px] py-3 text-center text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              Next Game
            </button>
            <button
              onClick={reset}
              className="w-[130px] py-3 text-center text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-colors"
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
              className="w-[100px] h-6 px-2 py-4 bg-white rounded-lg shadow-md border-none"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div>Set Range (max num of cell)</div>
            <input
              type="text"
              value={rangeInput}
              onChange={(e) => setRangeInput(Number(e.target.value))}
              className="w-[100px] h-6 px-2 py-4 bg-white rounded-lg shadow-md border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 