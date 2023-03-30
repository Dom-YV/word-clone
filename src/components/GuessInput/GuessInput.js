import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        disabled={disabled}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
