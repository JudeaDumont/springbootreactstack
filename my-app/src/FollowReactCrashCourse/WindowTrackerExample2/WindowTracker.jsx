import React from "react";

export default function WindowTracker(){
    const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        let resizeListener = ()=>{ //notice that we are moving the functioninto a variable so we can reference it by name now.
            setWindowInnerWidth(window.innerWidth)
        };
        window.addEventListener("resize", resizeListener)
        console.log("resize listener successful")
        return ()=>{
            //this is a clean up function for unmount
            window.removeEventListener("resize", resizeListener)
            console.log("remove resize listener successful")
            //of course this implies that a listener is created per funciton for a particular event
        }

    }, [])
    return(
        <h1>Window Width: {windowInnerWidth}</h1>
    )
}
/*

what we can return from useEffect a function,

this function is a clean up fucntion that useEffect will use to clean up any resources that the component was using before it was unmounted.

with the clean up funciton in tact we no longer get that memory leak warning abotu an event listenener firing and trying
to change state on a variable that has no location, and is therefor a memory leak. (illegal access to deleted variable)

app component is deciding when the widnow tracker component should be rendered.

as soon as the component is rendered it creates that event listener for the component

as soon as we toggle it on and it is rendered to the screen it sets the window width state that determines what that
shouldbe at the surrent window width at the time that the component was rendered

useEffect will only render to the screen once the DOM has been painted.

so it will register the use effect, which, if the windowtracker is toggled on, will register an event window, and if it
 is toggled off, will remove the event listener that was previously created.

 I wonder what the behavior is of passing to revoelistener an event or a  function that as never registered.

 this useEffect has no dependencies because there is nothing inside the the useEffect that would rerender based on state,

 It is only relevant to component load

 The rendering of the page is also dependent on the resizing of the window, and for that outside system, we use useEffect.

 if the rendering of the page has to do with only react components, we are fine just using state.

 if the rendering of a component depends on anything outside the react system, we use useEffect.

 react knows when a component it rendered to the screen is abotu to be decommissioned, destructed, removed from the screen,
 it will run a sort of destructor

 a function returned by the function that is passed to useEffect.

 developers are expected to clean up after their side effects.

 the reason why we can't use async has to do with this destructor function that we can return from the function that we pass to useEffect

 if you put async infront of a function it alters the way that function executes

 if a funciton is marked as async then the return value is not simply a bare value that can be assigned to a variable for instance

 instead it will always return a promise,

 so what we code as being returned will be resolved as a successful promise completion of the async function.

 react.useEffect is expecting a function that returns a function that can be used to clean up any side effects, not a
 promise that must be "unwrapped" into a function that is assignable

 if we need to use async then we should do so as a separate function that is defined within the top level function passed
 to useEffect





 */