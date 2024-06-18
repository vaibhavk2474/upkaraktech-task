import { useState } from "react";
import ChessBoard from "./components/ChessBoard";
import "./App.css";
import SizeOfChess from "./components/SizeOfChess";
import NoChessBoard from "./components/NoChessBoard";
import Header from "./components/Header";

function App() {
  const [sizeOfChess, setSizeOfChess] = useState<number>(5);

  return (
    <div className="app">
      <Header />

      <div className="main-container">
        <SizeOfChess
          sizeOfChess={sizeOfChess}
          setSizeOfChess={setSizeOfChess}
        />
        <ChessBoard sizeOfChess={sizeOfChess} />

        {sizeOfChess == 0 && <NoChessBoard />}
      </div>
    </div>
  );
}

export default App;
