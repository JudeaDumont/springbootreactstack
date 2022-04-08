import React from "react";
import memesData from "./memesData";

export default function MemeGenerator() {
    const [memeURL, setMemeURL] = React.useState(getMemeURLUrl());

    function getMemeURLUrl() {
        return memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url;
    }

    function handleButtonClick(){
        setMemeURL(getMemeURLUrl());
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
                <img src={memeURL.toString()} alt={"boner forest"}  width={"800px"} height={"400px"}/>
            </div>
        </main>

    )

}