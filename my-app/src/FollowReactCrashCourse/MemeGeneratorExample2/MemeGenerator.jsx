import React from "react";
import MemeImage from "./MemeImage";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASYNC VERSION
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function MemeGenerator() {
    const [data, setData] = React.useState({
        memeData: {},
        url: "",
        toptxt: "",
        btmtxt: "",
    })
    React.useEffect(() => {
            async function getMemes() {
                const res = await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json()

                // noinspection JSCheckFunctionSignatures
                setData(prevData => {
                    return {
                        ...prevData,
                        memeData: data,
                        url: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url
                    }
                })
            }
            getMemes().then(()=>{console.log("SUCCESS")})
        }
        , []
    )

    function getMemeURL() {
        return data.memeData.data.memes[Math.floor(Math.random() * data.memeData.data.memes.length)].url;
    }

    function handleButtonClick() {
        // noinspection JSCheckFunctionSignatures
        setData(prevMeme => ({...prevMeme, url: getMemeURL()}))
    }

    function handleChange(event) {
        setData(prevMemeData => {
            const {name, value} = event.target
            return {
                ...prevMemeData, [name]: value
            }
        })
    }

    function handleSubmit() {
        console.log("SUBMOOT")
    }

    return (
        <main>
            <div className={"form"} onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Top Text"}
                    className={"form--input"}
                    name={"toptxt"}
                    value={data.toptxt}
                    onChange={handleChange}
                />
                <input
                    type={"text"}
                    placeholder={"Bottom Text"}
                    className={"form--input"}
                    name={"btmtxt"}
                    value={data.btmtxt}
                    onChange={handleChange}
                />
                <button
                    onClick={handleButtonClick}
                    className={"form--button"}
                >
                    New Meme Image
                </button>
                <MemeImage memeData={data}/>
            </div>
        </main>
    )
}


// the reason why we can't use async has to do with this destructor function that we can return from the function that we pass to useEffect
//
// if you put async infront of a function it alters the way that function executes
//
// if a funciton is marked as async then the return value is not simply a bare value that can be assigned to a variable for instance
//
//     instead it will always return a promise,
//
//     so what we code as being returned will be resolved as a successful promise completion of the async function.
//
// react.useEffect is expecting a function that returns a function that can be used to clean up any side effects, not a
// promise that must be "unwrapped" into a function that is assignable
//
// if we need to use async then we should do so as a separate function that is defined within the top level function passed
// to useEffect

/*

 */
