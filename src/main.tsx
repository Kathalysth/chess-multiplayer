import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChessProvider from "./context/chessContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChessProvider>
      <App />
    </ChessProvider>
  </React.StrictMode>
);
