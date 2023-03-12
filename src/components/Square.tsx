import { ChessSquare } from "../@types/chess";
import RenderPiece from "./RenderPiece";

function Square({ square }: { square: ChessSquare }) {
  const offset: number =
    square.coordinates[0] * 8 + square.coordinates[1] + square.coordinates[0];
  return (
    <div
      className={`${
        offset % 2 === 0 ? "bg-stone-600/[0.8]" : "bg-slate-300/[0.8]"
      } flex justify-center items-center relative ${
        square?.chessPiece?.piece?.direction === "down" ? "rotate-180" : ""
      } ${square?.chessPiece ? "cursor-pointer" : ""}`}
    >
      {square?.chessPiece !== undefined && square?.chessPiece !== null ? (
        <RenderPiece piece={square.chessPiece.piece} onClick={() => {}} />
      ) : null}
      {square.canCapture || square.canMoveInto ? (
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 -z-[1] ${
            square.canCapture ? "bg-red-500/[0.4]" : ""
          } ${square.canMoveInto ? "bg-teal-500/[0.4]" : ""}`}
        />
      ) : null}
    </div>
  );
}

export default Square;
