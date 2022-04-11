import React from "react";

export default function Level1App(){
    const [fName, setFName] = React.useState("")
    const [lName, setLName] = React.useState("")

    //this isn't great because we are repeating ourselves for every input box that exists
    function handleFNchange(event) {
        // console.log("DEEZUM")
        // console.log(event)
        // console.log(event.target) //this gives us the native DOM element that triggered the event
        //it has values that we care about, including the value property
        setFName(()=>event.target.value)
        console.log(fName)
        // we dont have to worry about what the previosu value of fName state was because we have the fully update state
        // readily available from the form onCHange event

    }
    function handleLNchange(event) {
        // console.log("DEEZUM")
        // console.log(event)
        // console.log(event.target) //this gives us the native DOM element that triggered the event
        //it has values that we care about, including the value property
        setLName(()=>event.target.value)
        console.log(lName)
        // we dont have to worry about what the previosu value of fName state was because we have the fully update state
        // readily available from the form onCHange event

    }


    return(
        <div>
            <form>
                <input
                    type={"text"}
                    placeholder={"First Name"}
                    onChange={handleFNchange}
                />
                <input
                    type={"text"}
                    placeholder={"Last Name"}
                    onChange={handleLNchange}
                />
            </form>
        </div>
    )
}