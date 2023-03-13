// context/todoContext.tsx
import * as React from "react";
import { ChessContextType, ChessSquare, PlayerMode } from "../@types/chess";
import { squareInitialData } from "../data";
import {
  getBishopPossibleMovement,
  getKingPossibleMovement,
  getKnightPossibleMovement,
  getPawnPossibleMovement,
  getQueenPossibleMovement,
  getRookPossibleMovement,
  resetPossibleMovementOrCapture,
  SQUARE_COL,
  SQUARE_ROW,
} from "../utils";

export const ChessContext = React.createContext<ChessContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  const [turn, setTurn] = React.useState<PlayerMode>("white");
  const [openMoves, setOpenMoves] = React.useState<number[][]>([]);
  const [data, setData] = React.useState<ChessSquare[][]>([
    ...squareInitialData,
  ]);
  const [playerMode, setPlayerMode] = React.useState<PlayerMode>("default");
  const [selectedSquare, setSelectedSquare] =
    React.useState<ChessSquare | null>(null);

  const selectSquare = (square: ChessSquare | null) => {
    if (square === null) {
      const newData = resetPossibleMovementOrCapture([...data]);
      setData(newData);
    }
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

      newData = resetPossibleMovementOrCapture(newData);
      setSelectedSquare(null);
      toggleTurn();
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
    setTurn("white");
  };

  const findPossiblePieceMove = (selectedSquare: ChessSquare) => {
    if (selectedSquare !== null) {
      let coordinates: number[][] = [];
      if (selectedSquare.chessPiece?.piece.name === "pawn") {
        coordinates = getPawnPossibleMovement(selectedSquare, data);
      } else if (selectedSquare.chessPiece?.piece.name === "knight") {
        coordinates = getKnightPossibleMovement(selectedSquare, data);
      } else if (selectedSquare.chessPiece?.piece.name === "bishop") {
        coordinates = getBishopPossibleMovement(selectedSquare, data);
      } else if (selectedSquare.chessPiece?.piece.name === "king") {
        coordinates = getKingPossibleMovement(selectedSquare, data);
      } else if (selectedSquare.chessPiece?.piece.name === "queen") {
        coordinates = getQueenPossibleMovement(selectedSquare, data);
      } else if (selectedSquare.chessPiece?.piece.name === "rook") {
        coordinates = getRookPossibleMovement(selectedSquare, data);
      }
      if (coordinates.length) {
        setOpenMoves(coordinates);
      }
      updateSquaresWithCoordinates(coordinates, selectedSquare);
    }
  };

  function updateSquaresWithCoordinates(
    coordinates: number[][],
    square: ChessSquare
  ) {
    let newData = resetPossibleMovementOrCapture(data);

    coordinates.forEach((coordinates: number[]) => {
      const [tCord_row, tCord_col] = coordinates;

      if (!newData[tCord_row][tCord_col].chessPiece) {
        newData[tCord_row][tCord_col].canMoveInto = true;
      }

      if (
        newData[tCord_row][tCord_col].chessPiece?.piece.color !==
        square?.chessPiece?.piece.color
      ) {
        newData[tCord_row][tCord_col].canCapture = true;
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
