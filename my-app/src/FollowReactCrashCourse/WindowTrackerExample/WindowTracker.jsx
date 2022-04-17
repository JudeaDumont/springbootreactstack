import React from "react";

export default function WindowTracker(){
    const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowInnerWidth(window.innerWidth)
        })

    }, [])
    return(
        <h1>Window Width: {windowInnerWidth}</h1>
    )
}

/*
it might be tempting to add innerWidth to the dependencies of the useEffect function, however, that value is a
constant value that is not set up to update internally wherever that reference "window.innerWidth" is called.
We have to listen for that resize event somehow I am guessing

there will be nothing trigger a rerender of the component because the call to innerWidth does not auto update inplace
of the funciton callsite

Created some state to set the innerwidth to, and that is set to a new value byt hat event listenener we added in useEffect

I suppose that it is best practice to add eventListeners in the useEffect function,

that way you can make sure they are only added once when the comopnent loads and then they are not readded upon
subsequent rerenders.

the window must also be updated to display the state that is going to change in order to cause the rerender to
properly transpire.

window width on the page  now updating dynamically.

lets analyze this little bug.

window tracker component only mounting when parent is allowing render with show variable

when it launched it immediately creadted an event listener anytime  the resize event happens,. that listener is registered with the dominant slef.

even  if we toggle off my component and try to resize the window it tells us that we can't update react state on an unmounted component

the component is no longer part of the dom but that listener is still trying to set the window width state on an unmounted comopnent

WOW that would be really confusing if you didn't follow along witht he logic of react.

that is actually a memory leak! WHATTTT

this screen cast is getting a bit long because of the challenges so next lesson we are going to address the issue of the memory leak and see what we can do to fix it.

previously if we turn off the window tracker and run the resize event we get a awaring about a memoqry leak.
because we set up an event listener on the browser and removing the component by toggling it off using conditional rendering does not remove the event listener

this is one of the potential piutfalls of side effects, things that we are communicating with externally to react that
we are using to stay in sync with, because we are staying in sync with it in a partiuclar way we have to clean it up
in particular ways

this event listener is just one example of something not getting cleaned up properly when a component unmounts.

another example would be you have  websocket connection in a chat API in a chat app that updates the screen auto whent here is a new message,

when  you subscribe to that websocket on the chat api it is always a good idea to unmount the component and then sever that websocket connection and unsubscribe and clean up
that resource when the component goes away

fortunately it is pretty easy to do.

function is a first parameter to the use effect.

what we can return from useEffect a function,

this function is a clean up fucntion that useEffect will use to clean up any resources that the component was using before it was unmounted.




 */