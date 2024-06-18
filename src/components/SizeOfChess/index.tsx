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

          // check user typed value is Not-a-Number or not,only takes numbers
          if (!isNaN(Number(typedValue))) {
            setValue(typedValue);
          }
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setSizeOfChess(Number(value));
          }

          // check given or entered key is backspace or a number between to 0 and 9
          // if it is then continue other than prevent this

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
