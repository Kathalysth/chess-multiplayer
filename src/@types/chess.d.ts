// @types.chess.ts
export type ChessPiece = {
  piece: { name: string; color: string; direction: string };
  moves: number[][];
  exceptions?: string;
};

export type PlayerMode = "white" | "black" | "default";

export type ChessSquare = {
  coordinates: Array<number>;
  chessPiece?: ChessPiece;
  canCapture?: boolean;
  canMoveInto?: boolean;
};

export type ChessContextType = {
  data: ChessSquare[][];
  playerMode: PlayerMode;
  selectedSquare?: ChessSquare | null;
  togglePlayerMode: (value: string) => void;
  selectSquare: (square: ChessSquare) => void;
  saveTodo?: (todo: ITodo) => void;
  updateTodo?: (id: number) => void;
};
