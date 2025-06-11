"use client";

import { useState, useEffect } from "react";
import { RefreshCcw, X } from "lucide-react";

export default function TicTacToeGame() {
  useState(false);
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (i: number) => {
    if (board[i] !== "") return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setWinner(null);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setIsXNext(isXNext);
  };

  useEffect(() => {
    const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // cols
        [0, 4, 8],
        [2, 4, 6], // diags
      ];

      for (const line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      return null;
    };

    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
      if (winner === "X") {
        setXWins((x) => x + 1);
      } else {
        setOWins((o) => o + 1);
      }
      setIsModalOpen(true);
    } else if (!board.includes("")) {
      setDraws((d) => d + 1);
      setIsModalOpen(true);
    }
  }, [board]);

  const renderCell = (i: number) => {
    return (
      <button
        onClick={() => handleClick(i)}
        className={`${
          board[i] === "O"
            ? "text-green-500 bg-green-200"
            : board[i] === "X"
            ? "text-red-500 bg-red-200"
            : "text-[var(--accent)] bg-[var(--ui-white)]"
        } w-full aspect-square flex items-center justify-center h-full border-none bg-gray-100 text-4xl md:text-8xl rounded-md cursor-pointer transition-colors font-[welcomehome]`}
        disabled={board[i] !== "" || !!winner}
      >
        {board[i]}
      </button>
    );
  };
  return (
    <div className="w-full">
      {/* Status */}
      <div className="flex max-w-md mx-auto justify-between gap-4 m-4 text-lg md:text-2xl">
        <div className={`flex gap-2 items-center rounded-md p-2 w-full justify-center ${isXNext ? "bg-red-200/50" : "bg-[var(--ui-gray)]/30"}`}>
          <div className="font-[welcomehome] text-red-500">X</div>
          <div>{xWins}</div>
        </div>
        <div className="flex gap-2 items-center rounded-md p-2 w-full justify-center bg-[var(--ui-gray)]/30">
          <div>Draws</div>
          <div>{draws}</div>
        </div>
        <div className={`flex gap-2 items-center rounded-md p-2 w-full justify-center ${isXNext ? "bg-[var(--ui-gray)]/30" :"bg-green-200/50"}`}>
          <div className="font-[welcomehome] text-green-500">O</div>
          <div>{oWins}</div>
        </div>
      </div>

      {/* Modal */}
      <div 
        className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${isModalOpen ? "block" : "hidden"}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div 
          className="bg-[var(--ui-white)] p-4 rounded-md relative shadow-lg w-[180px] h-[150px] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
            <button 
              className="absolute top-2 right-2 text-[var(--foreground)] hover:text-[var(--foreground-hover)] text-xl font-bold cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
           {winner ?
             <div className="text-lg text-[var(--ui-black)]">
               <span className={`font-[welcomehome] text-2xl ${winner === "X" ? "text-red-500" : "text-green-500"}`}>{winner}</span> WON!
             </div>
             : <div className="text-lg text-[var(--ui-black)]">Draw!</div>
           }
          <button className="bg-[var(--foreground)] text-white p-2 rounded-md cursor-pointer mt-4 hover:bg-[var(--foreground-hover)] transition-colors" onClick={() => {
            setIsModalOpen(false);
            resetGame();
          }}>Play again</button>
        </div>
      </div>

      {/* Game */}
      <div className="grid grid-cols-3 max-w-md mx-auto gap-2">
        {board.map((b, i) => (
          <div key={i}>{renderCell(i)}</div>
        ))}
      </div>

      {/* Reset */}
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
