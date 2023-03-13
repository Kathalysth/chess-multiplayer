// @ts-ignore
import { ReactComponent as WKing } from "../assets/svg/white-king.svg";
// @ts-ignore
import { ReactComponent as BKing } from "../assets/svg/black-king.svg";
// @ts-ignore
import { ReactComponent as WQueen } from "../assets/svg/white-queen.svg";
// @ts-ignore
import { ReactComponent as BQueen } from "../assets/svg/black-queen.svg";
// @ts-ignore
import { ReactComponent as WKnight } from "../assets/svg/white-knight.svg";
// @ts-ignore
import { ReactComponent as BKnight } from "../assets/svg/black-knight.svg";
// @ts-ignore
import { ReactComponent as WPawn } from "../assets/svg/white-pawn.svg";
// @ts-ignore
import { ReactComponent as BPawn } from "../assets/svg/black-pawn.svg";
// @ts-ignore
import { ReactComponent as WRook } from "../assets/svg/white-rook.svg";
// @ts-ignore
import { ReactComponent as BRook } from "../assets/svg/black-rook.svg";
// @ts-ignore
import { ReactComponent as WBishop } from "../assets/svg/white-bishop.svg";
// @ts-ignore
import { ReactComponent as BBishop } from "../assets/svg/black-bishop.svg";

function RenderPiece({ piece }: { piece: { name: string; color: string } }) {
  if (piece.name === "rook" && piece.color === "white") {
    return (
      <div aria-label="white rook">
        <WRook className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "rook" && piece.color === "black") {
    return (
      <div aria-label="black rook">
        <BRook className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "king" && piece.color === "white") {
    return (
      <div aria-label="white king">
        <WKing className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "king" && piece.color === "black") {
    return (
      <div aria-label="black king">
        <BKing className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "knight" && piece.color === "white") {
    return (
      <div aria-label="white knight">
        <WKnight className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "knight" && piece.color === "black") {
    return (
      <div aria-label="black knight">
        <BKnight className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "queen" && piece.color === "white") {
    return (
      <div aria-label="white queen">
        <WQueen className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "queen" && piece.color === "black") {
    return (
      <div aria-label="black queen">
        <BQueen className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "pawn" && piece.color === "white") {
    return (
      <div aria-label="white pawn">
        <WPawn className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "pawn" && piece.color === "black") {
    return (
      <div aria-label="black pawn">
        <BPawn className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "bishop" && piece.color === "white") {
    return (
      <div aria-label="white bishop">
        <WBishop className="w-12 h-12" />
      </div>
    );
  }
  if (piece.name === "bishop" && piece.color === "black") {
    return (
      <div aria-label="black bishop">
        <BBishop className="w-12 h-12" />
      </div>
    );
  }
  return <div className="w-12 h-12"></div>;
}

export default RenderPiece;
