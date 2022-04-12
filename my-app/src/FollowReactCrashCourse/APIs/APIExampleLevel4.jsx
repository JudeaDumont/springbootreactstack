import React from "react";

export default function APIExampleLevel4(){
    const [data, setData] = React.useState({})
    const [count, setCount] = React.useState(1)

    function countUp() {
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(() => {
        console.log("CREAM")
            fetch("https:////swapi.dev/api/people/" + count).then(res => res.json()).then(data => setData(data))
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
* in this example we are demonstrating an actual real world use of count, or at least a less contrived example,
* where the state will update based on count and where count actually has to do with the data that we are fetching changing.
*
* so now that we are done with this we are going to go ahead and update our meme generator to make api requests and update state with useEffect.
* */