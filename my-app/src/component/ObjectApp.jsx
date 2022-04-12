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
import HardCodedExampleApp from "../FollowReactCrashCourse/HardCodedExample/HardCodedExampleApp";
import MemeGeneratorExample from "../FollowReactCrashCourse/MemeGeneratorExample/MemeGeneratorExample";
import UpdateObjectComponentExample from "../FollowReactCrashCourse/UpdatingObjectProperties/UpdateObjectApp";
import DarkThemeApp from "../FollowReactCrashCourse/DarkThemeExample/DarkThemeApp";
import DarkThemeAppUnified from "../FollowReactCrashCourse/DarkThemeExampleUnifiedState/DarkThemeAppUnified";
import ConditionalRenderingApp from "../FollowReactCrashCourse/ConditionalRednderingExample/ConditionalRendering";
import Level1App from "../FollowReactCrashCourse/FormsBasic/Level1App";
import Level2App from "../FollowReactCrashCourse/FormsBasic/Level2App";
import Level3App from "../FollowReactCrashCourse/FormsBasic/Level3App";
import Level4App from "../FollowReactCrashCourse/FormsBasic/Level4App";
import Level5App from "../FollowReactCrashCourse/FormsBasic/Level5App";
import Level6App from "../FollowReactCrashCourse/FormsBasic/Level6App";
import APIExampleLevel1 from "../FollowReactCrashCourse/APIs/APIExampleLevel1";
import APIExampleLevel2 from "../FollowReactCrashCourse/APIs/APIExampleLevel2";

class ObjectApp extends Component {

    constructor(props) {
        super(props)
        this.listComponent = React.createRef()
    }

    refreshList = () => {
        this.listComponent.current.refreshObjectList();
    };

    render() {
        return (
            <div>
                {<APIExampleLevel2/>}
                {/*{<APIExampleLevel1/>}*/}
                {/*<MemeGeneratorExample/>*/}
                {/*<Level1App/>*/}
                {/*<Level2App/>*/}
                {/*<Level3App/>*/}
                {/*<Level6App/>*/}
                {/*<ConditionalRenderingApp/>*/}
                {/*<DarkThemeAppUnified/>*/}
                {/*<UpdateObjectComponentExample/>*/}

                {/*<APIExampleApp/>*/}
                {/*<SquaringComponent num2square={[1, 2, 3, 4, 5]}/>*/}
                {/*<MyParentComponent/>*/}
                {/*<IntroToLogic/>*/}
                {/*<ObjectSaveComponent refreshList={this.refreshList}/>*/}
                {/*<ObjectDeleteComponent refreshList={this.refreshList}/>*/}
                {/*<ObjectListComponent*/}
                {/*    ref={this.listComponent}*/}
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