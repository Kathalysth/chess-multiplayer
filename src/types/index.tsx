export type ChessPiece = {
    piece: string,
    moves: Array<Move>
    exceptions:string
}

export type Move = Array<number>

export type ChessSquare = {
    coordinates: Array<number>,
    chessPiece?:ChessPiece
    
}