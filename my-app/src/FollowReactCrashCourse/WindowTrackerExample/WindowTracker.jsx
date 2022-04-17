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

 */