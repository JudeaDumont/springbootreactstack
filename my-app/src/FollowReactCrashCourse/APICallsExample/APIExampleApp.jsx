import React, {Component} from "react";
import SomeData from "./SomeData";

class APIExampleComponent extends Component {
    render() {
        return (
            <div>
                <h1>ID: {this.props.somedata.id}</h1>
                <h1>ID: {this.props.somedata.namex}</h1>
            </div>
        )
    }
}

export default function APIExampleApp() {
    const dataElements = SomeData.map(d => {
        return <APIExampleComponent somedata={d}/>
    })
    return (
        <div>
            {dataElements}
        </div>
    )
}