/* eslint-disable no-unused-vars */
// noinspection ES6UnusedImports

import React, { Component } from 'react';
import ObjectListComponent from "./ObjectListComponent";
import ObjectListByNameComponent from "./ObjectListByNameComponent";
import ObjectSaveComponent from "./ObjectSaveComponent";
import ObjectDeleteComponent from "./ObjectDeleteComponent";
import IntroToLogic from "../FollowReactCrashCourse/introductiontologicincomponent";
import MyParentComponent from "../FollowReactCrashCourse/ParentChildPropertiesExample";
import SquaringComponent from "../FollowReactCrashCourse/squaring component";
import APIExampleApp from "../FollowReactCrashCourse/APICallsExample/APIExampleApp";
import MemeGeneratorExample from "../FollowReactCrashCourse/MemeGeneratorExample/MemeGeneratorExample";
import UpdateObjectComponentExample from "../FollowReactCrashCourse/UpdatingObjectProperties/UpdateObjectApp";

class ObjectApp extends Component {
    render() {
        return (
            <div>
                <MemeGeneratorExample/>
                {/*<UpdateObjectComponentExample/>*/}

                {/*<APIExampleApp/>*/}
                {/*<SquaringComponent num2square={[1, 2, 3, 4, 5]}/>*/}
                {/*<MyParentComponent/>*/}
                {/*<IntroToLogic/>*/}
                {/*<ObjectSaveComponent/>*/}
                {/*<ObjectDeleteComponent/>*/}
                {/*<ObjectListComponent*/}
                {/*    title={"List Of Objects!"}*/}
                {/*/>*/}
                {/*<ObjectListByNameComponent*/}
                {/*    title={"List Of Objects By Name!"} //this can be refactored to where the list component is configurable to be a ListByNameComponent*/}
                {/*/>*/}
            </div>
        )
    }
}

export default ObjectApp