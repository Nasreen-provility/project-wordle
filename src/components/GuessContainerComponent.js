import {checkGuess} from "../game-helpers";
import {range} from "../utils";
import React from "react";

function GuessContainerComponent({ guess, answer }) {
    const result = guess ? checkGuess(guess, answer) : [];
    const guessGrid = range(5).map((index) => {
        const letterInfo = result[index] || {};
        return (
            <span key={index}
                  className={`cell ${letterInfo.status || ""}`}
            >{letterInfo.letter || ""}</span>
        );
    });
    return <p className="guess">{guessGrid}</p>;
}

export default GuessContainerComponent;