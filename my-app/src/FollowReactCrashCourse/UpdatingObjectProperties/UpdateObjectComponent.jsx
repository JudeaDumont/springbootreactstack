import React from "react";

export default function UpdateObjectComponent() {
    const [obj, setObj] = React.useState({id: 0, name: "chef"})

    function handleClick() {
        setObj(prevObj => {
            return {...prevObj, name: prevObj.name === "chef" ? "jeff" : "chef", id: prevObj.id + 1}
        })
    }
    function handleIDClick() {
        // noinspection JSCheckFunctionSignatures
        setObj(prevObj => {
            return {...prevObj, id: prevObj.id + 1}
        })
    }
    function handleNameClick() {
        // noinspection JSCheckFunctionSignatures
        setObj(prevObj => {
            return {...prevObj, name: prevObj.name === "chef" ? "jeff" : "chef"}
        })
    }

    return (
        <header>
            <img
                onClick={handleClick}
                src="data:image/jpeg;base64,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"
                alt="Big Fat Troll Nuts"/>
            <h2
                onClick={handleIDClick}
            >ID:{obj.id}</h2>
            <h2
                onClick={handleNameClick}
            >NAME:{obj.name}</h2>
        </header>

    )

}