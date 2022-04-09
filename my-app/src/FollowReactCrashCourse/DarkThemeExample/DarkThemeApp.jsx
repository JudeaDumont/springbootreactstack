import React from "react";
import DarkThemeComponent from "./DarkThemeComponent";
import './boxes.css'

export default function DarkThemeApp() {
    return (
        <div>
            <DarkThemeComponent darkTheme={true}/>
        </div>

    )
}