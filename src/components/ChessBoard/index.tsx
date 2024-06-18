function ChessBoard({ sizeOfChess }: { sizeOfChess: number }) {
  return (
    <>
      <div className="chess-box-container">
        {
          // Array(sizeOfChess)
          //   .fill(1)

          Array.from({ length: sizeOfChess }, (_, i) => i).map(
            (_, outerIndex) => (
              <div key={outerIndex} className="flex justify-content-center">
                {
                  // Array(sizeOfChess)
                  //   .fill(1)

                  Array.from({ length: sizeOfChess }, (_, i) => i).map(
                    (_, innerIndex) => {
                      return (
                        <div
                          key={`${outerIndex * sizeOfChess + innerIndex}`}
                          className={`chess-box ${
                            outerIndex * sizeOfChess + innerIndex + 1
                          } ${
                            outerIndex % 2 == 0
                              ? innerIndex % 2 == 0
                                ? "bg-black"
                                : "bg-white"
                              : innerIndex % 2 == 0
                              ? "bg-white"
                              : "bg-black"
                          }`}
                        ></div>
                      );
                    }
                  )
                }
              </div>
            )
          )
        }
      </div>
    </>
  );
}

export default ChessBoard;
