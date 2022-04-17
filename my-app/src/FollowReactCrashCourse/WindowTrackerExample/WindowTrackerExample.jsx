import React from "react"
import WindowTracker from "./WindowTracker";

export default function WindowTrackerExample(){
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

/*
* right now all this app is doing is displaying the innerwidth of our window
* it is not accessing the innerWidth as soon as the component loads and is therefor not updating, which we will get to later.
* if you hit refresh it will give you a new window width but it does not automatically change if you resize the window.
*
* so, we are going to have some conditional rendering for the window tracker where a button click turns it on an off.
*
* first we create some state:
* const [show, setShow] = React.useState(true)
* then we create a funciton that hadnles the click of the button wich pretuirns the opposite of the show, and then
* set that up as the onClick of the button, then we conditionally render the window tracker based on show.
*
* if we widen it a little bit then toggle it off and on, then it changes,
*
* when we toggle it off, it is what is called unmounted, which means it is completely removed from the DOM
*
* when it is remounted, it will rerun that innerwidth call and give back the correct value of the newly sized screen
* we can do better than thislike add an event listener to our window that listens  for the resize event.
*
* then wehenever it is resized  we set some local state to our window tracker.
*
* and then we can display rthe ocrrect window width at any given width  without haqving to toggle it on and off or refresh our page.,
*
* however because it is an event on our window it cant simply add something liek an onResize event like we have with other  event listeners we have used up until now.
*
* because it is an event on the window, you can't just have a hook to it like "onResize" on the h1 element for the inner width.
*
* we are going to be interacting with a system outside of the window tracker component, the window itself is not local to react
* what tool does react give use to interact with some outside system and keep our local state in sync with it? useEffect
*
* */