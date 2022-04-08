import React from "react";
import memesData from "./memesData";

export default function MemeGenerator() {
    function handleButtonClick(){
        console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url);
    }
    function handleSubmit(){
        console.log("SUBMOOT");
    }
    return (
        <main>
            <div className={"form"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Top Text"}
                    className={"form--input"}
                />
                <input
                    type={"text"}
                    placeholder={"Bottom Text"}
                    className={"form--input"}
                />
                <button
                    onClick={handleButtonClick}
                    className={"form--button"}
                >
                    New Meme Image
                </button>
            </div>
        </main>

    )

}