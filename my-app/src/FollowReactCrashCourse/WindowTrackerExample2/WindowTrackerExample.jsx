import React from "react"
import WindowTracker from "./WindowTracker";

export default function WindowTrackerExample2(){
    const [show, setShow] = React.useState(true)

    function handleClick() {
        setShow(prevShow => {return !prevShow})
    }

    return (
        <div className={"container"}>
            <button onClick={handleClick}>Toggle Window Tracker</button>
            {show && <WindowTracker/>}
        </div>
    )
}