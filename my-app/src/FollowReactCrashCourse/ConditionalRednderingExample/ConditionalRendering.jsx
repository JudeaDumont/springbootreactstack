import React from "react";

function ConditionalRenderingComponent(props) {
    return (
        <h1>{props.datum.isShown && "See Deez " + props.datum.id}</h1>
    )
}

export default function ConditionalRenderingApp() {

    const [data, setData] = React.useState([{isShown: false, id: 1}, {isShown: false, id: 2}, {isShown: false, id: 3}])

    function toggleIsShown(id) {

    }

    return (
        <div>
            {data.map(datum => (
                <ConditionalRenderingComponent datum={datum}/>
            ))}
        </div>
    )
}