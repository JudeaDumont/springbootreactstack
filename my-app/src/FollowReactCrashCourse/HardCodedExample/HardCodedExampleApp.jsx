import React, {Component} from "react";
import SomeData from "./SomeData";

class HardCodedExample extends Component {
    render() {
        return (
            <div>
                <h1>ID: {this.props.somedata.id}</h1>
                <h1>ID: {this.props.somedata.namex}</h1>
            </div>
        )
    }
}

export default function HardCodedExampleApp() {
    const dataElements = SomeData.map(d => {
        return <HardCodedExample somedata={d}/>
    })
    return (
        <div>
            {dataElements}
        </div>
    )
}

//I think it is a better convention to break doewn the object only as much as the level implies. for example.
// pass into the child component the whole object that it represents rather than each individual property of the object,
// then, within the child object, breakdown the objects properties into each individual native dom element as intended to be displayed.