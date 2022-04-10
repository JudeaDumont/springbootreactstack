import React from "react";

function ConditionalRenderingComponent(props) {
    return (
        <div>
            <h1 onClick={props.toggleIsShown}>{props.datum.isShown && "See Deez " + props.datum.id}</h1>
            <h1 onClick={props.toggleIsShown}>{!props.datum.isShown && "Can't " + props.datum.id}</h1>
        </div>
    )
}

export default function ConditionalRenderingApp() {

    const [data, setData] = React.useState([{isShown: false, id: 1}, {isShown: false, id: 2}, {isShown: false, id: 3}])

    function toggleIsShown(id) {
        setData(prevData => {
            return prevData.map(prevDatum => {
                return prevDatum.id === id ? {...prevDatum, isShown: !prevDatum.isShown} : prevDatum
            })
        })
    }

    return (
        <div>
            {data.map(datum => (
                <ConditionalRenderingComponent key={datum.id} datum={datum}
                                               toggleIsShown={() => toggleIsShown(datum.id)}/>
            ))}
        </div>
    )
}