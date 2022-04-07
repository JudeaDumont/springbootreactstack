import React, { Component } from 'react';
import ObjectListComponent from "./ObjectListComponent";
import ObjectListByNameComponent from "./ObjectListByNameComponent";
import ObjectSaveComponent from "./ObjectSaveComponent";
import ObjectDeleteComponent from "./ObjectDeleteComponent";
import IntroToLogic from "../FollowReactCrashCourse/introductiontologicincomponent";

class ObjectApp extends Component {
    render() {
        return (
            <div>
                <IntroToLogic/>
                <h1>!!!!!Some Object Application!!!!!</h1>
                <h1>!!!!!WOOHOO!!!!!</h1>
                <ObjectSaveComponent/>
                <ObjectDeleteComponent/>
                <ObjectListComponent/>
                <ObjectListByNameComponent/>
            </div>
        )
    }
}

export default ObjectApp