import {range} from "../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../constants";
import GuessContainerComponent from "./GuessContainerComponent";
import React from "react";

function GuessResultComponent({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
                <GuessContainerComponent key={index} guess={guesses[index]} answer={answer} />
            ))}
        </div>
    );
}

export default GuessResultComponent;