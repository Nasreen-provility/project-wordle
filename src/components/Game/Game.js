import React, {useState} from 'react';

import { sample} from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import BannerComponent from "../BannerComponent";
import WordGameForm from "../WordGameForm";
import GuessResultComponent from "../GuessResultComponent";

// Pick a random word on every pageload.
const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("isPlaying");


  function addGuess(newGuess) {
    const setNextGuesses = [...guesses, newGuess];

    setGuesses(setNextGuesses);
    if (newGuess === answer) {
      setGameStatus("win");
    } else if (setNextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
      <>
        {/*<h1>Word Guess Game</h1>*/}
        {gameStatus !== "isPlaying" && (
            <BannerComponent
                status={gameStatus}
                numOfGuesses={guesses.length}
                answer={answer}
            />
        )}
        <GuessResultComponent guesses={guesses} answer={answer}/>
        <WordGameForm addGuess={addGuess} disabled={gameStatus !== "isPlaying"} />
      </>
  );
}

export default Game;
