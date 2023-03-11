import { ChessSquare } from "../types";
function Square({ square }: { square: ChessSquare }) {
  const offset: number =
    square.coordinates[0] * 8 + square.coordinates[1] + square.coordinates[0];
  return (
    <div
      className={`text-blue-500 ${offset % 2 === 0 ? "bg-black/[0.8]" : ""}`}
    ></div>
  );
}

export default Square;
