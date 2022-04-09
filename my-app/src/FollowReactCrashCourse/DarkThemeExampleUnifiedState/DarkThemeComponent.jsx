import React from "react";
import boxes from "./boxes";
import BoxComponent from "./BoxComponent"


export default function DarkThemeComponent() {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <BoxComponent
            on={square.on}
            key={square.id} //this doesn't even show up in the component, no access. wtf
            id={square.id}
            toggleTurnedOn={toggleTurnedOn}
        />
    ))

    function toggleTurnedOn(id){ // i really don't like how you have to update every single component just because one changes.
        //also, we are in javascript, why in the F are we using arrays and iterating over them when we can just use maps.
        // bad data structuring practice, bad efficiency, just BAD
        setSquares(prevSquares => {
            let newSquares = [...prevSquares];
            for(let i = 0; i < newSquares.length; ++i){
                if(newSquares[i].id === id){
                    newSquares[i] = {...newSquares[i], on: !newSquares[i].on}
                    return newSquares;
                }
            }
            return newSquares;
        })
    }

    return (
        <main>
            {squareElements}
        </main>

    )
}
