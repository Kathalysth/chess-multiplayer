// @types.chess.ts
export type ChessPiece = {
  piece: {
    name: "pawn" | "king" | "queen" | "rook" | "bishop" | "knight";
    color: "white" | "black";
    direction: "up" | "down";
  };
  moves: string[];
  state: PieceState;
};

export type PieceState = {
  isInitialMove: boolean;
  canCapture: string[];
  threats: string[];
  isProtectingKing?: boolean;
  isKingUnderThreat?: boolean;
};

export type Direction =
  | "up"
  | "down"
  | "right"
  | "left"
  | "up-left"
  | "up-right"
  | "down-left"
  | "down-right"
  | "left-up"
  | "left-down"
  | "right-up"
  | "right-down";

export type PlayerMode = "white" | "black" | "default";

export type ChessSquare = {
  bg: "black" | "white";
  id: string;
  index: number;
  boundary: {
    left: number;
    right: number;
  };
  chessPiece: ChessPiece | null;
};

export type ChessContextType = {
  data: ChessSquare[];
  playerMode: PlayerMode;
  turn: PlayerMode;
  selectedSquare?: ChessSquare | null;
  movables: string[];
  captures: string[];
  selectedSquareMoves: string[];
  resetGame: () => void;
  togglePlayerMode: (value: string) => void;
  toggleTurn: () => void;
  selectSquare: (square: ChessSquare | null) => void;
  findLegalMoves: (
    selectedSquare: ChessSquare,
    data: ChessSquare[]
  ) => string[];
  initiateMoveInto: (selectedSquare: ChessSquare) => void;
};
