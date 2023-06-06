// @types.chess.ts
export type Piece = 'pawn' | 'king' | 'queen' | 'rook' | 'bishop' | 'knight'

type Move = {
  up?: number[]
  down?: number[]
  left?: number[]
  right?: number[]
  'up-left'?: number[]
  'up-right'?: number[]
  'down-left'?: number[]
  'down-right'?: number[]
  'left-up'?: number[]
  'left-down'?: number[]
  'right-up'?: number[]
  'right-down'?: number[]
}

export type MoveOptions = {
  offset: number
  max: number
  direction: Direction
  IsKnight?: boolean
}

export type DirectionConfig = {
  offset: number
  max: number
  directions: Direction[]
}

export type ChessPiece = {
  id: string
  piece: {
    name: Piece
    color: 'white' | 'black'
    direction: 'up' | 'down'
  }
  move: Move
  moves: number[]
  state: PieceState
}

export type PieceState = {
  isInitialMove: boolean
  isProtectingKing?: boolean
  isKingUnderThreat?: boolean
}

export type Direction =
  | 'up'
  | 'down'
  | 'right'
  | 'left'
  | 'up-left'
  | 'up-right'
  | 'down-left'
  | 'down-right'
  | 'left-up'
  | 'left-down'
  | 'right-up'
  | 'right-down'

export type PlayerMode = 'white' | 'black' | 'default'

export type ChessSquare = {
  bg: 'black' | 'white'
  id: string
  index: number
  boundary: {
    left: number
    right: number
  }
  chessPiece: ChessPiece | null
}

export type ChessContextType = {
  data: ChessSquare[]
  playerMode: PlayerMode
  selectedSquare?: ChessSquare | null
  movesHint: number[]
  selectedSquareMoves: string[]
  resetGame: () => void
  togglePlayerMode: (value: string) => void
  toggleTurn: () => void
  handleClick: (selectedSquare: ChessSquare) => void
}

export type ThreatDirection = {
  name: string
  indexes: number[]
}

export type Player = {
  serial: 1 | 2
  color: PlayerMode
}
