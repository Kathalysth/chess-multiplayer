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

function RenderPiece({
  piece,
  onClick,
}: {
  piece: { name: string; color: string };
  onClick: () => void;
}) {
  if (piece.name === "rook" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white rook">
        <WRook className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "rook" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black rook">
        <BRook className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "king" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white king">
        <WKing className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "king" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black king">
        <BKing className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "knight" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white knight">
        <WKnight className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "knight" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black knight">
        <BKnight className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "queen" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white queen">
        <WQueen className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "queen" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black queen">
        <BQueen className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "pawn" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white pawn">
        <WPawn className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "pawn" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black pawn">
        <BPawn className="w-8 h-8 fill-black" />
      </button>
    );
  }
  if (piece.name === "bishop" && piece.color === "white") {
    return (
      <button onClick={onClick} role="button" aria-label="white bishop">
        <WBishop className="w-8 h-8" />
      </button>
    );
  }
  if (piece.name === "bishop" && piece.color === "black") {
    return (
      <button onClick={onClick} role="button" aria-label="black bishop">
        <BBishop className="w-8 h-8 font-sx" />
      </button>
    );
  }
  return <div className="w-8 h-8"></div>;
}

export default RenderPiece;
