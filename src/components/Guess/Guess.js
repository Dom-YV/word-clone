import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => (
        <span key={i} className="cell">
          {word && word[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
