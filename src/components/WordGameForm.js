import React, {useState} from "react";
import Game from "./Game";

function WordGameForm({ addGuess, disabled}) {
    const [guess, setGuess] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setGuess(value.toUpperCase());
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (guess.length === 5) {
            addGuess(guess);
            setGuess("");
        } else {
            alert("Guess must have 5 characters only.");
        }
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input"
                   type="text"
                   value={guess}
                   onChange={handleChange}
                   maxLength={5}
                   required
                   disabled={disabled}/>
        </form>
    );
}

export default WordGameForm;