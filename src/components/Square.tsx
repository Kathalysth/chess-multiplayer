import { useContext } from "react";
import { ChessSquare, ChessContextType } from "../@types/chess";
import RenderPiece from "./RenderPiece";
import { ChessContext } from "../context/chessContext";
import { indextoChessAlpha, SQUARE_COL, SQUARE_ROW } from "../utils";

function Square({ square }: { square: ChessSquare }) {
  const { selectSquare, selectedSquare, findPossiblePieceMove } = useContext(
    ChessContext
  ) as ChessContextType;

  const offset: number =
    square.coordinates[SQUARE_ROW] * 8 +
    square.coordinates[SQUARE_COL] +
    square.coordinates[SQUARE_ROW];

  return (
    <button
      role="button"
      aria-label={`cell-${
        square.coordinates[SQUARE_ROW] + 1
      }${indextoChessAlpha(square.coordinates[SQUARE_COL])} button`}
      className={`aspect-square ${
        offset % 2 === 0 ? "bg-stone-600/[0.8]" : "bg-slate-300/[0.8]"
      } flex justify-center items-center relative ${
        square?.chessPiece?.piece?.direction === "down" ? "rotate-180" : ""
      } ${square?.chessPiece ? "cursor-pointer" : ""}`}
    >
      {square?.chessPiece !== undefined && square?.chessPiece !== null ? (
        <RenderPiece
          piece={square.chessPiece.piece}
          onClick={() => {
            selectSquare(square);
            findPossiblePieceMove(square);
          }}
        />
      ) : null}

      {square.canCapture || square.canMoveInto || selectedSquare ? (
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 -z-[1] ${
            square.canCapture ? "bg-red-500/[0.4]" : ""
          } ${square.canMoveInto ? "bg-teal-500/[0.4]" : ""} ${
            selectedSquare &&
            selectedSquare.coordinates[SQUARE_ROW] ===
              square.coordinates[SQUARE_ROW] &&
            selectedSquare.coordinates[SQUARE_COL] ===
              square.coordinates[SQUARE_COL]
              ? "bg-blue-400"
              : ""
          }`}
        />
      ) : null}
    </button>
  );
}

export default Square;
