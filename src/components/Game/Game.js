import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  function generateAnswer() {
    return sample(WORDS);
  }
  const [answer, setAnswer] = React.useState(generateAnswer);
  console.info({ answer });

  const [guesses, setGuesses] = React.useState([]);
  const [letterStates, setLetterStates] = React.useState([]);

  const gameEnded =
    guesses.includes(answer) || guesses.length === NUM_OF_GUESSES_ALLOWED;
  const bannerState = guesses.includes(answer) ? "happy" : "sad";

  function addGuess(guess) {
    console.log({ guess });
    setGuesses([...guesses, guess]);
    const guessResult = checkGuess(guess, answer);
    if (guessResult) {
      setLetterStates([...letterStates, ...guessResult]);
    }
  }

  function restart() {
    setAnswer(generateAnswer);
    setGuesses([]);
    setLetterStates([]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameEnded} />
      <Keyboard letterStates={letterStates} />
      {gameEnded && (
        <Banner
          state={bannerState}
          numOfGuesses={guesses.length}
          answer={answer}
          onRestart={restart}
        />
      )}
    </>
  );
}

export default Game;
