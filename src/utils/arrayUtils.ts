export function getArrayFromInteger(number: number): number[] {
  return [...Array(number)].map((y, i) => i)
}
export const arrayEdges: number[] = [31, 63]
