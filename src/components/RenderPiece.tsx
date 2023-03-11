// @ts-ignore
import { ReactComponent as WKing } from "../assets/svg/w_king_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BKing } from "../assets/svg/b_king_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as WQueen } from "../assets/svg/w_queen_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BQueen } from "../assets/svg/b_queen_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as WKnight } from "../assets/svg/w_knight_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BKnight } from "../assets/svg/b_knight_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as WPawn } from "../assets/svg/w_pawn_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BPawn } from "../assets/svg/b_pawn_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as WRook } from "../assets/svg/w_rook_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BRook } from "../assets/svg/b_rook_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as WBishop } from "../assets/svg/w_bishop_svg_NoShadow.svg";
// @ts-ignore
import { ReactComponent as BBishop } from "../assets/svg/b_bishop_svg_NoShadow.svg";

function RenderPiece({ piece }: { piece: { name: string; color: string } }) {
  if (piece.name === "rook" && piece.color === "white") {
    return <WRook className="w-8 h-8" />;
  }
  if (piece.name === "rook" && piece.color === "black") {
    return <BRook className="w-8 h-8" />;
  }
  if (piece.name === "king" && piece.color === "white") {
    return <WKing className="w-8 h-8" />;
  }
  if (piece.name === "king" && piece.color === "black") {
    return <BKing className="w-8 h-8" />;
  }
  if (piece.name === "knight" && piece.color === "white") {
    return <WKnight className="w-8 h-8" />;
  }
  if (piece.name === "knight" && piece.color === "black") {
    return <BKnight className="w-8 h-8" />;
  }
  if (piece.name === "queen" && piece.color === "white") {
    return <WQueen className="w-8 h-8" />;
  }
  if (piece.name === "queen" && piece.color === "black") {
    return <BQueen className="w-8 h-8" />;
  }
  if (piece.name === "pawn" && piece.color === "white") {
    return <WPawn className="w-8 h-8" />;
  }
  if (piece.name === "pawn" && piece.color === "black") {
    return <BPawn className="w-8 h-8 fill-black" />;
  }
  if (piece.name === "bishop" && piece.color === "white") {
    return <WBishop className="w-8 h-8" />;
  }
  if (piece.name === "bishop" && piece.color === "black") {
    return <BBishop className="w-8 h-8 font-sx" />;
  }
  return <div className="w-8 h-8"></div>;
}

export default RenderPiece;
