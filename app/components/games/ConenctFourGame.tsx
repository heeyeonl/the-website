"use client";
import { useState } from "react";
import { RefreshCcw, X } from "lucide-react";
import ConnectFourBoard from "./ConnectFourBoard";

const ConnectFourGame = () => {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(7).fill(""))
  );
  const [currPlayer, setCurrPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const isXNext = currPlayer === "O";
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkWinner = (row: number, col: number) => {
  return (
    countInLine(row, col, 0, 1) >= 4 ||
    countInLine(row, col, 1, 0) >= 4 ||
    countInLine(row, col, 1, 1) >= 4 ||
    countInLine(row, col, 1, -1) >= 4
  );
};

const countInLine = (row: number, col: number, dr: number, dc: number) => {
  return (
    1 + countOneDirection(row, col, dr, dc) +
    countOneDirection(row, col, -dr, -dc)
  );
};

const countOneDirection = (row: number, col: number, dr: number, dc: number) => {
  let count = 0;
  let r = row + dr;
  let c = col + dc;
  while (
    r >= 0 && r < board.length &&
    c >= 0 && c < board[0].length &&
    board[r][c] === currPlayer
  ) {
    count++;
    r += dr;
    c += dc;
  }
  return count;
};

  const handleColumnClick = (colIdx: number) => {
    for (let r = 0; r < board.length; r++) {
      if (board[r][colIdx] === "") {
        const newBoard = board.map((r) => [...r]);
        newBoard[r][colIdx] = currPlayer;
        setBoard(newBoard);
        
        if (checkWinner(r, colIdx)) {
            setWinner(currPlayer);
            if (currPlayer === "X") {
                setXWins(xWins + 1);
            } else {
                setOWins(oWins + 1);
            }
            setIsModalOpen(true);
        } else {
            const isBoardFull = newBoard.every(row => row.every(cell => cell !== ""));
            if (isBoardFull) {
                setWinner("Draw");
                setIsModalOpen(true);
            }
        }
        
        setCurrPlayer(currPlayer === "X" ? "O" : "X");
        break;
      }
    }
  };

  const resetGame = () => {
    const newBoard = Array.from({ length: 6 }, () => Array(7).fill(""));
    setBoard(newBoard);
    setWinner(null);
  };

  return (
    <div className="max-w-[600px] mx-auto flex flex-col justify-center items-center">
      <div className="flex w-full justify-between gap-4 m-4 text-lg md:text-2xl text-center">
        <div className={`rounded-md p-2 w-full ${isXNext ? "bg-[var(--ui-gray)]/30" :  "bg-red-200/50"}`}>
          <div>🔴 {xWins}</div>
        </div>
        <div className={`rounded-md p-2 w-full ${isXNext ? "bg-yellow-200/50" : "bg-[var(--ui-gray)]/30"}`}>
          <div>🟡 {oWins}</div>
        </div>
      </div>
      
      <ConnectFourBoard board={board} onClickColumn={handleColumnClick} winner={winner} />


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
           {winner === "Draw" ?
             <div className="text-lg text-[var(--ui-black)]">
               <span className={`font-[welcomehome] text-2xl text-gray-500`}>Draw!</span>
             </div>
           : winner &&
             <div className="text-lg text-[var(--ui-black)]">
               <span className={`font-[welcomehome] text-2xl ${winner === "X" ? "text-red-500" : "text-yellow-400"}`}>YOU</span> WON!
             </div>
           }
          <button className="bg-[var(--foreground)] text-white p-2 rounded-md cursor-pointer mt-4 hover:bg-[var(--foreground-hover)] transition-colors" onClick={() => {
            setIsModalOpen(false);
            resetGame();
          }}>Play again</button>
        </div>
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
};

export default ConnectFourGame;
