import { ChessSquare } from '../@types/chess'

export const squareInitialData: ChessSquare[] = [
  {
    id: 'a8',
    index: 0,
    bg: 'white',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'rook',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'b8',
    index: 1,
    bg: 'black',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'knight',
        color: 'black',
        direction: 'down',
      },
      moves: ['a6', 'c6'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'c8',
    index: 2,
    bg: 'white',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'bishop',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'd8',
    index: 3,
    bg: 'black',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'queen',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'e8',
    index: 4,
    bg: 'white',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'king',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'f8',
    index: 5,
    bg: 'black',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'bishop',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'g8',
    index: 6,
    bg: 'white',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'knight',
        color: 'black',
        direction: 'down',
      },
      moves: ['h6', 'f6'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'h8',
    index: 7,
    bg: 'black',
    boundary: {
      left: 0,
      right: 7,
    },
    chessPiece: {
      piece: {
        name: 'rook',
        color: 'black',
        direction: 'down',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'a7',
    index: 8,
    bg: 'black',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['a6', 'a5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'b7',
    index: 9,
    bg: 'white',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['b6', 'b5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'c7',
    index: 10,
    bg: 'black',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['c6', 'c5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'd7',
    index: 11,
    bg: 'white',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['d6', 'd5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'e7',
    index: 12,
    bg: 'black',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['e6', 'e5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'f7',
    index: 13,
    bg: 'white',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['f6', 'f5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'g7',
    index: 14,
    bg: 'black',
    boundary: {
      left: 8,
      right: 15,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['g6', 'g5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'h7',
    index: 15,
    boundary: {
      left: 8,
      right: 15,
    },
    bg: 'white',
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      moves: ['h6', 'h5'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },

  {
    id: 'a6',
    index: 16,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'b6',
    index: 17,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'c6',
    index: 18,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'd6',
    index: 19,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'e6',
    index: 20,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'f6',
    index: 21,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'g6',
    index: 22,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },
  {
    id: 'h6',
    index: 23,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 16,
      right: 23,
    },
  },

  {
    id: 'a5',
    index: 24,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'b5',
    index: 25,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'c5',
    index: 26,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'd5',
    index: 27,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'e5',
    index: 28,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'f5',
    index: 29,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'g5',
    index: 30,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },
  {
    id: 'h5',
    index: 31,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 24,
      right: 31,
    },
  },

  {
    id: 'a4',
    index: 32,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'b4',
    index: 33,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'c4',
    index: 34,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'd4',
    index: 35,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'e4',
    index: 36,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'f4',
    index: 37,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'g4',
    index: 38,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },
  {
    id: 'h4',
    index: 39,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 32,
      right: 39,
    },
  },

  {
    id: 'a3',
    index: 40,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'b3',
    index: 41,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'c3',
    index: 42,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'd3',
    index: 43,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'e3',
    index: 44,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'f3',
    index: 45,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'g3',
    index: 46,
    bg: 'black',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },
  {
    id: 'h3',
    index: 47,
    bg: 'white',
    chessPiece: null,
    boundary: {
      left: 40,
      right: 47,
    },
  },

  {
    id: 'a2',
    index: 48,
    bg: 'white',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['a3', 'a4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'b2',
    index: 49,
    bg: 'black',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['b3', 'b4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'c2',
    index: 50,
    bg: 'white',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['c3', 'c4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'd2',
    index: 51,
    bg: 'black',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['d3', 'd4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'e2',
    index: 52,
    bg: 'white',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['e3', 'e4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'f2',
    index: 53,
    bg: 'black',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['f3', 'f4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'g2',
    index: 54,
    bg: 'white',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['g3', 'g4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'h2',
    index: 55,
    bg: 'black',
    boundary: {
      left: 48,
      right: 55,
    },
    chessPiece: {
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      moves: ['h3', 'h4'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },

  {
    id: 'a1',
    index: 56,
    bg: 'black',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'rook',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'b1',
    index: 57,
    bg: 'white',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'knight',
        color: 'white',
        direction: 'up',
      },
      moves: ['a3', 'c3'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'c1',
    index: 58,
    bg: 'black',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'bishop',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'd1',
    index: 59,
    bg: 'white',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'queen',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'e1',
    index: 60,
    bg: 'black',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'king',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'f1',
    index: 61,
    bg: 'white',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'bishop',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'g1',
    index: 62,
    bg: 'black',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'knight',
        color: 'white',
        direction: 'up',
      },
      moves: ['h3', 'f3'],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
  {
    id: 'h1',
    index: 63,
    bg: 'white',
    boundary: {
      left: 56,
      right: 63,
    },
    chessPiece: {
      piece: {
        name: 'rook',
        color: 'white',
        direction: 'up',
      },
      moves: [],
      state: {
        isInitialMove: true,
        threats: [],
        canCapture: [],
      },
    },
  },
]
