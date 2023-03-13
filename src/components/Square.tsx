import { useContext } from "react";
import { ChessSquare, ChessContextType } from "../@types/chess";
import RenderPiece from "./RenderPiece";
import { ChessContext } from "../context/chessContext";
import { indextoChessAlpha, SQUARE_COL, SQUARE_ROW } from "../utils";

function Square({ square }: { square: ChessSquare }) {
  const {
    selectSquare,
    selectedSquare,
    turn,
    findPossiblePieceMove,
    initiateMoveInto,
  } = useContext(ChessContext) as ChessContextType;

  const offset: number =
    square.coordinates[SQUARE_ROW] * 8 +
    square.coordinates[SQUARE_COL] +
    square.coordinates[SQUARE_ROW];

  return (
    <button
      onClick={() => {
        if (
          square.chessPiece &&
          square.chessPiece.piece.color === turn &&
          !selectedSquare
        ) {
          selectSquare(square);
          findPossiblePieceMove(square);
        } else if (
          selectedSquare &&
          square.chessPiece &&
          selectedSquare.coordinates[0] === square.coordinates[0] &&
          selectedSquare.coordinates[1] === square.coordinates[1]
        ) {
          selectSquare(null);
        } else {
          initiateMoveInto(square);
        }
      }}
      role="button"
      aria-label={`square-${indextoChessAlpha(
        square.coordinates[SQUARE_COL]
      ).toUpperCase()}${square.coordinates[SQUARE_ROW] + 1}`}
      className={`aspect-square ${
        offset % 2 === 0 ? "bg-stone-600/[0.8]" : "bg-slate-300/[0.8]"
      } flex justify-center items-center relative ${
        square?.chessPiece?.piece?.direction === "down" ? "rotate-180" : ""
      } ${square?.chessPiece ? "cursor-pointer" : ""}`}
    >
      {square?.chessPiece !== undefined && square?.chessPiece !== null ? (
        <RenderPiece piece={square.chessPiece.piece} />
      ) : null}

      {square.canCapture || square.canMoveInto || selectedSquare ? (
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 ${
            square.canCapture ? "bg-red-500/[0.4]" : ""
          } ${square.canMoveInto ? "bg-teal-500/[0.4]" : ""} ${
            selectedSquare &&
            selectedSquare.coordinates[SQUARE_ROW] ===
              square.coordinates[SQUARE_ROW] &&
            selectedSquare.coordinates[SQUARE_COL] ===
              square.coordinates[SQUARE_COL]
              ? "bg-blue-400/[0.4]"
              : ""
          }`}
        />
      ) : null}
    </button>
  );
}

export default Square;
