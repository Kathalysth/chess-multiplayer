import * as React from 'react'
import useSound from 'use-sound'
import { ChessContextType, ChessSquare, Piece, Player, PlayerMode } from '../@types/chess'
import { squareInitialData } from '../data'
import { getCastlingEdge, getCastlingRookIndex, getLegalMoves } from '../utils'
import { CASTLING_SQUARE_INDEXES } from '../utils/constants'

export const ChessContext = React.createContext<ChessContextType | null>(null)

interface Props {
  children: React.ReactNode
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  // const [startSound] = useSound(startSoundFx, { volume: 0.75 });
  // const [moveSound] = useSound(pieceMoveFx, { volume: 0.75 })
  const [movesHint, setMovesHint] = React.useState<number[]>([])
  const [turn, setTurn] = React.useState<PlayerMode>('white')
  const [selectedSquareMoves, setSelectedSquareMoves] = React.useState<string[]>([])
  const [data, setData] = React.useState<ChessSquare[]>(
    JSON.parse(JSON.stringify(squareInitialData)),
  )
  const [player, setPlayer] = React.useState<Player>({ serial: 1, color: 'white' })
  const [playerMode, setPlayerMode] = React.useState<PlayerMode>('default')
  const [selectedSquare, setSelectedSquare] = React.useState<ChessSquare | null>(null)

  const togglePlayerMode = (value: string) => {
    if (playerMode === 'black') {
      setPlayerMode('white')
      return
    }
    setPlayerMode('black')
  }

  function changePlayer() {
    if (player.serial === 1) {
      setPlayer({ serial: 2, color: 'black' })
    } else {
      setPlayer({ serial: 1, color: 'white' })
    }
  }
  const toggleTurn = () => {
    if (turn === 'white' || turn === 'default') {
      setTurn('black')
      return
    }
    setTurn('white')
  }

  function transformMoves(square: ChessSquare): number[] {
    if (square && square.chessPiece) {
      return [
        ...Object.entries(square.chessPiece.move)
          .map((d) => d[1])
          .flat(),
      ]
    }
    return []
  }

  function isInitialMove(square: ChessSquare): boolean {
    if (square.chessPiece?.state.isInitialMove) return true
    return false
  }

  function isPiece(square: ChessSquare, name: Piece) {
    if (square.chessPiece && square.chessPiece.piece.name === name) {
      return true
    }
    return false
  }

  function isValidChessIndex(index: number): boolean {
    if (index > -1 && index < 64) return true
    return false
  }

  function canCastle(
    chessBoard: ChessSquare[],
    targetSquare: ChessSquare,
  ): { value: boolean; number: number } {
    if (selectedSquare !== null) {
      if (isPiece(selectedSquare, 'king') && isInitialMove(selectedSquare))
        if (CASTLING_SQUARE_INDEXES.includes(targetSquare.index)) {
          let rookIndex = getCastlingEdge(targetSquare.index)

          // queen side castles make sure knight position is vacant
          if ((rookIndex === 0 || rookIndex === 56) && chessBoard[rookIndex + 1].chessPiece) {
            rookIndex = -1
          }
          if (isValidChessIndex(rookIndex) && isPiece(chessBoard[rookIndex], 'rook')) {
            return { value: true, number: rookIndex }
          }
        }
    }

    return { value: false, number: -1 }
  }

  function performMove(
    chessBoard: ChessSquare[],
    origin: ChessSquare,
    designation: ChessSquare,
  ): ChessSquare[] {
    if (origin.chessPiece) {
      chessBoard[designation.index].chessPiece = {
        ...origin.chessPiece,
        state: {
          ...origin.chessPiece.state,
          isInitialMove: false,
        },
        move: {},
      }
      chessBoard[origin.index].chessPiece = null
    }
    const newSquare = chessBoard[designation.index]
    if (newSquare.chessPiece) {
      newSquare.chessPiece.moves = getLegalMoves(newSquare, chessBoard, player)
    }

    return chessBoard
  }

  const handleMovePiece = (targetSquare: ChessSquare) => {
    if (selectedSquare) {
      let newData = performMove([...data], selectedSquare, targetSquare)

      const canCastleRook = canCastle(newData, targetSquare)
      if (canCastleRook.value) {
        // update rook moves
        const newRookIndex = getCastlingRookIndex(targetSquare.index)
        const newRookSquare = newData[newRookIndex]
        newData = performMove(newData, newData[canCastleRook.number], newRookSquare)
      }

      toggleTurn()
      changePlayer()
      setData(newData)
      deselect()
    }
  }

  function deselect(): void {
    setSelectedSquare(null)
    hideHints()
  }

  function select(clickedSquare: ChessSquare) {
    setSelectedSquare(clickedSquare)
    showHints(clickedSquare)
  }
  function handleSelect(clickedSquare: ChessSquare) {
    if (isSamePiece(clickedSquare)) {
      deselect()
    } else {
      select(clickedSquare)
    }
  }

  function showHints(clickedSquare: ChessSquare) {
    if (clickedSquare && clickedSquare.chessPiece) {
      setMovesHint(transformMoves(clickedSquare))
    }
  }

  function hideHints() {
    setMovesHint([])
  }

  function canMoveTo(clickedSquare: ChessSquare): boolean {
    if (selectedSquare && selectedSquare.chessPiece && clickedSquare) {
      if (transformMoves(selectedSquare).includes(clickedSquare.index)) return true
    }

    return false
  }

  function handleMove(clickedSquare: ChessSquare): void {
    if (isThereSelection() && canMoveTo(clickedSquare)) {
      handleMovePiece(clickedSquare)
    }
  }

  const resetGame = () => {
    setData(JSON.parse(JSON.stringify(squareInitialData)))
    setSelectedSquareMoves([])
    setSelectedSquare(null)
    setMovesHint([])
    setTurn('white')
    // startSound();
  }

  function isThereSelection() {
    if (selectedSquare !== null) true
    return false
  }
  function isSamePiece(yourSquare: ChessSquare): boolean {
    if (selectedSquare && yourSquare.chessPiece?.id === selectedSquare?.chessPiece?.id) {
      return true
    }
    return false
  }
  function isYourPiece(square: ChessSquare, player: Player): boolean {
    if (square?.chessPiece && square.chessPiece.piece.color === player.color) {
      return true
    }
    return false
  }

  function isYourTurn(player: Player, turn: PlayerMode): boolean {
    if (player.color === turn) return true
    return false
  }

  function handleClick(clickedSquare: ChessSquare): void {
    if (isYourTurn(player, turn)) {
      if (isYourPiece(clickedSquare, player)) {
        handleSelect(clickedSquare)
      } else {
        handleMove(clickedSquare)
      }
    }
  }

  return (
    <ChessContext.Provider
      value={{
        selectedSquareMoves,
        movesHint,
        data,
        selectedSquare,
        playerMode,
        resetGame,
        toggleTurn,
        togglePlayerMode,
        handleClick,
      }}
    >
      {children}
    </ChessContext.Provider>
  )
}
export default ChessProvider
