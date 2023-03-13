import { ChessSquare, ChessPiece, Direction } from "../@types/chess";

export const SQUARE_ROW = 0;
export const SQUARE_COL = 1;

function getOffset(selectedSquare: ChessSquare): number {
  return selectedSquare.chessPiece?.piece.direction === "up" ? -1 : 1;
}

function findValidPoints(points: number[]): number[][] {
  return points[SQUARE_ROW] >= 0 &&
    points[SQUARE_ROW] <= 7 &&
    points[SQUARE_COL] >= 0 &&
    points[SQUARE_COL] <= 7
    ? [points]
    : [];
}
function findValidBoundaries(points: number[]): number[] {
  return points[SQUARE_ROW] >= 0 &&
    points[SQUARE_ROW] <= 7 &&
    points[SQUARE_COL] >= 0 &&
    points[SQUARE_COL] <= 7
    ? points
    : [];
}
export function getPawnPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
): number[][] {
  const offset = getOffset(selectedSquare);
  let maxMovement = 1;
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    maxMovement = 2;
  }

  return [
    ...pawnCanAdvance(selectedSquare, offset, maxMovement, "up", data),
    ...pawnTakesDiagonally(selectedSquare, offset, 1, "up-left", data),
    ...pawnTakesDiagonally(selectedSquare, offset, 1, "up-right", data),
  ];
}

export function getKnightPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
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
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
): number[][] {
  const offset = getOffset(selectedSquare);
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    //can castle
    return [
      //up right diagonal
      ...move(selectedSquare.coordinates, offset, 1, "up-right", data),

      //right
      ...move(selectedSquare.coordinates, offset, 1, "right", data),

      //up
      ...move(selectedSquare.coordinates, offset, 1, "up", data),

      //up left diagonal
      ...move(selectedSquare.coordinates, offset, 1, "up-left", data),

      //down right diagonal
      ...move(selectedSquare.coordinates, offset, 1, "down-right", data),
      //down left diagonal
      ...move(selectedSquare.coordinates, offset, 1, "down-left", data),

      //left
      ...move(selectedSquare.coordinates, offset, 1, "left", data),

      //down
      ...move(selectedSquare.coordinates, offset, 1, "down", data),
    ];
  }

  return [
    //up right diagonal
    ...move(selectedSquare.coordinates, offset, 1, "up-right", data),

    //right
    ...move(selectedSquare.coordinates, offset, 1, "right", data),

    //up
    ...move(selectedSquare.coordinates, offset, 1, "up", data),

    //up left diagonal
    ...move(selectedSquare.coordinates, offset, 1, "up-left", data),

    //down right diagonal
    ...move(selectedSquare.coordinates, offset, 1, "down-right", data),
    //down left diagonal
    ...move(selectedSquare.coordinates, offset, 1, "down-left", data),

    //left
    ...move(selectedSquare.coordinates, offset, 1, "left", data),

    //down
    ...move(selectedSquare.coordinates, offset, 1, "down", data),
  ];
}

export function getBishopPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
): number[][] {
  const offset = getOffset(selectedSquare);
  return [
    //up right
    ...move(selectedSquare.coordinates, offset, 7, "up-right", data),
    //up left
    ...move(selectedSquare.coordinates, offset, 7, "up-left", data),
    //down right diagonal
    ...move(selectedSquare.coordinates, offset, 7, "down-right", data),
    //down left diagonal
    ...move(selectedSquare.coordinates, offset, 7, "down-left", data),
  ];
}
export function getQueenPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
): number[][] {
  const offset = getOffset(selectedSquare);
  const newCoordinates = [
    //up right diagonal
    ...move(selectedSquare.coordinates, offset, 7, "up-right", data),

    //right
    ...move(selectedSquare.coordinates, offset, 7, "right", data),

    //up
    ...move(selectedSquare.coordinates, offset, 7, "up", data),

    //up left diagonal
    ...move(selectedSquare.coordinates, offset, 7, "up-left", data),

    //down right diagonal
    ...move(selectedSquare.coordinates, offset, 7, "down-right", data),
    //down left diagonal
    ...move(selectedSquare.coordinates, offset, 7, "down-left", data),

    //left
    ...move(selectedSquare.coordinates, offset, 7, "left", data),

    //down
    ...move(selectedSquare.coordinates, offset, 7, "down", data),
  ];
  return newCoordinates;
}

