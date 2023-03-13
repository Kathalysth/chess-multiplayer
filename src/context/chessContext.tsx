// context/todoContext.tsx
import * as React from "react";
import { ChessContextType, ChessSquare, PlayerMode } from "../@types/chess";
import { squareInitialData } from "../data";
import {
  getBishopPossibleMovement,
  getKnightPossibleMovement,
  getPawnPossibleMovement,
  resetPossibleMovement,
  SQUARE_COL,
  SQUARE_ROW,
} from "../utils";

export const ChessContext = React.createContext<ChessContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  const [turn, setTurn] = React.useState<PlayerMode>("default");
  const [openMoves, setOpenMoves] = React.useState<number[][]>([]);
  const [data, setData] = React.useState<ChessSquare[][]>([
    ...squareInitialData,
  ]);
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

  const initiateMoveInto = (originSquare: ChessSquare) => {
    const targetSquareCoord: number[] | undefined = openMoves.find(
      (move) =>
        move[SQUARE_ROW] === originSquare.coordinates[SQUARE_ROW] &&
        move[SQUARE_COL] === originSquare.coordinates[SQUARE_COL]
    );
    if (targetSquareCoord && selectedSquare && selectedSquare.chessPiece) {
      let newData = [...data];
      const [tCord_row, tCord_col] = targetSquareCoord;
      const [originCord_row, originCord_col] = selectedSquare.coordinates;

      newData[tCord_row][tCord_col].chessPiece = {
        ...selectedSquare.chessPiece,
        state: { ...selectedSquare.chessPiece.state, isInitialMove: true },
      };

      delete newData[originCord_row][originCord_col].chessPiece;

      newData = resetPossibleMovement(newData);
      console.log(newData);
      setSelectedSquare(null);
      setData(newData);
    }
  };

  const resetGame = () => {
    console.log(squareInitialData);
    let newData = [...squareInitialData];
    console.log("resetting");
    setData(newData);
    setOpenMoves([]);
    setSelectedSquare(null);
    setTurn("default");
  };

  const findPossiblePieceMove = (selectedSquare: ChessSquare) => {
    if (selectedSquare !== null) {
      let coordinates: number[][] = [];
      if (selectedSquare.chessPiece?.piece.name === "pawn") {
        coordinates = getPawnPossibleMovement(selectedSquare);
      } else if (selectedSquare.chessPiece?.piece.name === "knight") {
        coordinates = getKnightPossibleMovement(selectedSquare);
      } else if (selectedSquare.chessPiece?.piece.name === "bishop") {
        coordinates = getBishopPossibleMovement(selectedSquare);
      }
      if (coordinates.length) {
        setOpenMoves(coordinates);
      }
      updateSquaresWithCoordinates(coordinates);
    }
  };

  function updateSquaresWithCoordinates(coordinates: number[][]) {
    let newData = resetPossibleMovement(data);
    coordinates.forEach((coordinates: number[]) => {
      if (
        !newData[coordinates[SQUARE_ROW]][coordinates[SQUARE_COL]].chessPiece
      ) {
        newData[coordinates[SQUARE_ROW]][coordinates[SQUARE_COL]].canMoveInto =
          true;
      }
    });

    setData(newData);
  }

  return (
    <ChessContext.Provider
      value={{
        openMoves,
        turn,
        data,
        selectedSquare,
        playerMode,
        resetGame,
        selectSquare,
        toggleTurn,
        initiateMoveInto,
        togglePlayerMode,
        findPossiblePieceMove,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};
export default ChessProvider;
