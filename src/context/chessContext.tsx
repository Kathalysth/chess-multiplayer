// context/todoContext.tsx
import * as React from "react";
import { ChessContextType, ChessSquare, PlayerMode } from "../@types/chess";
import { squareInitialData } from "../data";
import {
  getKnightPossibleMovement,
  getPawnPossibleMovement,
  resetPossibleMovement,
} from "../utils";

export const ChessContext = React.createContext<ChessContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  const [turn, setTurn] = React.useState<PlayerMode>("default");
  const [data, setData] = React.useState<ChessSquare[][]>(squareInitialData);
  const [playerMode, setPlayerMode] = React.useState<PlayerMode>("default");
  const [selectedSquare, setSelectedSquare] =
    React.useState<ChessSquare | null>(null);

  const selectSquare = (square: ChessSquare) => {
    setSelectedSquare(square);
  };

  const togglePlayerMode = (value: string) => {
    if (playerMode === "black") {
      setPlayerMode("white");
      return;
    }
    setPlayerMode("black");
  };

  const toggleTurn = () => {
    if (turn === "white" || turn === "default") {
      setTurn("black");
      return;
    }
    setTurn("white");
  };

  const findPossiblePieceMove = (selectedSquare: ChessSquare) => {
    if (selectedSquare !== null) {
      let coordinates: number[][] = [];
      if (selectedSquare.chessPiece?.piece.name === "pawn") {
        coordinates = getPawnPossibleMovement(selectedSquare);
      } else if (selectedSquare.chessPiece?.piece.name === "knight") {
        coordinates = getKnightPossibleMovement(selectedSquare);
      }
      updateSquaresWithCoordinates(coordinates);
    }
  };

  function updateSquaresWithCoordinates(coordinates: number[][]) {
    let newData = resetPossibleMovement(data);
    coordinates.forEach((coordinate: number[]) => {
      if (!newData[coordinate[0]][coordinate[1]].chessPiece) {
        newData[coordinate[0]][coordinate[1]].canMoveInto = true;
      }
    });
    setData(newData);
  }

  return (
    <ChessContext.Provider
      value={{
        turn,
        data,
        toggleTurn,
        selectedSquare,
        selectSquare,
        playerMode,
        togglePlayerMode,
        findPossiblePieceMove,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};
export default ChessProvider;
