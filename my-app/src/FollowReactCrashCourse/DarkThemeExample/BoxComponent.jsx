import React from "react";

export default function BoxComponent(props) {
    const [turnedOn, setTurnedOn] = React.useState(props.on)
    const styles = {
        backgroundColor: turnedOn ? "green" : "red"
    }
    function toggleTurnedOn(){
        setTurnedOn(prevTurnedON => !prevTurnedON)

    }
    return (
        <div onClick={toggleTurnedOn} style={styles} className={"box"}/>
    )
}
