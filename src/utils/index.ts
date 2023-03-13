import { ChessSquare, ChessPiece } from "../@types/chess";

export const SQUARE_ROW = 0;
export const SQUARE_COL = 1;

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
  console.log(selectedSquare.chessPiece?.state.isInitialMove);
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    return [
      ...findValidPoints([row + offset * 1, column]),
      ...findValidPoints([row + offset * 2, column]),
    ];
  }

  return [...findValidPoints([row + offset * 1, column])];
}

function findValidPoints(points: number[]): number[][] {
  return points[SQUARE_ROW] >= 0 &&
    points[SQUARE_ROW] <= 7 &&
    points[SQUARE_COL] >= 0 &&
    points[SQUARE_COL] <= 7
    ? [points]
    : [];
}

export function getKnightPossibleMovement(
  selectedSquare: ChessSquare
): number[][] {
  const [row, column] = selectedSquare.coordinates;
  const offset = getOffset(selectedSquare);
  return [
    ...findValidPoints([row + offset * 2, column + offset * 1]), // 2 rows up, 1 col right
    ...findValidPoints([row + offset * 2, column + offset * -1]), // 2 up rows up 1 col left
    ...findValidPoints([row + offset * -2, column + offset * 1]), // 2 rows down 1 col right
    ...findValidPoints([row + offset * -2, column + offset * -1]), // 2 rows down 1 col left
    ...findValidPoints([row + offset * 1, column + offset * 2]), // 2 cols up, 1 row right
    ...findValidPoints([row + offset * 1, column + offset * -2]), // 2 cols up rows up 1 row left
    ...findValidPoints([row + offset * -1, column + offset * 2]), // 2 cols down 1 row right
    ...findValidPoints([row + offset * -1, column + offset * -2]), // 2 cols down 1 row left
  ];
}
export function getKingPossibleMovement(
  selectedSquare: ChessSquare
): number[][] {
  const [row, column] = selectedSquare.coordinates;
  const offset = getOffset(selectedSquare);
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    //can castle
    return [
      ...findValidPoints([row + offset * 1, column + offset * 1]),
      ...findValidPoints([row + offset * -1, column + offset * -1]),
      ...findValidPoints([row + offset * 1, column]),
      ...findValidPoints([row + offset * -1, column]),
      ...findValidPoints([row, column + offset * 1]),
      ...findValidPoints([row, column + offset * -1]),
      ...findValidPoints([row + offset * -1, column + offset * 1]),
      ...findValidPoints([row + offset * 1, column + offset * -1]),
    ];
  }

  return [
    ...findValidPoints([row + offset * 1, column + offset * 1]),
    ...findValidPoints([row + offset * -1, column + offset * -1]),
    ...findValidPoints([row + offset * 1, column]),
    ...findValidPoints([row + offset * -1, column]),
    ...findValidPoints([row, column + offset * 1]),
    ...findValidPoints([row, column + offset * -1]),
    ...findValidPoints([row + offset * -1, column + offset * 1]),
    ...findValidPoints([row + offset * 1, column + offset * -1]),
  ];
}

export function getBishopPossibleMovement(
  selectedSquare: ChessSquare
): number[][] {
  const [row, column] = selectedSquare.coordinates;
  const offset = getOffset(selectedSquare);
  return [
    //up right
    ...findValidPoints([row + offset * 1, column + offset * 1]), // 1 rows up, 1 col right
    ...findValidPoints([row + offset * 2, column + offset * 2]), // 2 up rows up 1 col left
    ...findValidPoints([row + offset * 3, column + offset * 3]), // 2 rows down 1 col right
    ...findValidPoints([row + offset * 4, column + offset * 4]), // 2 rows down 1 col left
    ...findValidPoints([row + offset * 5, column + offset * 5]), // 2 cols up, 1 row right
    ...findValidPoints([row + offset * 6, column + offset * 6]), // 2 cols up rows up 1 row left
    ...findValidPoints([row + offset * 7, column + offset * 7]), // 2 cols down 1 row right
    //up left
    ...findValidPoints([row + offset * 1, column + offset * -1]), // 1 rows up, 1 col right
    ...findValidPoints([row + offset * 2, column + offset * -2]), // 2 up rows up 1 col left
    ...findValidPoints([row + offset * 3, column + offset * -3]), // 2 rows down 1 col right
    ...findValidPoints([row + offset * 4, column + offset * -4]), // 2 rows down 1 col left
    ...findValidPoints([row + offset * 5, column + offset * -5]), // 2 cols up, 1 row right
    ...findValidPoints([row + offset * 6, column + offset * -6]), // 2 cols up rows up 1 row left
    ...findValidPoints([row + offset * 7, column + offset * -7]), // 2 cols down 1 row right
    //down right
    ...findValidPoints([row + offset * -1, column + offset * 1]), // 1 rows up, 1 col right
    ...findValidPoints([row + offset * -2, column + offset * 2]), // 2 up rows up 1 col left
    ...findValidPoints([row + offset * -3, column + offset * 3]), // 2 rows down 1 col right
    ...findValidPoints([row + offset * -4, column + offset * 4]), // 2 rows down 1 col left
    ...findValidPoints([row + offset * -5, column + offset * 5]), // 2 cols up, 1 row right
    ...findValidPoints([row + offset * -6, column + offset * 6]), // 2 cols up rows up 1 row left
    ...findValidPoints([row + offset * -7, column + offset * 7]), // 2 cols down 1 row right
    //down left
    ...findValidPoints([row + offset * -1, column + offset * -1]), // 1 rows up, 1 col right
    ...findValidPoints([row + offset * -2, column + offset * -2]), // 2 up rows up 1 col left
    ...findValidPoints([row + offset * -3, column + offset * -3]), // 2 rows down 1 col right
    ...findValidPoints([row + offset * -4, column + offset * -4]), // 2 rows down 1 col left
    ...findValidPoints([row + offset * -5, column + offset * -5]), // 2 cols up, 1 row right
    ...findValidPoints([row + offset * -6, column + offset * -6]), // 2 cols up rows up 1 row left
    ...findValidPoints([row + offset * -7, column + offset * -7]), // 2 cols down 1 row right
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

export function indextoChessAlpha(index: number): string {
  if (index === 0) return "a";
  if (index === 1) return "b";
  if (index === 2) return "c";
  if (index === 3) return "d";
  if (index === 4) return "e";
  if (index === 5) return "f";
  if (index === 6) return "g";
  if (index === 7) return "h";

  return "";
}
