import { useContext } from "react";
import Square from "../Square";
import { ChessContext } from "../../context/chessContext";
import { ChessSquare, ChessContextType } from "../../@types/chess";

function ChessBoard() {
  const { data, playerMode } = useContext(ChessContext) as ChessContextType;

  return (
    <div
      className={`order-1 ${playerMode === "black" ? "rotate_black" : ""} ${
        playerMode === "white" ? "rotate_white" : ""
      }`}
    >
      <div className="aspect-square w-full md:w-[10rem] md:h-[10rem] scale-[0.85] h-[60vh] lg:w-[40rem] lg:h-[40rem] grid grid-cols-8 grid-rows-8 bg-white -z-[1]">
        {data.map((square: ChessSquare) => (
          <Square square={square} key={`${square.id}`} />
        ))}
      </div>
    </div>
  );
}

export default ChessBoard;
