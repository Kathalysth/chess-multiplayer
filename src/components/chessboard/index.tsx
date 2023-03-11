import { useState } from "react";
import Square from "../Square";
import { squareInitialData } from "../../data";
import { ChessSquare } from "../../types";

function ChessBoard() {
  const [squareData, setSquareData] = useState(squareInitialData);

  return (
    <div className="order-1 w-full md:w-[33rem] md:h-[33rem] h-[60vh] lg:w-[40rem] lg:w-[40rem] bg-white">
      <div className="w-full h-full grid grid-cols-8 grid-rows-{8}">
        {squareData.map((squareRow: Array<ChessSquare>) => {
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
