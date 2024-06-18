import { useState } from "react";
import ChessBoard from "./components/ChessBoard";
import "./App.css";
import SizeOfChess from "./components/SizeOfChess";
import NoChessBoard from "./components/NoChessBoard";

function App() {
  const [sizeOfChess, setSizeOfChess] = useState<number>(5);

  return (
    <div className="app">
      <SizeOfChess sizeOfChess={sizeOfChess} setSizeOfChess={setSizeOfChess} />
      <ChessBoard sizeOfChess={sizeOfChess} />

      {sizeOfChess == 0 && <NoChessBoard />}
    </div>
  );
}

export default App;
