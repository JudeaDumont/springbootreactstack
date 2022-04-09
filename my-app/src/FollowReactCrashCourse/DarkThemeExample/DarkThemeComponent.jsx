import React from "react";
import boxes from "./boxes";
import BoxComponent from "./BoxComponent"


export default function DarkThemeComponent() {

    // eslint-disable-next-line no-unused-vars
    const [squares, setSquares] = React.useState(boxes)
    const squareElements = squares.map(square => (
        <BoxComponent
            on={square.on}
            key={square.id}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>

    )
}
