// we have only been working on static things and react is not really about static pages.
//
//     Apparently I have just crossed the first section of react.
//
//     we are going to learn how to use data in our web pages now. previously it was just hardcoded into the react components. this is exactly what I need to be learning to get to the next place in my own project.
//
//     data living in a database drives lists.
//
//     componentns on a page driven by the data that underlies the page.
//
//     same architecture that exists all over the web.
//
//     figma has a bunch of desing files
//
// props will help us create reusable omponents. alot of time covering props syntax. create react componetns from an array of data.
//
//     list of items that we wont need to manually update whenevber the data behind it changes.
//
//     I am going to skip the design portion of the web styling because i dont give a doodoo
//
// props come into play in having dynamic data and reusability of components.
//
//     props in react:
//
// href is  a prop, src is a prop for image tags for example.
//
//     attributes and properties can be added to the input property to beef it up despite it not requireing them.
//
//     changing the porperties of an input for example can drastically change its appearancend behavior.
//
//     think about preoprties like thaey are parameters to a function.

import React from "react";

export default function SquaringComponent(props) {
    return (<div>
            <h1>Numbers Squared:</h1>
            <h3>{props.num2square.map(x => x * x).toString()}</h3>
        </div>
    )

    //it is porobably more readable to keep the javascript otuside of the interpolation.
    //depending on the time of day you might want to say good morning good afternoon or good night, and we would
    //want to put that logic in.
}

