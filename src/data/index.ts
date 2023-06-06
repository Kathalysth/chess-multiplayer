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
      id: 'br0',
      piece: {
        name: 'rook',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [],
        down: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bn0',
      piece: {
        name: 'knight',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [16],
        'up-left': [18],
        'down-left': [],
        'down-right': [],
        'left-up': [],
        'left-down': [],
        'right-up': [],
        'right-down': [],
      },
      moves: [16, 18],
      state: {
        isInitialMove: true,
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
      id: 'bb0',
      piece: {
        name: 'bishop',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bq0',
      piece: {
        name: 'queen',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
        up: [],
        down: [],
        left: [],
        right: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bk0',
      piece: {
        name: 'king',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
        up: [],
        down: [],
        left: [],
        right: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bb1',
      piece: {
        name: 'bishop',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bn1',
      piece: {
        name: 'knight',
        color: 'black',
        direction: 'down',
      },
      move: {
        'up-right': [21],
        'up-left': [23],
        'down-left': [],
        'down-right': [],
        'left-up': [],
        'left-down': [],
        'right-up': [],
        'right-down': [],
      },
      moves: [21, 23],
      state: {
        isInitialMove: true,
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
      id: 'br1',
      piece: {
        name: 'rook',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [],
        down: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'bp0',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [16, 24],
      },
      moves: [16, 24],
      state: {
        isInitialMove: true,
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
      id: 'bp1',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [17, 25],
      },
      moves: [17, 25],
      state: {
        isInitialMove: true,
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
      id: 'bp2',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [18, 26],
      },
      moves: [18, 26],
      state: {
        isInitialMove: true,
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
      id: 'bp3',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [19, 27],
      },
      moves: [19, 27],
      state: {
        isInitialMove: true,
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
      id: 'bp4',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [20, 28],
      },
      moves: [20, 28],
      state: {
        isInitialMove: true,
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
      id: 'bp5',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [21, 29],
      },
      moves: [21, 29],
      state: {
        isInitialMove: true,
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
      id: 'bp6',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [22, 30],
      },
      moves: [22, 30],
      state: {
        isInitialMove: true,
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
      id: 'bp7',
      piece: {
        name: 'pawn',
        color: 'black',
        direction: 'down',
      },
      move: {
        up: [23, 31],
      },
      moves: [23, 31],
      state: {
        isInitialMove: true,
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
      id: 'wp0',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [32, 40],
      },
      moves: [32, 40],
      state: {
        isInitialMove: true,
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
      id: 'wp1',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [33, 41],
      },
      moves: [33, 41],
      state: {
        isInitialMove: true,
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
      id: 'wp2',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [34, 42],
      },
      moves: [34, 42],
      state: {
        isInitialMove: true,
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
      id: 'wp3',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [35, 43],
      },
      moves: [35, 43],
      state: {
        isInitialMove: true,
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
      id: 'wp4',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [36, 44],
      },
      moves: [36, 44],
      state: {
        isInitialMove: true,
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
      id: 'wp5',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [37, 45],
      },
      moves: [37, 45],
      state: {
        isInitialMove: true,
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
      id: 'wp6',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [38, 46],
      },
      moves: [38, 46],
      state: {
        isInitialMove: true,
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
      id: 'wp7',
      piece: {
        name: 'pawn',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [47, 39],
      },
      moves: [47, 39],
      state: {
        isInitialMove: true,
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
      id: 'wr0',
      piece: {
        name: 'rook',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [],
        down: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'wn0',
      piece: {
        name: 'knight',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [42],
        'up-left': [40],
        'down-left': [],
        'down-right': [],
        'left-up': [],
        'left-down': [],
        'right-up': [],
        'right-down': [],
      },
      moves: [40, 42],
      state: {
        isInitialMove: true,
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
      id: 'wb0',
      piece: {
        name: 'bishop',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'wq0',
      piece: {
        name: 'queen',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
        up: [],
        down: [],
        left: [],
        right: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'wk0',
      piece: {
        name: 'king',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
        up: [],
        down: [],
        left: [],
        right: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'wb1',
      piece: {
        name: 'bishop',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [],
        'up-left': [],
        'down-left': [],
        'down-right': [],
      },
      moves: [],
      state: {
        isInitialMove: true,
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
      id: 'wn1',
      piece: {
        name: 'knight',
        color: 'white',
        direction: 'up',
      },
      move: {
        'up-right': [47],
        'up-left': [45],
        'down-left': [],
        'down-right': [],
        'left-up': [],
        'left-down': [],
        'right-up': [],
        'right-down': [],
      },
      moves: [45, 47],
      state: {
        isInitialMove: true,
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
      id: 'wr1',
      piece: {
        name: 'rook',
        color: 'white',
        direction: 'up',
      },
      move: {
        up: [],
        down: [],
      },
      moves: [],
      state: {
        isInitialMove: true,
      },
    },
  },
]
