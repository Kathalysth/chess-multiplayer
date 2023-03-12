// @types.chess.ts
export type ChessPiece = {
  piece: { name: string; color: string; direction: string };
  moves: number[][];
  exceptions?: string;
};

export type ChessSquare = {
  coordinates: Array<number>;
  chessPiece?: ChessPiece;
  canCapture?: boolean;
  canMoveInto?: boolean;
};

export type ChessContextType = {
  data: ChessSquare[][];
  selectedSquare?: ChessSquare | null;
  selectSquare: (square: ChessSquare) => void;
  saveTodo?: (todo: ITodo) => void;
  updateTodo?: (id: number) => void;
};
