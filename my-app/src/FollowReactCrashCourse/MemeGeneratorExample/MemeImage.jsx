import React from "react";

export default class MemeImage extends React.Component {
    render() {
        return (
            <img src={this.props.memeUrl.toString()} alt={"boner forest"}  width={"800px"} height={"400px"}/>
        )
    }
}