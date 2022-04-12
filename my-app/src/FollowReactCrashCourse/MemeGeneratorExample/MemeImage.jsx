import React from "react";

export default class MemeImage extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.memeData.toptxt}</h2>
                <img src={this.props.memeData.url.toString()} alt={"boner forest"} width={"800px"} height={"400px"}/>
                <h2>{this.props.memeData.btmtxt}</h2>
            </div>
        )
    }
}