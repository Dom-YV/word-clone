import React from "react";

function Keyboard({ letterStates }) {
  const letters = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <div className="keyboard">
      {letters.map((row, index) => {
        return (
          <div key={index} className="keyboard-row">
            {row.map((letter) => {
              const stateList = letterStates
                .filter((letterState) => letterState.letter === letter)
                .map(({ status }) => status);
              let state = "unused";
              if (stateList.includes("correct")) {
                state = "correct";
              } else if (stateList.includes("misplaced")) {
                state = "misplaced";
              } else if (stateList.includes("incorrect")) {
                state = "incorrect";
              }
              return <Tile key={letter} letter={letter} state={state} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

function Tile({ letter, state }) {
  return <span className={`keyboard-tile ${state}`}>{letter}</span>;
}

export default Keyboard;
