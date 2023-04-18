// context/todoContext.tsx
import * as React from 'react'
import useSound from 'use-sound'
import { ChessContextType, ChessSquare, PlayerMode } from '../@types/chess'
import { squareInitialData } from '../data'
import { getCastlingEdge, getCastlingRookIndex, getLegalMoves, getPieceMoves } from '../utils'
import { CASTLING_SQUARE_INDEXES } from '../utils/constans'

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
  const [playerMode, setPlayerMode] = React.useState<PlayerMode>('default')
  const [selectedSquare, setSelectedSquare] = React.useState<ChessSquare | null>(null)

  const togglePlayerMode = (value: string) => {
    if (playerMode === 'black') {
      setPlayerMode('white')
      return
    }
    setPlayerMode('black')
  }

  const toggleTurn = () => {
    if (turn === 'white' || turn === 'default') {
      setTurn('black')
      return
    }
    setTurn('white')
  }

  const handleMovePiece = (targetSquare: ChessSquare) => {
    const newData = [...data]
    if (selectedSquare?.chessPiece) {
      newData[targetSquare.index].chessPiece = {
        ...selectedSquare.chessPiece,
        state: {
          ...selectedSquare.chessPiece.state,
          isInitialMove: false,
        },
      }
      newData[selectedSquare.index].chessPiece = null
      if (CASTLING_SQUARE_INDEXES.includes(targetSquare.index)) {
        let rookIndex = getCastlingEdge(targetSquare.index)
        if ((rookIndex === 0 || rookIndex === 56) && newData[rookIndex + 1].chessPiece) {
          rookIndex = -1
        }
        if (
          rookIndex > -1 &&
          newData[rookIndex].chessPiece &&
          newData[rookIndex].chessPiece?.piece.name === 'rook'
        ) {
          const newRookIndex = getCastlingRookIndex(targetSquare.index)
          newData[newRookIndex].chessPiece = newData[rookIndex].chessPiece
          newData[rookIndex].chessPiece = null
        }
      }
    }
    setSelectedSquare(null)
    toggleTurn()
    setData(newData)
    setMovesHint([])
    // if (selectedSquare && selectedSquare.chessPiece) {
    //   const targetSquareID: string | undefined = selectedSquareMoves.find(
    //     (move) => move === targetSquare.id,
    //   )
    //   if (targetSquareID) {
    //     if (
    //       (targetSquare.chessPiece &&
    //         selectedSquare.chessPiece.state.canCapture.includes(targetSquareID)) ||
    //       !targetSquare.chessPiece
    //     ) {
    //       data[targetSquare.index].chessPiece = {
    //         ...selectedSquare.chessPiece,
    //         state: { ...selectedSquare.chessPiece.state, isInitialMove: true },
    //       }
    //       data[selectedSquare.index].chessPiece = null

    //       // // update the piece moves
    //       // data[targetSquare.index].chessPiece?.moves ===
    //       //   findLegalMoves(data[targetSquare.index], data)

    //       setSelectedSquare(null)
    //       toggleTurn()
    //       setData(data)
    //     }
    //   }
    // }
  }

  const resetGame = () => {
    setData(JSON.parse(JSON.stringify(squareInitialData)))
    setSelectedSquareMoves([])
    setSelectedSquare(null)
    setMovesHint([])
    setTurn('white')
    // startSound();
  }

  function handleSelected(clickedSquare: ChessSquare): void {
    if (
      selectedSquare &&
      !clickedSquare.chessPiece &&
      selectedSquare.chessPiece?.piece.color === turn
    ) {
      if (movesHint.includes(clickedSquare.index)) {
        console.log('empty')
        handleMovePiece(clickedSquare)
        // initiate move into empty clicked Square
      }
    } else if (
      clickedSquare.chessPiece &&
      (!selectedSquare ||
        (selectedSquare.chessPiece?.piece.color === clickedSquare.chessPiece.piece.color &&
          selectedSquare.id !== clickedSquare.id)) &&
      turn === clickedSquare.chessPiece.piece.color
    ) {
      // select square with piece
      console.log('selected')
      setSelectedSquare(clickedSquare)
      const moves = findMoves(clickedSquare)
      setMovesHint([...getLegalMoves(clickedSquare, moves, data)])
    } else if (
      selectedSquare &&
      selectedSquare.chessPiece &&
      selectedSquare.id === clickedSquare.id
    ) {
      setSelectedSquare(null)
      setMovesHint([])
    } else if (
      selectedSquare &&
      selectedSquare.chessPiece &&
      clickedSquare &&
      clickedSquare.chessPiece &&
      turn === selectedSquare.chessPiece.piece.color &&
      selectedSquare.chessPiece.piece.color !== clickedSquare.chessPiece.piece.color
    ) {
      if (movesHint.includes(clickedSquare.index)) {
        handleMovePiece(clickedSquare)
        console.log('capture')
        // capture clicked square
      }
    }
  }

  const findMoves = (selectedSquare: ChessSquare): number[] => {
    let squareIndexes: number[] = []
    if (selectedSquare !== null) {
      squareIndexes = getPieceMoves(selectedSquare)
    }
    return squareIndexes
  }

  function updateSquaresWithCoordinates(squareids: string[], square: ChessSquare) {
    let newMovables: string[] = []
    let newCaptures: string[] = []
    squareids.forEach((squareid: string) => {
      const targetSquare = data.find((squ) => squ.id === squareid)
      const originSquare = data.find((squ) => squ.id === square.id)
      if (targetSquare && originSquare) {
        if (
          !targetSquare.chessPiece ||
          (targetSquare.chessPiece &&
            targetSquare.chessPiece.piece.color !== originSquare.chessPiece?.piece.color)
        ) {
          newMovables.push(squareid)
        } else {
          newCaptures.push(squareid)
        }
      }
    })
    setData(data)
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
        handleSelected,
      }}
    >
      {children}
    </ChessContext.Provider>
  )
}
export default ChessProvider
