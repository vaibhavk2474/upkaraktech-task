import React, { useState } from "react";

const SizeOfChess: React.FC<{
  sizeOfChess: number;
  setSizeOfChess: React.Dispatch<React.SetStateAction<number>>;
}> = ({ sizeOfChess, setSizeOfChess }) => {
  const [value, setValue] = useState<string | number>(sizeOfChess);

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => {
          const typedValue = e.target.value;
          if (!isNaN(Number(typedValue))) {
            setValue(typedValue);
          }
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setSizeOfChess(Number(value));
          }
          // if (e.key == "Backspace") {
          //   // "continue;"
          // } else if (!(Number(e.key) >= 0 && Number(e.key) <= 9)) {
          //   e.preventDefault();
          // }
        }}
        placeholder="Enter A Number"
      />
      <button className="btn" onClick={() => setSizeOfChess(Number(value))}>
        Enter
      </button>
    </div>
  );
};

export default SizeOfChess;
