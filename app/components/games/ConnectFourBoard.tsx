const ConnectFourBoard = ({ board, winner, onClickColumn }: {
    board: string[][],
    winner: string | null,
    onClickColumn: (colIdx: number) => void
}) => {
  return (
    <div className="grid grid-cols-7 gap-2 w-full max-w-[600px] mx-auto bg-blue-500 p-8 rounded-4xl">
      {[...board].reverse().map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`}
            className={`aspect-square w-full rounded-full flex items-center justify-center cursor-pointer ${
                col === "X"
                    ? "bg-red-500"
                    : col === "O"
                        ? "bg-yellow-400"
                        : "bg-[var(--ui-white)]"
            }`}
            onClick={() => {
                if (winner) return;
                onClickColumn(colIdx)
            }}
          ></div>
        ))
      )}
    </div>
  );
};

export default ConnectFourBoard;
