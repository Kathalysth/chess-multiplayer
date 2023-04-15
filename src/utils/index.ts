import { ChessSquare, ChessPiece, Direction } from "../@types/chess";

function getOffset(direction: Direction | undefined): number {
  if (direction === undefined) {
    return 1;
  }
  return direction === "up" ? -1 : 1;
}

export function getPawnPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  let maxMovement = 1;
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    maxMovement = 2;
  }

  return [
    ...pawnCanAdvance(selectedSquare, offset, maxMovement, data),
    ...pawnTakesDiagonally(selectedSquare, offset, 1, "left", data),
    ...pawnTakesDiagonally(selectedSquare, offset, 1, "right", data),
  ];
}

export function getKnightPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  const squareids = [
    ...knightHops(selectedSquare, offset, 1, "down-left", data),
    ...knightHops(selectedSquare, offset, 1, "down-right", data),
    ...knightHops(selectedSquare, offset, 1, "up-left", data),
    ...knightHops(selectedSquare, offset, 1, "up-right", data),
    ...knightHops(selectedSquare, offset, 1, "left-down", data),
    ...knightHops(selectedSquare, offset, 1, "left-up", data),
    ...knightHops(selectedSquare, offset, 1, "right-up", data),
    ...knightHops(selectedSquare, offset, 1, "right-down", data),
  ];
  return squareids;
}

export function getKingPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  let coordinates: string[] = [];
  let safeCoordinates: string[] = [];
  if (!selectedSquare.chessPiece?.state.isInitialMove) {
    //can castle
    coordinates = [
      //up right diagonal
      ...move(selectedSquare, offset, 1, "up-right", data),

      //right
      ...move(selectedSquare, offset, 1, "right", data),

      //up
      ...move(selectedSquare, offset, 1, "up", data),

      //up left diagonal
      ...move(selectedSquare, offset, 1, "up-left", data),

      //down right diagonal
      ...move(selectedSquare, offset, 1, "down-right", data),
      //down left diagonal
      ...move(selectedSquare, offset, 1, "down-left", data),

      //left
      ...move(selectedSquare, offset, 1, "left", data),

      //down
      ...move(selectedSquare, offset, 1, "down", data),
    ];
    if (coordinates.length > 0) {
      safeCoordinates = moveKingSafely(coordinates, data, selectedSquare);
    }
  } else {
    coordinates = [
      //up right diagonal
      ...move(selectedSquare, offset, 1, "up-right", data),

      //right
      ...move(selectedSquare, offset, 1, "right", data),

      //up
      ...move(selectedSquare, offset, 1, "up", data),

      //up left diagonal
      ...move(selectedSquare, offset, 1, "up-left", data),

      //down right diagonal
      ...move(selectedSquare, offset, 1, "down-right", data),
      //down left diagonal
      ...move(selectedSquare, offset, 1, "down-left", data),

      //left
      ...move(selectedSquare, offset, 1, "left", data),

      //down
      ...move(selectedSquare, offset, 1, "down", data),
    ];

    if (coordinates.length > 0) {
      safeCoordinates = moveKingSafely(coordinates, data, selectedSquare);
    }
  }

  return safeCoordinates;
}

export function getBishopPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  const coordinates: string[] = [
    //up right
    ...move(selectedSquare, offset, 7, "up-right", data),
    //up left
    ...move(selectedSquare, offset, 7, "up-left", data),
    //down right diagonal
    ...move(selectedSquare, offset, 7, "down-right", data),
    //down left diagonal
    ...move(selectedSquare, offset, 7, "down-left", data),
  ];
  return coordinates;
}
export function getQueenPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  const newCoordinates = [
    //up right diagonal
    ...move(selectedSquare, offset, 7, "up-right", data),

    //right
    ...move(selectedSquare, offset, 7, "right", data),

    //up
    ...move(selectedSquare, offset, 7, "up", data),

    //up left diagonal
    ...move(selectedSquare, offset, 7, "up-left", data),

    //down right diagonal
    ...move(selectedSquare, offset, 7, "down-right", data),
    //down left diagonal
    ...move(selectedSquare, offset, 7, "down-left", data),

    //left
    ...move(selectedSquare, offset, 7, "left", data),

    //down
    ...move(selectedSquare, offset, 7, "down", data),
  ];
  return newCoordinates;
}

