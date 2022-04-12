//convenient example for showing correct use of useEffect
//note how the dependencies affect when useEffect is ran.

import React from "react";

export default function APIExampleLevel2() {
    const [count, setCount] = React.useState(0)

    function countUp() {
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(() => {
            console.log("useEffect ran")
        }
        , []
    )


    return (
        <div>
            <pre>count: {count}</pre>
            <button onClick={countUp}>Count</button>
        </div>
    )

}


/*

interacting wiht an API means that we are first going to fetch the data and then we are going to set state with it in react.

benefits form saving stuff in state.

preliminary syntax for doing a fetch

manage state for us between render cycles, remembers state values form one render to the next.

hook into that state using the useState hooke

keep the user interface updated whenever state changes.

any kind of side effects are things that react can't handle on its own,

this is kindof the opportunity for creative problem solving and the like probably.

anything that exists outside of reacts purview or reach

localStorage on our own browser for example

react has no real hand in interacting with local storage.

any kind of code that interacts with APIs or database storage or anything like that is all up to us to figure out,
react does not interact with those types of calls.

react has no way of knowing what APIS or databases we are interacting with.

Hence the existance of fullstack developers amiright HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA

any kind of pub subs,

it is also said that "the syncing of internal states" is not something that react handles,

that seems liek a farfetched claim.

React can manage the rerended of a component based on some state and then on the re rendering of another component based on some other state.

But it is not necessarily paying attention to any kind of context or tethering between the two...

I mean, wouldn't the state be the tether between the two in the case where you need two components to be synced?

I feel like that claim is busted by some critical thinking/creativity.

you would use the state in a manner that syncs the two...

I suppose the philosophy is that "you" are the one who has to do that tethering, via react state or not,
it is up to you to figure out these case.

anything that react is not in charge of is considered a "side effect"

react has given us the useEffect hook when we tell react to do something crazy like put something on the screen that is going to cause the component to be rerendered

in which case it will try to put that same something on the screen etc.etc.

so react gives us the useEffect hook to deal with this

 useEffect is going to help us with a context that is outside the top level of our component

 such that if we need code to execute that causes a state change and then the component rerenders causing a state change etc.

 I am betting that this has to do with "instead of re rendering the whole component and re running top level code. "
I am betting that useEffect allows us make updates whtiout having to rerender the entire component
that depends ont he state we want to change.

useEffect can be thought of as a blank canvas that react gives us to perform some execution outside of the react ecosystem.

 state, props, and the user interface it puts on the page.

 useEffect is a tool that allows us to synchronize react with some outside state, like our localStorage, apicalls, fetchdata updating state

 useEffect is like a combination of the react class lifecycle methods: componentDidMount, comopnentDidUpdate, and componentWillUnmount

 modern advice is to work on retraining your approach to understanding side effects when using react.
 kindof a contradiction to the documentation but the trust is in that one philosophy is greater than the other it nhat the other can lead you to trouble probably.

 The first argument to the useEffect hook is a callback function

 A sideeffect, is something that is reaching outside of reacts ecosystem and then trying to set some state in the process.

 We are trying to keep our components in sync with

 even though you wrap the side effect code, in this case our API call, in a useEffect() hook-,
 then it will still have an infinite loop

 this is because we did not pass a second parameter to the useEffect() call.

 since we did not pass a second parameter to useEffect there is actually almost no difference between having the code in the top level of the component.

 one small difference is that anything put inside that callback function is guaranteed to run only after the user interface has been painted to the screen.

 only after the native DOM elements have been rendered and painted will the useEffect functions run

 so, the callback funciton is gurarnteeed a specific ordere only after it has been palced on the DOM.

 still stuck ina n infinite loop.

 so we need to provide a second parameter to useEffect,na d now we will see what that second parameter is and how it solves that problem.

  pass a second parameter to use effect, that are values that, if they change, will cause use effect to run. limiting the number of times that useEffect will run.
 instead of running after every single render

 if we leave that as an empty array, then we tell react that we want to runn it on the very first run.  but then,

 because those values never change, it will enver run again.

 useEffect is literally just a different means of detecting differences, adnif there are differences it addds those
 differences onto the end of the renders that occur as a result of rerendering the component.

 and now,


this can make alla the difference in the world because now you are relying on bools that you can make into
whatever you want

"did this change?"
 */
