import type { ChessSquare, ChessPiece, Direction, Piece } from '../@types/chess'
import { getArrayFromInteger } from './arrayUtils'

type MoveOptions = {
  offset: number
  max: number
  direction: Direction
  IsKnight?: boolean
}

function getOffset(direction: Direction | undefined): number {
  if (direction === undefined) {
    return -1
  }
  return direction === 'up' ? 1 : -1
}

export function getPawnPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)
  const max: number = 1
  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max: direction === 'up' ? 2 : max, direction })
    })
    .flat()

  return newIndexes
}

export function getKnightPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  const max: number = 1
  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max, direction, IsKnight: true })
    })
    .flat()

  return newIndexes
}

export function getKingPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 1
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max, direction })
    })
    .flat()

  return newIndexes
}

export function getBishopPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max, direction })
    })
    .flat()

  return newIndexes
}
export function getQueenPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max, direction })
    })
    .flat()

  return newIndexes
}

export function getRookPossibleMovement(selectedSquare: ChessSquare): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  const newIndexes = directions
    .map((direction: Direction): number[] => {
      return move(selectedSquare.index, { offset, max, direction })
    })
    .flat()

  return newIndexes
}

function move(selectedSquareIndex: number, options: MoveOptions): number[] {
  return calculateNewIndexes(
    selectedSquareIndex,
    options.offset,
    options.direction,
    options.max,
    options.IsKnight,
  )
}

function moveKingSafely(
  legalMoves: string[],
  data: ChessSquare[],
  kingSquare: ChessSquare,
): string[] {
  let opponentPlayerLegalMoves = getAllLegalMoves(
    data,
    kingSquare.chessPiece?.piece.color ?? undefined,
  )

  let newCoordinates: string[] = legalMoves
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
  return newCoordinates
}

function getAllLegalMoves(data: ChessSquare[], color: 'white' | 'black' | undefined): string[] {
  let squares: string[] = []

  data.forEach((square) => {
    if (square.chessPiece && color !== undefined && square.chessPiece.piece.color !== color) {
      squares = [...squares, ...square.chessPiece.moves]
    }
  })

  return squares
}

function getHorizontalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'left') return -1 * step * offset
  if (direction === 'right') return 1 * step * offset
  if (direction === 'up-left') return -1 * step * offset
  if (direction === 'up-right') return 1 * step * offset
  if (direction === 'down-left') return -1 * step * offset
  if (direction === 'down-right') return 1 * step * offset
  return 0
}
function getVerticalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'up') return -8 * step * offset
  if (direction === 'down') return 8 * step * offset
  if (direction === 'up-left') return -8 * step * offset
  if (direction === 'up-right') return -8 * step * offset
  if (direction === 'down-left') return 8 * step * offset
  if (direction === 'down-right') return 8 * step * offset
  return 0
}

function getKnightVerticalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'up-left') return -16 * step * offset
  if (direction === 'down-left') return 16 * step * offset
  if (direction === 'up-right') return -16 * step * offset
  if (direction === 'down-right') return 16 * step * offset
  if (direction === 'left-up') return -8 * step * offset
  if (direction === 'left-down') return 8 * step * offset
  if (direction === 'right-up') return -8 * step * offset
  if (direction === 'right-down') return 8 * step * offset
  return 0
}

function getKnightHorizontalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'up-left') return -1 * step * offset
  if (direction === 'up-right') return 1 * step * offset
  if (direction === 'down-left') return -1 * step * offset
  if (direction === 'down-right') return 1 * step * offset
  if (direction === 'left-up') return -2 * step * offset
  if (direction === 'left-down') return -2 * step * offset
  if (direction === 'right-up') return 2 * step * offset
  if (direction === 'right-down') return 2 * step * offset
  return 0
}

function getValidIndex(verticalOffset: number, horizontalOffset: number): number[] {
  const number: number = verticalOffset + horizontalOffset
  const [start, end] = getBoundaries(verticalOffset)
  if (number >= start && number <= end && number > -1) {
    return [number]
  }
  return []
}

function calculateNewIndex(
  index: number,
  step: number,
  offset: number,
  direction: Direction,
  IsKnight?: boolean,
): number[] {
  if (IsKnight !== undefined && IsKnight !== false) {
    const verticalOffset = index + getKnightVerticalOffset(direction, step, offset)
    const horizontalOffset = getKnightHorizontalOffset(direction, step, offset)
    return getValidIndex(verticalOffset, horizontalOffset)
  }
  const verticalOffset = index + getVerticalOffset(direction, step, offset)
  const horizontalOffset = getHorizontalOffset(direction, step, offset)

  return getValidIndex(verticalOffset, horizontalOffset)
}

function calculateNewIndexes(
  index: number,
  offset: number,
  direction: Direction,
  max: number,
  IsKnight?: boolean,
): number[] {
  const maxDisplacements = getArrayFromInteger(max).map((step: number) => {
    return calculateNewIndex(index, step + 1, offset, direction, IsKnight)
  })

  return [...maxDisplacements.flat()]
}