export function getRookPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[][]
): number[][] {
  const offset = getOffset(selectedSquare);
  const newCoordinates = [
    //right
    ...move(selectedSquare.coordinates, offset, 7, "right", data),
    //up
    ...move(selectedSquare.coordinates, offset, 7, "up", data),
    //left
    ...move(selectedSquare.coordinates, offset, 7, "left", data),
    //down
    ...move(selectedSquare.coordinates, offset, 7, "down", data),
  ];
  return newCoordinates;
}

export function resetPossibleMovementOrCapture(data: ChessSquare[][]) {
  let squares = [...data];

  data.forEach((d) => {
    d.forEach((f) => {
      if (f.canMoveInto && f.canMoveInto === true) {
        f.canMoveInto = false;
      }
      if (f.canCapture && f.canCapture === true) {
        f.canCapture = false;
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

function move(
  points: number[],
  offset: number,
  step: number,
  direction: Direction,
  data: ChessSquare[][]
): number[][] {
  const [row, column] = points;
  let newRow = row;
  let newCol = column;
  let coordinates: number[][] = [];
  for (let index = 1; index <= step; index++) {
    newRow = computeNewRow(row, offset, index, direction);
    newCol = computeNewColumn(column, offset, index, direction);
    const validBoundaries = findValidBoundaries([newRow, newCol]);
    if (validBoundaries.length) {
      coordinates.push(validBoundaries);
      if (data[validBoundaries[0]][validBoundaries[1]]?.chessPiece) {
        return coordinates;
      }
    }
  }
  return coordinates;
}

function computeNewRow(
  row: number,
  offset: number,
  index: number,
  direction: Direction
): number {
  if (direction === "up") {
    return row + offset * index;
  } else if (direction === "right") {
    return row;
  } else if (direction === "left") {
    return row;
  } else if (direction === "down") {
    return row + offset * -index;
  } else if (direction === "down-left") {
    return row + offset * -index;
  } else if (direction === "down-right") {
    return row + offset * -index;
  } else if (direction === "up-left") {
    return row + offset * index;
  } else if (direction === "up-right") {
    return row + offset * index;
  }

  return row;
}
function computeNewColumn(
  column: number,
  offset: number,
  index: number,
  direction: Direction
): number {
  if (direction === "up") {
    return column;
  } else if (direction === "right") {
    return column + offset * index;
  } else if (direction === "left") {
    return column + offset * -index;
  } else if (direction === "down") {
    return column;
  } else if (direction === "down-left") {
    return column + offset * -index;
  } else if (direction === "down-right") {
    return column + offset * index;
  } else if (direction === "up-left") {
    return column + offset * -index;
  } else if (direction === "up-right") {
    return column + offset * index;
  }
  return column;
}
function pawnTakesDiagonally(
  selectedSquare: ChessSquare,
  offset: number,
  maxMovement: number,
  direction: Direction,
  data: ChessSquare[][]
) {
  const [row, column] = selectedSquare.coordinates;
  let newRow = row;
  let newCol = column;
  let coordinates: number[][] = [];
  for (let index = 1; index <= maxMovement; index++) {
    newRow = computeNewRow(row, offset, index, direction);
    newCol = computeNewColumn(column, offset, index, direction);
    const validBoundaries = findValidBoundaries([newRow, newCol]);
    if (
      validBoundaries.length &&
      data[validBoundaries[0]][validBoundaries[1]]?.chessPiece
    ) {
      coordinates.push(validBoundaries);
    }
  }
  return coordinates;
}

function pawnCanAdvance(
  selectedSquare: ChessSquare,
  offset: number,
  maxMovement: number,
  direction: Direction,
  data: ChessSquare[][]
) {
  const [row, column] = selectedSquare.coordinates;
  let newRow = row;
  let newCol = column;
  let coordinates: number[][] = [];
  for (let index = 1; index <= maxMovement; index++) {
    newRow = computeNewRow(row, offset, index, direction);
    newCol = computeNewColumn(column, offset, index, direction);
    const validBoundaries = findValidBoundaries([newRow, newCol]);
    if (
      validBoundaries.length &&
      !data[validBoundaries[0]][validBoundaries[1]]?.chessPiece
    ) {
      coordinates.push(validBoundaries);
    }
  }
  return coordinates;
}

function threatToKing() {}
