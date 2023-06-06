import type {
  ChessSquare,
  ChessPiece,
  Direction,
  Piece,
  ThreatDirection,
  Move,
  MoveOptions,
  DirectionConfig,
  Player,
} from '../@types/chess'
import { directionIndexes } from './constants'
import {
  getStep,
  getOffset,
  getHorizontalOffset,
  getVerticalOffset,
  getValidIndex,
  calculateNewIndexes,
  getDirections,
  calculateNextMoves,
} from './calculations.utils'
import { canCapture, isPiece, isThreat, isYourPiece } from './checks.utils'

function getDirectionConfig(selectedSquare: ChessSquare, max: number): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)
  return { offset, max, directions }
}
function getPawnDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)
  const max: number = 1
  return { offset, max, directions }
}

function getKnightDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)
  const max: number = 1
  return { offset, max, directions }
}

function getKingDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 1
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  return { offset, max, directions }
}

function getBishopDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  return { offset, max, directions }
}
function getQueenDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)

  return { offset, max, directions }
}

function getRookDirectionConfig(selectedSquare: ChessSquare): DirectionConfig {
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const max: number = 7
  const directions: Direction[] = getDirections(selectedSquare.chessPiece?.piece.name ?? null)
  return { offset, max, directions }
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

export function getPieceMoves(selectedSquare: ChessSquare): Move {
  let config: DirectionConfig = {
    offset: 1,
    directions: [],
    max: 1,
  }
  if (selectedSquare.chessPiece) {
    if (isPiece(selectedSquare, 'pawn')) {
      config = getDirectionConfig(selectedSquare, 1)
    }
    if (isPiece(selectedSquare, 'knight')) {
      config = getDirectionConfig(selectedSquare, 1)
    }
    if (isPiece(selectedSquare, 'bishop')) {
      config = getDirectionConfig(selectedSquare, 7)
    }
    if (isPiece(selectedSquare, 'king')) {
      config = getKingDirectionConfig(selectedSquare)
    }
    if (isPiece(selectedSquare, 'queen')) {
      config = getQueenDirectionConfig(selectedSquare)
    }
    if (isPiece(selectedSquare, 'rook')) {
      config = getRookDirectionConfig(selectedSquare)
    }
    return calculateNextMoves(config.directions, selectedSquare, move, config.offset, config.max)
  }

  return {}
}

export function getLegalMoves(
  selectedSquare: ChessSquare,
  data: ChessSquare[],
  player: Player,
): number[] {
  const threats = findThreats(data, selectedSquare, player)
  if (threats.length > 0) {
    let direction: ThreatDirection | null = null
    const pieceKing = data.find(
      (square: ChessSquare) =>
        square.chessPiece &&
        square.chessPiece.piece.name === 'king' &&
        square.chessPiece.piece.color === selectedSquare.chessPiece?.piece.color,
    )
    if (pieceKing) {
      console.log('checking for conflict')
      threats.forEach((threat) => {
        const dir: ThreatDirection | undefined = getDirectionArray([
          pieceKing.index,
          threat,
          selectedSquare.index,
        ])
        if (dir !== undefined) {
          direction = dir
        }
      })
      if (direction !== null) {
        const selectedSquareIndex: number = direction.indexes.indexOf(selectedSquare.index)
      }
    }

    console.log(direction)
  }
  const offset = getOffset(selectedSquare.chessPiece?.piece.direction)
  const directions = getDirections(selectedSquare?.chessPiece?.piece.name ?? null)
  let legalMoves: number[] = []
  if (selectedSquare?.chessPiece?.piece.name === 'knight') {
    legalMoves = getPieceMoves(selectedSquare)
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

export function putPieceInSquare(
  target: ChessSquare,
  origin: ChessSquare | null,
  chessBoard: ChessSquare[],
): ChessSquare[] {
  const newData = [...chessBoard]
  if (origin && origin.chessPiece) {
    newData[target.index].chessPiece = {
      ...origin.chessPiece,
      state: {
        ...origin.chessPiece.state,
        isInitialMove: false,
      },
    }
    newData[origin.index].chessPiece = null
    const newSquare = newData[target.index]
    if (newSquare.chessPiece) {
      newSquare.chessPiece.moves = getLegalMoves(newSquare, newData)
    }
  }
  return newData
}

function isYourKingDangerByMove(
  chessBoard: ChessSquare[],
  threats: ChessSquare[],
  selectedSquare: ChessSquare,
  player: Player,
): boolean {
  // loop over threats
  return false
}

export function getPermittedDirections(
  chessBoard: ChessSquare[],
  selectedSquare: ChessSquare,
  player: Player,
) {
  const threats: ChessSquare[] = findThreats(chessBoard, selectedSquare, player)
  if (!isPiece(selectedSquare, 'king')) {
    if (isThreat(threats) && isYourKingDangerByMove(chessBoard, threats, selectedSquare, player)) {
      //move with directions from check
    } else {
      // move freely
    }
  } else {
    if (isThreat(threats)) {
    }
  }
}

function findThreats(
  chessBoard: ChessSquare[],
  selectedSquare: ChessSquare | null,
  player: Player,
): ChessSquare[] {
  let opponentSquares: ChessSquare[] = []
  if (selectedSquare) {
    if (isPiece(selectedSquare, 'king')) {
      opponentSquares = chessBoard.filter(
        (square: ChessSquare) => !isYourPiece(square, player) && canCapture(selectedSquare, square),
      )
    } else {
      // for other piece we are just interested if the queen or rook or bishop is the threat.
      opponentSquares = chessBoard.filter(
        (square: ChessSquare) =>
          !isYourPiece(square, player) &&
          (isPiece(square, 'queen') || isPiece(square, 'rook') || isPiece(square, 'bishop')) &&
          canCapture(selectedSquare, square),
      )
    }
  }
  return opponentSquares
}

function getDirectionArray(array: number[]): ThreatDirection | undefined {
  return directionIndexes.find((dir) => array.every((index) => dir.indexes.includes(index)))
}

function getDirection(direction: string): string {
  if (direction.includes('diagonal')) {
    return 'diagonal'
  }
  if (direction.includes('col')) {
    return 'vertical'
  }
  if (direction.includes('row')) {
    return 'horizontal'
  }
  return ''
}
