import { useContext } from "react";
import Square from "../Square";
import { ChessContext } from "../../context/chessContext";
import { ChessSquare, ChessContextType } from "../../@types/chess";

function ChessBoard() {
  const { data } = useContext(ChessContext) as ChessContextType;

  return (
    <div className="order-1 w-full md:w-[33rem] md:h-[33rem] h-[60vh] lg:w-[40rem] lg:w-[40rem] bg-white">
      <div className="w-full h-full grid grid-cols-8 grid-rows-{8}">
        {data.map((squareRow: Array<ChessSquare>) => {
          return squareRow.map((chessSquare: ChessSquare) => (
            <Square
              square={chessSquare}
              key={`${chessSquare.coordinates[0]}-${chessSquare.coordinates[1]}`}
            />
          ));
        })}
      </div>
    </div>
  );
}

export default ChessBoard;
