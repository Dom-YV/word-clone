import React from "react";

function Banner({ state, numOfGuesses, answer, onRestart }) {
  return (
    <div className={`${state} banner`}>
      {state === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={onRestart}>🔄</button>
    </div>
  );
}

export default Banner;
