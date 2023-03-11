export type ChessPiece = {
  piece: { name: string; color: string; direction: string };
  moves: number[][];
  exceptions?: string;
};

export type ChessSquare = {
  coordinates: Array<number>;
  chessPiece?: ChessPiece;
};
