// @types.chess.ts
export type Piece = 'pawn' | 'king' | 'queen' | 'rook' | 'bishop' | 'knight'

export type ChessPiece = {
  piece: {
    name: Piece
    color: 'white' | 'black'
    direction: 'up' | 'down'
  }
  moves: string[]
  state: PieceState
}

export type PieceState = {
  isInitialMove: boolean
  canCapture: string[]
  threats: string[]
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
  handleSelected: (selectedSquare: ChessSquare) => void
}
