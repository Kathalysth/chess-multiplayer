// @types.chess.ts
export type ChessPiece = {
  piece: {
    name: "pawn" | "king" | "queen" | "rook" | "bishop" | "knight";
    color: string;
    direction: string;
  };
  moves: number[][];
  state: PieceState;
  exceptions?: string;
};

export type PieceState = {
  isInitialMove: boolean;
  isUnderThreat: boolean;
};

export type Direction =
  | "up"
  | "down"
  | "right"
  | "left"
  | "up-left"
  | "up-right"
  | "down-left"
  | "down-right";

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
  turn: PlayerMode;
  selectedSquare?: ChessSquare | null;
  openMoves: number[][];
  resetGame: () => void;
  togglePlayerMode: (value: string) => void;
  toggleTurn: () => void;
  selectSquare: (square: ChessSquare | null) => void;
  findPossiblePieceMove: (selectedSquare: ChessSquare) => void;
  initiateMoveInto: (selectedSquare: ChessSquare) => void;
};
