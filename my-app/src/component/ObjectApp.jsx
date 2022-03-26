import React, { Component } from 'react';
import ObjectListComponent from "./ObjectListComponent";
import ObjectListByNameComponent from "./ObjectListByNameComponent";
import ObjectSaveComponent from "./ObjectSaveComponent";

class ObjectApp extends Component {
    render() {
        return (
            <div>
                <h1>!!!!!Some Object Application!!!!!</h1>
                <h1>!!!!!I DRANK A LOT OF CREAM!!!!!</h1>
                <ObjectSaveComponent/>
                <ObjectListComponent/>
                <ObjectListByNameComponent/>
            </div>
        )
    }
}

export default ObjectApp