import React from "react";

export default function APIExampleLevel3(){
    const [data, setData] = React.useState({})
    const [count, setCount] = React.useState(0)

    function countUp() {
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(() => {
        console.log("CREAM")
            fetch("https:////swapi.dev/api/people/1").then(res => res.json()).then(data => setData(data))
        }
        , [count]
    )

    return(
    <div>
        <h1>count ={count}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={countUp}>Count</button>
    </div>
)

}

/*
* think abotut the use case where the fetch data always remains the same, except that when we say that
* it just means that there are long periods between its changes, or that we are not sure if it will ever change, or even if it will
* I can definitely imagine many of these circumstances given past experiences.
*
* one thing we could do is look at a date and check the time that has passed.
* of course this would run everytime the component is rerendered,
* but imagine we check if a certain amount of ptime has passed and only refetch the data if a threshold is met.
* this would potentially solve a lot of problems with reacts means of state and componentization.
* */

/*
with this new method of doing things the changing of the state will re render the component but it will not change count
and therefor it will not cause the api call to execute again and therefor not change the state and therefore not re render the component.
 component rendered the first time,
 which ran the first fetch to go get data, which set the react state which rerendered the component again,
 then the effect checked to see if the old count matches the new count and it was the same
 so it did not run the fetch again, which did not cause a rerender of the component, which did not fetch again,

 thus the loop is closed

 it is contrived to have the effects dependencies looking at the count
 because the count does not really have anyuthing to do with fetching the data we are fetching

 click add button, then the call to api happens again and the fetch happens again.

 if you were to open developer tools and look at network traffic you would see that it did infact make another request out to fetch some data.

 we wouldn't know since it is the same data being returned by the same query to fetch the data.

 what should be in our dependencies array in this case?

 our code is not making use of count.

 usually the value that we want to detect changes on will show up elsewhere int he function

 it does not determine how this function runs at all.

 so what should be there?

 maybe it should be the data you might think, but actually that will get us back into the same loop,
 because even if it is the same data getting returned back to us, it is not the same reference,

 react does its magic by reference, not by value, so even if the value is the same, if the reference changes then
 react will detect a change and rerender the component. check for effects to rerender, etc.

 assuming i want the api request to happen when the app first loads, we will leave it empty, because there are no
  dependencies for the fetch to update against, fi it is always the same data then there is no need to check if it
  changed.

 the array can just be empty if the request needs to run on the very first run of the component.





 */
