// context/todoContext.tsx
import * as React from "react";
import { ChessContextType, ChessSquare } from "../@types/chess";
import { squareInitialData } from "../data";

export const ChessContext = React.createContext<ChessContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ChessProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState<ChessSquare[][]>(squareInitialData);
  return (
    <ChessContext.Provider value={{ data }}>{children}</ChessContext.Provider>
  );
};
export default ChessProvider;
