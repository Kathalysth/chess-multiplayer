import { ThreatDirection } from '../@types/chess'

export const CASTLING_SQUARE_INDEXES: number[] = [62, 58, 2, 6]

export const directionIndexes: ThreatDirection[] = [
  // columns
  { name: 'first_col', indexes: [0, 8, 16, 24, 32, 40, 48, 56] },
  { name: 'second_col', indexes: [1, 9, 17, 25, 33, 41, 49, 57] },
  { name: 'third_col', indexes: [2, 10, 18, 26, 34, 42, 50, 58] },
  { name: 'fourth_col', indexes: [3, 11, 19, 27, 35, 43, 51, 59] },
  { name: 'fifth_col', indexes: [4, 12, 20, 28, 36, 44, 52, 60] },
  { name: 'sixth_col', indexes: [5, 13, 21, 29, 37, 45, 53, 61] },
  { name: 'seventh_col', indexes: [6, 14, 22, 30, 38, 46, 54, 62] },
  { name: 'eighth_col', indexes: [7, 15, 23, 31, 39, 47, 55, 63] },
  // rows
  { name: 'first_row', indexes: [0, 1, 2, 3, 4, 5, 6, 7] },
  { name: 'second_row', indexes: [8, 9, 10, 11, 12, 13, 14, 15] },
  { name: 'third_row', indexes: [16, 17, 18, 19, 20, 21, 22, 23] },
  { name: 'fourth_row', indexes: [24, 25, 26, 27, 28, 29, 30, 31] },
  { name: 'fifth_row', indexes: [32, 33, 34, 35, 36, 37, 38, 39] },
  { name: 'sixth_row', indexes: [40, 41, 42, 43, 44, 45, 46, 47] },
  { name: 'seventh_row', indexes: [48, 49, 50, 51, 51, 59, 54, 55] },
  { name: 'eighth_row', indexes: [56, 57, 58, 59, 60, 61, 62, 63] },
  //left diagonals
  { name: 'first_left_diagonal', indexes: [40, 49, 58] },
  { name: 'second_left_diagonal', indexes: [32, 41, 50, 59] },
  { name: 'third_left_diagonal', indexes: [24, 33, 42, 51, 60] },
  { name: 'fourth_left_diagonal', indexes: [16, 25, 34, 43, 52, 61] },
  { name: 'fifth_left_diagonal', indexes: [8, 17, 26, 35, 44, 53, 62] },
  { name: 'sixth_left_diagonal', indexes: [0, 9, 18, 27, 36, 45, 54, 63] },
  { name: 'seventh_left_diagonal', indexes: [1, 10, 19, 28, 37, 46, 55] },
  { name: 'eighth_left_diagonal', indexes: [2, 11, 20, 29, 38, 47] },
  { name: 'ninth_left_diagonal', indexes: [3, 12, 21, 30, 39] },
  { name: 'tenth_left_diagonal', indexes: [4, 13, 22, 31] },
  { name: 'eleventh_left_diagonal', indexes: [5, 14, 23] },
  //right diagonals
  { name: 'first_right_diagonal', indexes: [61, 54, 47] },
  { name: 'second_right_diagonal', indexes: [60, 53, 46, 39] },
  { name: 'third_right_diagonal', indexes: [59, 52, 45, 38, 31] },
  { name: 'fourth_right_diagonal', indexes: [58, 51, 44, 37, 30, 23] },
  { name: 'fifth_right_diagonal', indexes: [57, 50, 43, 36, 29, 22, 15] },
  { name: 'sixth_right_diagonal', indexes: [56, 49, 42, 35, 28, 21, 14, 7] },
  { name: 'seventh_right_diagonal', indexes: [48, 41, 34, 27, 20, 13, 6] },
  { name: 'eighth_right_diagonal', indexes: [40, 33, 26, 19, 12, 5] },
  { name: 'ninth_right_diagonal', indexes: [32, 25, 18, 11, 4] },
  { name: 'tenth_right_diagonal', indexes: [24, 17, 10, 3] },
  { name: 'eleventh_right_diagonal', indexes: [16, 9, 2] },
]
