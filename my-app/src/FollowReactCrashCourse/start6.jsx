
// style.css

import React from "react";
import ReactDOM from "react-dom";

function BasicOutline(){
    return (
        <div>
            <nav>
                <img alt={"cheffy"}/>
                <h3>h3</h3>
                <h4>h4</h4>
            </nav>
            <main>
                <h1>h1</h1>
                <ul>
                    <li/>
                    (x 5)
                </ul>
            </main>
        </div>
    );
}

ReactDOM.render(<BasicOutline/>, document.getElementById("mynamichef"))

//the above is an example of a layout for a simple web page.