export function getRookPossibleMovement(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction);
  const newCoordinates = [
    //right
    ...move(selectedSquare, offset, 7, "right", data),
    //up
    ...move(selectedSquare, offset, 7, "up", data),
    //left
    ...move(selectedSquare, offset, 7, "left", data),
    //down
    ...move(selectedSquare, offset, 7, "down", data),
  ];
  return newCoordinates;
}

function move(
  selectedSquare: ChessSquare,
  offset: number,
  step: number,
  direction: Direction,
  data: ChessSquare[]
): string[] {
  let squares: string[] = [];
  if (selectedSquare.chessPiece) {
    const originSquare = data[selectedSquare.index];
    if (originSquare.chessPiece) {
      originSquare.chessPiece.moves = [];
      originSquare.chessPiece.state.canCapture = [];
      originSquare.chessPiece.state.threats = [];
    }
    for (let stepIndex = 1; stepIndex <= step; stepIndex++) {
      const squareBase =
        selectedSquare.index + getYCoefficient(direction, stepIndex) * offset;
      const squareIndex = squareBase + getXCoefficient(direction, stepIndex);

      if (
        squareIndex >= 0 &&
        squareIndex &&
        squareIndex < 64 &&
        squareBase >= 0 &&
        squareBase <= 64
      ) {
        const targetSquare = data[squareIndex];
        const baseSquareRow = data[squareBase];
        if (
          squareIndex >= baseSquareRow.boundary.left &&
          squareIndex <= baseSquareRow.boundary.right
        ) {
          if (!targetSquare?.chessPiece) {
            squares.push(targetSquare.id);
          } else {
            squares.push(targetSquare.id);
            data[selectedSquare.index].chessPiece?.state.canCapture.push(
              targetSquare.id
            );
            data[targetSquare.index].chessPiece?.state.threats.push(
              selectedSquare.id
            );
            selectedSquare.chessPiece?.state.canCapture.includes(
              targetSquare.id
            );
            return squares;
          }
        }
      }
    }
  }

  return squares;
}

function knightHops(
  selectedSquare: ChessSquare,
  offset: number,
  maxMovement: number,
  direction: Direction,
  data: ChessSquare[]
): string[] {
  let squares: string[] = [];
  for (let mvIndex = 1; mvIndex <= maxMovement; mvIndex++) {
    const squareBase =
      selectedSquare.index + getKnightYCoefficient(direction, mvIndex) * offset;
    const squareIndex = squareBase + getKnightXCoefficient(direction, mvIndex);

    if (
      squareIndex >= 0 &&
      squareIndex &&
      squareIndex < 64 &&
      squareBase >= 0 &&
      squareBase <= 64
    ) {
      const targetSquare = data[squareIndex];
      const baseSquareRow = data[squareBase];
      if (
        squareIndex >= baseSquareRow.boundary.left &&
        squareIndex <= baseSquareRow.boundary.right
      ) {
        squares.push(targetSquare.id);
      }
    }
  }
  return squares;
}

function pawnTakesDiagonally(
  selectedSquare: ChessSquare,
  offset: number,
  maxMovement: number,
  direction: Direction,
  data: ChessSquare[]
) {
  let squares: string[] = [];
  for (let mvIndex = 1; mvIndex <= maxMovement; mvIndex++) {
    const squareBase = selectedSquare.index + 8 * mvIndex * offset;
    const squareIndex = squareBase + getXCoefficient(direction, mvIndex);

    if (
      squareIndex >= 0 &&
      squareIndex &&
      squareIndex < 64 &&
      squareBase >= 0 &&
      squareBase <= 64
    ) {
      const targetSquare = data[squareIndex];
      const baseSquareRow = data[squareBase];
      if (
        squareIndex >= baseSquareRow.boundary.left &&
        squareIndex <= baseSquareRow.boundary.right
      ) {
        if (targetSquare?.chessPiece) {
          squares.push(targetSquare.id);
        } else {
          return squares;
        }
      }
    }
  }
  return squares;
}

function pawnCanAdvance(
  selectedSquare: ChessSquare,
  offset: number,
  maxMovement: number,
  data: ChessSquare[]
): string[] {
  let squares: string[] = [];
  for (let mvIndex = 1; mvIndex <= maxMovement; mvIndex++) {
    const squareIndex = selectedSquare.index + 8 * mvIndex * offset;

    if (squareIndex >= 0 && squareIndex && squareIndex < 64) {
      const targetSquare = data[squareIndex];
      if (
        squareIndex >= targetSquare.boundary.left &&
        squareIndex <= targetSquare.boundary.right
      ) {
        if (!targetSquare?.chessPiece) {
          squares.push(targetSquare.id);
        } else {
          return squares;
        }
      }
    }
  }
  return squares;
}

