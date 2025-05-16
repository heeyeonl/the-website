"use client";

import { useState, useEffect } from "react";
import { Github, Info, RefreshCcw, X } from "lucide-react";

export default function TicTacToeGame() {
  const [showDescription, setShowDescription] = useState(false);
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState<string>("Turn: X");
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (i: number) => {
    if (board[i] !== "") return;
    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setWinner(null);
    setIsXNext(!isXNext);
    setStatus(`Turn: ${!isXNext ? "X" : "O"}`);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setIsXNext(true);
    setStatus("Turn: X");
  }

  useEffect(() => {
    const checkWinner = () => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6], // diags
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
      setStatus(`${winner} wins!`);
    } else if (!board.includes("")) {
      setStatus("Draw!");
    }
  }, [board]);

  const renderCell = (i: number) => {
    return (
      <button
        onClick={() => handleClick(i)}
        className={`${
          board[i] === "X"
            ? "text-[#4CAF50] bg-[rgba(129,199,132,0.2)]"
            : board[i] === "O"
            ? "text-[#FF5722] bg-[rgba(255,87,34,0.2)]"
            : "text-[var(--secondary-color)] bg-[var(--ui-white)]"
        } w-full aspect-square flex items-center justify-center h-full border-2 text-4xl border-[var(--ui-light)] rounded-md cursor-pointer transition-colors`}
        disabled={board[i] !== "" || !!winner}
      >
        {board[i]}
      </button>
    );
  };
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center mb-6 relative">
        <h1 className="text-4xl font-sansita">Tic Tac Toe +</h1>
          <Info
            size={28}
            className="ml-2 p-1 cursor-pointer hover:text-[var(--secondary-color)] transition-colors"
            onClick={() => setShowDescription(true)}
          />
        <div className="absolute top-0 right-0">
          <a
            href="https://github.com/heeyeonl/the-website/blob/main/app/components/games/TicTacToeGame.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block text-[var(--text-primary)] hover:text-[var(--text-hover)] transition-colors"
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
        
        {/* Description */}
        <div
          className={`
            ${
              showDescription
               ? "opacity-100 visible"
                : "opacity-0 invisible"
            }
           absolute top-0 left-0 z-10 w-full md:w-2/3 max-w-xl
            bg-[var(--ui-white)] rounded-lg shadow-md transition-all duration-300
          `}
          onClick={(e) => e.stopPropagation()} // Prevent clicks from reaching the overlay
        >
          <div className="absolute top-2 right-2">
            <X
              size={28}
              className="p-1 cursor-pointer hover:text-[var(--secondary-color)] transition-colors"
              onClick={() => setShowDescription(false)}
            />
          </div>
          <div className="p-4 pt-8">
            <ul className="space-y-4">
              <li>Tic Tac Toe is a classic two-player game where X and O take turns marking spaces on a 3x3 grid. The first player to place three of their marks in a horizontal, vertical, or diagonal row wins the game.</li>
              <li>
                <p className="mb-2">How to play:</p>
                <ol className="list-disc pl-5 space-y-2">
                  <li>The game is played on a 3×3 grid of squares</li>
                  <li>Player 1 is X and Player 2 is O</li>
                  <li>Players take turns placing their mark in an empty square</li>
                  <li>The first player to get three marks in a row (horizontally, vertically, or diagonally) wins</li>
                  <li>If all squares are filled and no player has three in a row, the game ends in a draw</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center text-2xl mb-4">{status}</div>

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
          className="cursor-pointer hover:text-[var(--secondary-color)] transition-colors"
        >
          <RefreshCcw size={24} />
        </button>
      </div>
    </div>
  );
}
