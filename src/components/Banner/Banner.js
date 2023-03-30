import React from "react";

function Banner({ state, numOfGuesses, answer }) {
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
    </div>
  );
}

export default Banner;
