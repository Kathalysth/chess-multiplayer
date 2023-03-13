import { ChessSquare, ChessPiece } from "../@types/chess";

function getOffset(selectedSquare: ChessSquare): number {
  return selectedSquare.chessPiece?.piece.direction === "up" ? -1 : 1;
}
export function handlePiecesMovement(
  chessPiece: ChessPiece,
  currentData: ChessSquare[][]
): ChessSquare[][] {
  return currentData;
}

export function handlePiecesCapture(
  chessPiece: ChessPiece,
  currentData: ChessSquare[][]
): ChessSquare[][] {
  return currentData;
}

export function showPossibleMovementOrCapture(
  chessPiece: ChessPiece,
  currentData: ChessSquare[][]
): ChessSquare[][] {
  return currentData;
}

export function getPawnPossibleMovement(
  selectedSquare: ChessSquare
): number[][] {
  const [row, column] = selectedSquare.coordinates;
  const offset = getOffset(selectedSquare);
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    return [
      ...findValidPoints([row + offset * 1, column]),
      ...findValidPoints([row + offset * 2, column]),
    ];
  }

  return [...findValidPoints([row + offset * 1, column])];
}

function findValidPoints(points: number[]): number[][] {
  return (points[0] >= 0 || points[0] <= 7) &&
    (points[1] >= 0 || points[1] <= 7)
    ? [points]
    : [];
}

export function getKnightPossibleMovement(
  selectedSquare: ChessSquare
): number[][] {
  const [row, column] = selectedSquare.coordinates;
  const offset = getOffset(selectedSquare);
  return [
    ...findValidPoints([row + offset * 2, column + offset * 1]), // up right
    ...findValidPoints([row + offset * 2, column + offset * -1]), // up left
    ...findValidPoints([row + offset * -2, column + offset * 1]), // down right
    ...findValidPoints([row + offset * -2, column + offset * -1]), // down left
  ];
}

export function resetPossibleMovement(data: ChessSquare[][]) {
  let squares = [...data];

  data.forEach((d) => {
    d.forEach((f) => {
      if (f.canMoveInto && f.canMoveInto === true) {
        f.canMoveInto = false;
      }
    });
  });

  return squares;
}
