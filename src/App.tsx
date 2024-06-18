import { useState } from "react";
import Header from "./components/Header";
import SizeOfChess from "./components/SizeOfChess";
import ChessBoard from "./components/ChessBoard";
import NoChessBoard from "./components/NoChessBoard";
import "./App.css";

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
