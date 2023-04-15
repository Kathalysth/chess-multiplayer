import { useContext } from "react";
import { ChessSquare, ChessContextType } from "../@types/chess";
import RenderPiece from "./RenderPiece";
import { ChessContext } from "../context/chessContext";

function Square({ square }: { square: ChessSquare }) {
  const {
    data,
    selectSquare,
    selectedSquare,
    turn,
    movables,
    captures,
    findLegalMoves,
    initiateMoveInto,
  } = useContext(ChessContext) as ChessContextType;

  if (square.chessPiece && square.chessPiece.piece.name === "king") {
    console.log(square.chessPiece.state.threats);
  }
  return (
    <button
      onClick={() => {
        if (square.chessPiece && square.chessPiece.piece.color === turn) {
          if (selectedSquare && selectedSquare.id == square.id) {
            selectSquare(null);
          } else {
            selectSquare(square);
            findLegalMoves(square, data);
          }
        } else {
          initiateMoveInto(square);
        }
      }}
      role="button"
      aria-label={`square-${square.id}`}
      className={`aspect-square ${
        square.bg === "white" ? "bg-slate-300/[0.8]" : "bg-stone-600/[0.8]"
      } flex justify-center items-center relative ${
        square?.chessPiece?.piece?.direction === "down" ? "rotate-180" : ""
      } ${square?.chessPiece ? "cursor-pointer" : ""}`}
    >
      {square?.chessPiece !== undefined && square?.chessPiece !== null ? (
        <RenderPiece piece={square.chessPiece.piece} />
      ) : null}

      {selectedSquare && captures.includes(square.id) ? (
        <div
          id="captureOverlay"
          className={`absolute top-0 left-0 right-0 bottom-0 bg-red-500/[0.4]`}
        />
      ) : null}
      {selectedSquare &&
      movables.includes(square.id) &&
      !captures.includes(square.id) ? (
        <div
          id="moveOverlay"
          className={`absolute top-0 left-0 right-0 bottom-0 bg-teal-500/[0.4]`}
        />
      ) : null}
      {selectedSquare ? (
        <div
          id="selectedOverlay"
          className={`absolute top-0 left-0 right-0 bottom-0 ${
            selectedSquare && selectedSquare.id == square.id
              ? "bg-blue-400/[0.4]"
              : ""
          }`}
        />
      ) : null}
    </button>
  );
}

export default Square;