function moveKingSafely(
  legalMoves: string[],
  data: ChessSquare[],
  kingSquare: ChessSquare
): string[] {
  let opponentPlayerLegalMoves = getAllLegalMoves(
    data,
    kingSquare.chessPiece?.piece.color ?? undefined
  );

  let newCoordinates: string[] = legalMoves;
  // for (let sm = 0; sm < allSquaresWithPieceMoves.length; sm++) {
  //   for (let km = 0; km < coordinates.length; km++) {
  //     if (
  //       allSquaresWithPieceMoves[sm][0] === coordinates[km][0] &&
  //       allSquaresWithPieceMoves[sm][1] === coordinates[km][1]
  //     ) {
  //       newCoordinates = coordinates.filter(
  //         (c: number[]) =>
  //           c[0] !== coordinates[km][0] && c[1] !== coordinates[km][1]
  //       );
  //     }
  //   }
  // }
  return newCoordinates;
}

function getAllLegalMoves(
  data: ChessSquare[],
  color: "white" | "black" | undefined
): string[] {
  let squares: string[] = [];

  data.forEach((square) => {
    if (
      square.chessPiece &&
      color !== undefined &&
      square.chessPiece.piece.color !== color
    ) {
      squares = [...squares, ...square.chessPiece.moves];
    }
  });

  return squares;
}

export function getLegalMoves(
  selectedSquare: ChessSquare,
  data: ChessSquare[]
): string[] {
  let squares: string[] = [];
  if (selectedSquare.chessPiece?.piece.name === "pawn") {
    squares = getPawnPossibleMovement(selectedSquare, data);
  }
  if (selectedSquare.chessPiece?.piece.name === "knight") {
    squares = getKnightPossibleMovement(selectedSquare, data);
  }
  if (selectedSquare.chessPiece?.piece.name === "bishop") {
    squares = getBishopPossibleMovement(selectedSquare, data);
  }
  if (selectedSquare.chessPiece?.piece.name === "king") {
    squares = getKingPossibleMovement(selectedSquare, data);
  }
  if (selectedSquare.chessPiece?.piece.name === "queen") {
    squares = getQueenPossibleMovement(selectedSquare, data);
  }
  if (selectedSquare.chessPiece?.piece.name === "rook") {
    squares = getRookPossibleMovement(selectedSquare, data);
  }
  return squares;
}

function getXCoefficient(direction: Direction, step: number): number {
  if (direction === "left") return -1 * step;
  if (direction === "right") return 1 * step;
  if (direction === "up-left") return -1 * step;
  if (direction === "up-right") return 1 * step;
  if (direction === "down-left") return -1 * step;
  if (direction === "down-right") return 1 * step;
  return 0;
}
function getYCoefficient(direction: Direction, step: number): number {
  if (direction === "up") return 8 * step;
  if (direction === "down") return -8 * step;
  if (direction === "up-left") return 8 * step;
  if (direction === "down-left") return -8 * step;
  if (direction === "up-right") return 8 * step;
  if (direction === "down-right") return -8 * step;
  return 0;
}

function getKnightYCoefficient(direction: Direction, step: number): number {
  if (direction === "up-left") return 16 * step;
  if (direction === "down-left") return -16 * step;
  if (direction === "up-right") return 16 * step;
  if (direction === "down-right") return -16 * step;
  if (direction === "left-up") return -8 * step;
  if (direction === "left-down") return -8 * step;
  if (direction === "right-up") return 8 * step;
  if (direction === "right-down") return 8 * step;
  return 0;
}

function getKnightXCoefficient(direction: Direction, step: number): number {
  if (direction === "up-left") return -1 * step;
  if (direction === "up-right") return 1 * step;
  if (direction === "down-left") return -1 * step;
  if (direction === "down-right") return 1 * step;
  if (direction === "left-up") return -2 * step;
  if (direction === "left-down") return -2 * step;
  if (direction === "right-up") return 2 * step;
  if (direction === "right-down") return 2 * step;
  return 0;
}

export function calculateOpponentsLegalMoves(
  opponentSquares: ChessSquare[],
  data: ChessSquare[]
) {
  opponentSquares.forEach((square) => {
    if (square.chessPiece) {
      const targetSquare = data[square.index];
      if (targetSquare && targetSquare.chessPiece) {
        targetSquare.chessPiece.moves = getLegalMoves(square, data);
      }
    }
  });
}
