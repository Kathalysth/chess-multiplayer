// context/todoContext.tsx
import * as React from "react";
import useSound from "use-sound";
import { ChessContextType, ChessSquare, PlayerMode } from "../@types/chess";
import { squareInitialData } from "../data";
import startSoundFx from "../assets/sfx/board-start.mp3";
import pieceMoveFx from "../assets/sfx/piece-placement.mp3";
import { getLegalMoves, calculateOpponentsLegalMoves } from "../utils";

export const ChessContext = React.createContext<ChessContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  const [startSound] = useSound(startSoundFx, { volume: 0.75 });
  const [moveSound] = useSound(pieceMoveFx, { volume: 0.75 });
  const [movables, setMovables] = React.useState<string[]>([]);
  const [captures, setCaptures] = React.useState<string[]>([]);
  const [turn, setTurn] = React.useState<PlayerMode>("white");
  const [selectedSquareMoves, setSelectedSquareMoves] = React.useState<
    string[]
  >([]);
  const [data, setData] = React.useState<ChessSquare[]>(
    JSON.parse(JSON.stringify(squareInitialData))
  );
  const [playerMode, setPlayerMode] = React.useState<PlayerMode>("default");
  const [selectedSquare, setSelectedSquare] =
    React.useState<ChessSquare | null>(null);

  const selectSquare = (square: ChessSquare | null) => {
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

  const initiateMoveInto = (targetSquare: ChessSquare) => {
    if (selectedSquare && selectedSquare.chessPiece) {
      const targetSquareID: string | undefined = selectedSquareMoves.find(
        (move) => move === targetSquare.id
      );
      if (targetSquareID) {
        if (
          (targetSquare.chessPiece &&
            selectedSquare.chessPiece.state.canCapture.includes(
              targetSquareID
            )) ||
          !targetSquare.chessPiece
        ) {
          data[targetSquare.index].chessPiece = {
            ...selectedSquare.chessPiece,
            state: { ...selectedSquare.chessPiece.state, isInitialMove: true },
          };
          data[selectedSquare.index].chessPiece = null;

          // update the piece moves
          data[targetSquare.index].chessPiece?.moves ===
            findLegalMoves(data[targetSquare.index], data);

          calculateOpponentsLegalMoves(
            data.filter(
              (square) =>
                square.chessPiece &&
                square.chessPiece?.piece.color !==
                  data[targetSquare.index].chessPiece?.piece.color
            ),
            data
          );
          setSelectedSquare(null);
          toggleTurn();
          setData(data);
          moveSound();
        }
      }
    }
  };

  const resetGame = () => {
    setData(JSON.parse(JSON.stringify(squareInitialData)));
    setSelectedSquareMoves([]);
    setSelectedSquare(null);
    setTurn("white");
    startSound();
  };

  const findLegalMoves = (
    selectedSquare: ChessSquare,
    data: ChessSquare[]
  ): string[] => {
    let squares: string[] = [];
    if (selectedSquare !== null) {
      squares = getLegalMoves(selectedSquare, data);

      if (squares.length) {
        setSelectedSquareMoves(squares);
      }
      updateSquaresWithCoordinates(squares, selectedSquare);
    }
    return squares;
  };

  function updateSquaresWithCoordinates(
    squareids: string[],
    square: ChessSquare
  ) {
    let newMovables: string[] = [];
    let newCaptures: string[] = [];
    squareids.forEach((squareid: string) => {
      const targetSquare = data.find((squ) => squ.id === squareid);
      const originSquare = data.find((squ) => squ.id === square.id);
      if (targetSquare && originSquare) {
        if (
          !targetSquare.chessPiece ||
          (targetSquare.chessPiece &&
            targetSquare.chessPiece.piece.color !==
              originSquare.chessPiece?.piece.color)
        ) {
          newMovables.push(squareid);
        } else {
          newCaptures.push(squareid);
        }
      }
    });
    setCaptures(newCaptures);
    setMovables(newMovables);
    setData(data);
  }

  return (
    <ChessContext.Provider
      value={{
        selectedSquareMoves,
        turn,
        movables,
        captures,
        data,
        selectedSquare,
        playerMode,
        resetGame,
        selectSquare,
        toggleTurn,
        initiateMoveInto,
        togglePlayerMode,
        findLegalMoves,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};
export default ChessProvider;
