import type { ChessSquare, Direction, MoveOptions, Piece, Move } from '../@types/chess'
import { getArrayFromInteger } from './array.utils'

export function getHorizontalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'left') return -1 * step * offset
  if (direction === 'right') return 1 * step * offset
  if (direction === 'up-left') return -1 * step * offset
  if (direction === 'up-right') return 1 * step * offset
  if (direction === 'down-left') return -1 * step * offset
  if (direction === 'down-right') return 1 * step * offset
  return 0
}
export function getVerticalOffset(direction: Direction, step: number, offset: number): number {
  if (direction === 'up') return -8 * step * offset
  if (direction === 'down') return 8 * step * offset
  if (direction === 'up-left') return -8 * step * offset
  if (direction === 'up-right') return -8 * step * offset
  if (direction === 'down-left') return 8 * step * offset
  if (direction === 'down-right') return 8 * step * offset
  return 0
}

export function getKnightVerticalOffset(
  direction: Direction,
  step: number,
  offset: number,
): number {
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

export function getKnightHorizontalOffset(
  direction: Direction,
  step: number,
  offset: number,
): number {
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

export function getValidIndex(verticalOffset: number, horizontalOffset: number): number[] {
  const number: number = verticalOffset + horizontalOffset
  const [start, end] = getBoundaries(verticalOffset)
  if (number >= start && number <= end && number > -1) {
    return [number]
  }
  return []
}

export function calculateNewIndex(
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

export function calculateNewIndexes(
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

export function getBoundaries(number: number): number[] {
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

export function getOffset(direction: Direction | undefined): number {
  if (direction === undefined) {
    return -1
  }
  return direction === 'up' ? 1 : -1
}

export function getStep(direction: Direction, piece: Piece | null, isInitialMove: boolean): number {
  if (direction === 'up' && piece === 'pawn' && isInitialMove) return 2
  if ((direction !== 'up' || !isInitialMove) && piece === 'pawn') return 1
  if (piece === 'queen') return 7
  if (piece === 'king' && direction !== 'left' && direction !== 'right') return 1
  if (piece === 'king' && (direction === 'left' || direction === 'right') && isInitialMove) return 2
  if (piece === 'bishop') return 7
  if (piece === 'rook') return 7
  return 1
}

export function getDirections(piece: Piece | null): Direction[] {
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

export function calculateNextMoves(
  directions: Direction[],
  selectedSquare: ChessSquare,
  move: (selectedSquareIndex: number, Options: MoveOptions) => number[],
  offset: number,
  max: number,
): Move {
  const newIndexes: [string, number[]][] = directions.map(
    (direction: Direction): [string, number[]] => {
      return [`${direction}`, [...move(selectedSquare.index, { offset, max, direction })]]
    },
  )

  return Object.fromEntries(newIndexes)
}

export function transformMoves(square: ChessSquare): number[] {
  if (square && square.chessPiece) {
    return [
      ...Object.entries(square.chessPiece.move)
        .map((d) => d[1])
        .flat(),
    ]
  }
  return []
}
