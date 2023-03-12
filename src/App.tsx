import ChessBoard from "./components/chessboard";
import ChessMenu from "./components/menu";

function App() {
  return (
    <div className="max-w-7xl h-screen mx-auto px-8 py-2 overflow-hidden flex flex-wrap justify-center items-center">
      <ChessBoard />
      <ChessMenu />
    </div>
  );
}

export default App;
