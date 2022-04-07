import React from "react";
import ReactDOM from "react-dom";
function Page(){
    return (
        <ol>
            <li>popular library</li>
            <li>more likely to get a jobby</li>
            <li>to exercise my mind in a more purposeful and practical fashion</li>
            <li>deez</li>
        </ol>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))

// scrimba community, my nuts itchy
// add more elements to page, header element with nested nav element with ensted image element
//h1 element will go below the header element and above the ordered list,

// dont just try to add a header, you will have sibiling elements in the component, must have one parent component.
