import { useContext } from 'react'
import { ChessSquare, ChessContextType } from '../@types/chess'
import RenderPiece from './RenderPiece'
import { ChessContext } from '../context/chessContext'

function Square({ square }: { square: ChessSquare }) {
  const { selectedSquare, movesHint, handleSelected } = useContext(ChessContext) as ChessContextType

  function handleClick() {
    handleSelected(square)
  }

  return (
    <button
      onClick={handleClick}
      role='button'
      aria-label={`square-${square.id}`}
      className={`aspect-square ${
        square.bg === 'white' ? 'bg-slate-300/[0.8]' : 'bg-stone-600/[0.8]'
      } flex justify-center items-center relative ${
        square.chessPiece?.piece?.direction === 'down' ? 'rotate-180' : ''
      } ${square.chessPiece ? 'cursor-pointer' : ''}`}
    >
      {square.chessPiece !== undefined && square.chessPiece !== null ? (
        <RenderPiece piece={square.chessPiece.piece} />
      ) : null}

      {movesHint.includes(square.index) ? (
        <div
          id='moveHintOverlay'
          className={`absolute top-0 left-0 right-0 bottom-0 ${
            square.chessPiece ? 'bg-red-500/[0.4]' : 'bg-teal-500/[0.4]'
          }`}
        />
      ) : null}
      {selectedSquare ? (
        <div
          id='selectedOverlay'
          className={`absolute top-0 left-0 right-0 bottom-0 ${
            selectedSquare && selectedSquare.id == square.id ? 'bg-blue-400/[0.4]' : ''
          }`}
        />
      ) : null}
    </button>
  )
}

export default Square
