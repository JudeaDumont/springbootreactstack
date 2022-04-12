import React from "react";

export default function APIExampleLevel1(){
    const [data, setData] = React.useState({})
    fetch("https:////swapi.dev/api/people/1").then(res => res.json()).then(data => setData(data))

return(
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
)

}
/*
This will constantly rerender the component because it sets some state and then calls a fetch which updates the state
which rerenders the component which sets empty state then fetches some data that updates state a then re rendered the component etc.
This is one of those things known as a "side effect" and the next topic is going to be handling them.

 */
