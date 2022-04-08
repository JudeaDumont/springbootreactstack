import React from "react";

export default function MemeGenerator() {
    return (
        <main>
            <form className={"form"}>
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
                    className={"form--button"}
                >
                    New Meme Image
                </button>
            </form>
        </main>

    )

}