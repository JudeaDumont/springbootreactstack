import React from "react";
import ReactDOM from "react-dom";

function Chef() {
    return (<header>
        <nav>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fnationaltoday.com%2Fwp-content%2Fuploads%2F2021%2F07%2Fshutterstock_1518533924-min.jpg&imgrefurl=https%3A%2F%2Fnationaltoday.com%2Fnational-personal-chef-day%2F&tbnid=Ab__7bqN-6q-dM&vet=12ahUKEwiOiOnhuYH3AhWGUs0KHToLBBQQMygAegUIARDdAQ..i&docid=JjrJ48UJYpFJQM&w=1200&h=1200&q=chef&ved=2ahUKEwiOiOnhuYH3AhWGUs0KHToLBBQQMygAegUIARDdAQ" width={"40px"} alt={"chef tony"}/>
        </nav>
    </header>)
}

ReactDOM.render(<Chef/>, document.getElementById("root"))

//why am i building everything as this monolithic page component, we are creating components to compose elements togheter, parent and child components and so forth.

//we argetting to parts where I am going to start making changes.

// a react component is a funtion that returns react elements. react elements are the object sthat get created when we return jsx. under the hood it is returning a javascript object that gets turned into real DOM elements that users see on the screen.
// components can be reused over and over.

// any components need to be pascal case, as in the function that returns the jsx components need to be pascal case.

//in react you render components with the html tag syntax, not calling the component with a function call.

// parent and child component

// take header element and puit it into a component element.

// we are definitely getting closer to things that are helpful to my project here

//you can add components with the html suyntax aka <htmlsyntax> anywere in the jsx.

// he is doing the challenge of header and footer components in a manner that makes complete sense. because in the future oyu can just replace the content portion of the components and keep the ehader and the footer the same for other web pages.

//
//taking jsx elements and turning them into natie DOM elements.