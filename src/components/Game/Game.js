import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const gameEnded =
    guesses.includes(answer) || guesses.length === NUM_OF_GUESSES_ALLOWED;
  const bannerState = guesses.includes(answer) ? "happy" : "sad";

  function addGuess(guess) {
    console.log({ guess });
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameEnded} />
      {gameEnded && (
        <Banner
          state={bannerState}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
