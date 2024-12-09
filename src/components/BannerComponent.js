import React from "react";

function BannerComponent({ status, numOfGuesses, answer }) {
    return (
        <div className={`${status} banner`}>
            {status === "win" ? (
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong> {numOfGuesses} guesses</strong>.
                </p>
            ) : (
                <p>
                    Sorry, the correct answer is <strong>{answer}</strong>.
                </p>
            )}
        </div>
    );}

export default BannerComponent;
