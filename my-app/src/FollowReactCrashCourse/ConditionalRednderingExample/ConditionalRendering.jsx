import React from "react";

function ConditionalRenderingComponent(props) {
    return (
        <h1>{props.isShown && "See Deez"}</h1>
    )
}

export default function ConditionalRenderingApp() {

    return (
        <div>
            <ConditionalRenderingComponent isShown={false}/>
            <ConditionalRenderingComponent isShown={true}/>
        </div>
    )
}