import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const guessStatuses = checkGuess(word, answer);
  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        const status = word ? guessStatuses[i].status : "";
        return (
          <span key={i} className={`cell ${status}`.trim()}>
            {word && word[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
