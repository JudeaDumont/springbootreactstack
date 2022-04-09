import React from "react";

export default function BoxComponent(props) {
    const styles = {
        backgroundColor: props.on ? "green" : "red"
    }
    //yeah you dont have access to key but you can duplicate it under another name and use that, that's totally not counterintuitive
    return (
        <div onClick={()=>props.toggleTurnedOn(props.id)} style={styles} className={"box"}/>
    )
}
