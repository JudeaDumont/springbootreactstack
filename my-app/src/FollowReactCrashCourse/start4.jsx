import React from "react";
import ReactDOM from "react-dom";

function Chef() {
    return (<header>
        <nav>
            <img src="https://www.google.com/aclk?sa=L&ai=DChcSEwjcxKTIuYH3AhX2FdQBHbW9ACUYABABGgJvYQ&sig=AOD64_226JN_Q4DfSgQVO-hK8EBUg7tz5A&adurl&ctype=5&ved=2ahUKEwj_g5bIuYH3AhWVBc0KHZW3ATIQvhd6BAgBEGY" width={"40px"} alt={"eggs"}/>
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