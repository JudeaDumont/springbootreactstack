import React from "react";

export default class BoxComponent extends React.Component {
    render() {
        const styles = {
            backgroundColor:  this.props.on?"green":"red"
        }
        return <div style={styles} className={"box"}/>;
    }
}
