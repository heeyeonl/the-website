const ConnectFourBoard = ({ board, winner, onClickColumn }: {
    board: string[][],
    winner: string | null,
    onClickColumn: (colIdx: number) => void
}) => {
  return (
    <div className="grid grid-cols-7 gap-2 w-full max-w-[600px] mx-auto">
      {[...board].reverse().map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`}
            className={`aspect-square w-full rounded-full flex items-center justify-center cursor-pointer ${
                col === "X"
                    ? "bg-red-500"
                    : col === "O"
                        ? "bg-blue-500"
                        : "bg-[#ccc]"
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
