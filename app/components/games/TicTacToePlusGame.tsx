"use client";

import { useState, useEffect, useMemo } from "react";
import { RefreshCcw, X } from "lucide-react";

export default function TicTacToePlusGame() {
  const [history, setHistory] = useState<{ idx: number; player: 'X' | 'O' }[]>([]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentBoard = useMemo(() => {
    const board = Array(9).fill("");
    history.forEach(move => {
      board[move.idx] = move.player;
    });
    return board;
  }, [history]);

  const handleClick = (i: number) => {
    if (currentBoard[i] !== "" || winner) return;

    const newMove = { idx: i, player: isXNext ? 'X' as const : 'O' as const };
    let newHistory = [...history, newMove];

    if (newHistory.length > 6) {
      newHistory = newHistory.slice(-6);
    }

    setHistory(newHistory);
    setIsXNext(!isXNext);
    setWinner(null);
  };

  const resetGame = () => {
    setHistory([]);
    setWinner(null);
    setIsXNext(isXNext);
  };

  useEffect(() => {
    const checkWinner = (board: string[]) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };

    const result = checkWinner(currentBoard);
    if (result) {
      setWinner(result);
      if (result === "X") {
        setXWins(x => x + 1);
      } else {
        setOWins(o => o + 1);
      }
      setIsModalOpen(true);
    }
  }, [history, currentBoard]);

  const renderCell = (i: number) => {
    // Check if this cell contains the oldest move (about to be deleted)
    const isOldestMove = history.length === 6 && history[0]?.idx === i;
    
    return (
      <button
        onClick={() => handleClick(i)}
        className={`${
          currentBoard[i] === "O"
            ? isOldestMove ? "text-green-500/50 bg-green-200/30" : "text-green-500 bg-green-200"
            : currentBoard[i] === "X"
            ? isOldestMove ? "text-red-500/50 bg-red-200/30" : "text-red-500 bg-red-200"
            : "text-[var(--accent)] bg-[var(--ui-white)]"
        } w-full aspect-square flex items-center justify-center h-full border-none bg-gray-100 text-4xl md:text-8xl rounded-md cursor-pointer transition-colors font-[welcomehome]`}
        disabled={!!currentBoard[i] || !!winner}
      >
        {currentBoard[i]}
      </button>
    );
  };

  return (
    <div className="w-full">
      <div className="flex max-w-md mx-auto justify-between gap-4 m-4 text-lg md:text-2xl">
        <div className={`flex gap-2 items-center rounded-md p-2 w-full justify-center ${isXNext ? "bg-red-200/50" : "bg-[var(--ui-gray)]/30"}`}>
          <div className="font-[welcomehome] text-red-500">X</div>
          <div>{xWins}</div>
        </div>
        <div className={`flex gap-2 items-center rounded-md p-2 w-full justify-center ${isXNext ? "bg-[var(--ui-gray)]/30" :"bg-green-200/50"}`}>
          <div className="font-[welcomehome] text-green-500">O</div>
          <div>{oWins}</div>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${isModalOpen ? "block" : "hidden"}`} onClick={() => setIsModalOpen(false)}>
        <div className="bg-[var(--ui-white)] p-4 rounded-md relative shadow-lg w-[180px] h-[150px] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-[var(--foreground)] hover:text-[var(--foreground-hover)] text-xl font-bold cursor-pointer" onClick={() => setIsModalOpen(false)}>
            <X size={24} />
          </button>
          {winner ? (
            <div className="text-lg text-[var(--ui-black)]">
              <span className={`font-[welcomehome] text-2xl ${winner === "X" ? "text-red-500" : "text-green-500"}`}>{winner}</span> WON!
            </div>
          ) : null}
          <button className="bg-[var(--foreground)] text-white p-2 rounded-md cursor-pointer mt-4 hover:bg-[var(--foreground-hover)] transition-colors" onClick={() => {
            setIsModalOpen(false);
            resetGame();
          }}>Play again</button>
        </div>
      </div>

      <div className="grid grid-cols-3 max-w-md mx-auto gap-2">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i}>{renderCell(i)}</div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => resetGame()}
          className="cursor-pointer hover:text-[var(--accent)] transition-colors"
        >
          <RefreshCcw size={24} />
        </button>
      </div>
    </div>
  );
}
