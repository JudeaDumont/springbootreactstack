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
                <ObjectSaveComponent/>
                <ObjectDeleteComponent/>
                <ObjectListComponent
                    title={"List Of Objects!"}
                />
                <ObjectListByNameComponent
                    title={"List Of Objects By Name!"}
                />
            </div>
        )
    }
}

export default ObjectApp