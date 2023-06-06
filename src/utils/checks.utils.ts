import type { ChessSquare, Piece, Player } from '../@types/chess'
import { transformMoves } from './calculations.utils'
export function isPiece(square: ChessSquare, name: Piece) {
  if (square.chessPiece && square.chessPiece.piece.name === name) {
    return true
  }
  return false
}

export function isYourPiece(square: ChessSquare, player: Player): boolean {
  if (square?.chessPiece && square.chessPiece.piece.color === player.color) {
    return true
  }
  return false
}

export function canCapture(originSquare: ChessSquare, targetSquare: ChessSquare): boolean {
  if (originSquare.chessPiece && transformMoves(originSquare).includes(targetSquare.index)) {
    return true
  }
  return false
}

export function isThreat(threats: ChessSquare[]): boolean {
  if (threats.length) return true
  return false
}