export function getPieceMoves(selectedSquare: ChessSquare): number[] {
  let newIndexes: number[] = []
  if (selectedSquare.chessPiece?.piece.name === 'pawn') {
    newIndexes = getPawnPossibleMovement(selectedSquare)
  }
  if (selectedSquare.chessPiece?.piece.name === 'knight') {
    newIndexes = getKnightPossibleMovement(selectedSquare)
  }
  if (selectedSquare.chessPiece?.piece.name === 'bishop') {
    newIndexes = getBishopPossibleMovement(selectedSquare)
  }
  if (selectedSquare.chessPiece?.piece.name === 'king') {
    newIndexes = getKingPossibleMovement(selectedSquare)
  }
  if (selectedSquare.chessPiece?.piece.name === 'queen') {
    newIndexes = getQueenPossibleMovement(selectedSquare)
  }
  if (selectedSquare.chessPiece?.piece.name === 'rook') {
    newIndexes = getRookPossibleMovement(selectedSquare)
  }
  return newIndexes
}
function getBoundaries(number: number): number[] {
  if (number >= 0 && number <= 7) {
    return [0, 7]
  }
  if (number >= 8 && number <= 15) {
    return [8, 15]
  }
  if (number >= 16 && number <= 23) {
    return [16, 23]
  }
  if (number >= 24 && number <= 31) {
    return [24, 31]
  }
  if (number >= 32 && number <= 39) {
    return [32, 39]
  }
  if (number >= 40 && number <= 47) {
    return [40, 47]
  }
  if (number >= 48 && number <= 55) {
    return [48, 55]
  }
  if (number >= 56 && number <= 63) {
    return [56, 63]
  }
  return [-1, -1]
}

export function getLegalMoves(
  selectedSquare: ChessSquare,
  moves: number[],
  data: ChessSquare[],
): number[] {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions = getDirections(selectedSquare?.chessPiece?.piece.name ?? null)
  let legalMoves: number[] = []
  if (selectedSquare?.chessPiece?.piece.name === 'knight') {
    legalMoves = moves
  } else {
    legalMoves = directions
      .map((direction: Direction) => {
        const step = getStep(
          direction,
          selectedSquare.chessPiece?.piece?.name ?? null,
          selectedSquare.chessPiece?.state.isInitialMove ?? true,
        )
        const currentStep = 1
        return findNextSquareIndex(selectedSquare.index, data, {
          direction,
          offset,
          step,
          currentStep,
          ...(selectedSquare?.chessPiece?.piece.name === 'pawn' ? { piece: 'pawn' } : {}),
        })
      })
      .flat()
  }

  return data
    .filter(
      (square: ChessSquare) =>
        legalMoves.includes(square.index) &&
        selectedSquare?.chessPiece?.piece.color !== square?.chessPiece?.piece.color,
    )
    .map((square: ChessSquare) => square.index)
}

function findNextSquareIndex(
  previousIndex: number,
  data: ChessSquare[],
  options: {
    direction: Direction
    offset: number
    step: number
    currentStep: number
    piece?: Piece
  },
): number[] {
  const step: number = 1
  const verticalOffset = previousIndex + getVerticalOffset(options.direction, step, options.offset)
  const horizontalOffset = getHorizontalOffset(options.direction, step, options.offset)
  const [nextIndex] = getValidIndex(verticalOffset, horizontalOffset)

  if (
    !nextIndex ||
    (nextIndex && data[nextIndex].chessPiece) ||
    options.currentStep >= options.step
  ) {
    if (
      options.piece === 'pawn' &&
      ((nextIndex &&
        !data[nextIndex].chessPiece &&
        (options.direction === 'up-left' || options.direction === 'up-right')) ||
        (options.direction === 'up' && data[nextIndex].chessPiece))
    ) {
      return []
    }

    return nextIndex !== undefined ? [nextIndex] : []
  } else {
    return [
      nextIndex,
      ...findNextSquareIndex(nextIndex, data, { ...options, currentStep: options.currentStep + 1 }),
    ]
  }
}

function getDirections(piece: Piece | null): Direction[] {
  if (piece === 'king' || piece === 'queen') {
    return ['up-right', 'up-left', 'down-left', 'down-right', 'right', 'left', 'up', 'down']
  }
  if (piece === 'rook') {
    return ['right', 'left', 'up', 'down']
  }
  if (piece === 'pawn') {
    return ['up-left', 'up-right', 'up']
  }
  if (piece === 'bishop') {
    return ['up-right', 'up-left', 'down-left', 'down-right']
  }
  if (piece === 'knight') {
    return [
      'down-left',
      'down-right',
      'up-left',
      'up-right',
      'left-down',
      'left-up',
      'right-up',
      'right-down',
    ]
  }
  return []
}

function getStep(direction: Direction, piece: Piece | null, isInitialMove: boolean): number {
  if (direction === 'up' && piece === 'pawn' && isInitialMove) return 2
  if ((direction !== 'up' || !isInitialMove) && piece === 'pawn') return 1
  if (piece === 'queen') return 7
  if (piece === 'king' && direction !== 'left' && direction !== 'right') return 1
  if (piece === 'king' && (direction === 'left' || direction === 'right') && isInitialMove) return 2
  if (piece === 'bishop') return 7
  if (piece === 'rook') return 7
  return 1
}

export function getCastlingEdge(number: number): number {
  if (number === 62) return 63
  if (number === 58) return 56
  if (number === 2) return 0
  if (number === 6) return 7
  return -1
}
export function getCastlingRookIndex(number: number): number {
  if (number === 62) return 61
  if (number === 58) return 59
  if (number === 2) return 3
  if (number === 6) return 5
  return -1
}
