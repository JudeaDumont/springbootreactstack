import React from "react";
import DarkThemeComponent from "./DarkThemeComponent";
import './boxes.css'

export default function DarkThemeAppUnified() {
    return (
        <div>
            <DarkThemeComponent darkTheme={true}/>
        </div>

    )
}


/*
everytime a box gets clicked it runs the function that is assigned to onCLick
in this case, props.toggle(props.id)

remember that we have ot wrap the function in another function to pass arguments to it. (OR USE A CLOSURE)

so onClick is assigned like this:
onCLick={()=>{props.toggle(props.id)}} //GOOD EXAMPLE FOR CLOSURE REFACTORING

when we call this function we are updating react state,

when we update a variable that is defined as react state, i.e.
[sArrayOfBoxes, sSetArrayOfBoxes]React.useState(arrayOfBoxes)

then we need to consider if we are updating react state with regard to what the state previously was.

so if we are counting up, then we need to use the function that is passed back to us to update react state.
since we care about what the number previously was to get the new number.

And in this case, if we are updating an element in an array, then we need to use the previous contents of the array
that that element is included.

My other problem with this is that the state is not at the leaves.

the state is at a parent of the leaves for some arbitrary learning related reason to show how to communicate with a parent
for dynamically generated children.

if you are having to pass areound IDs to change the state of a component, that should be your first hint that the state
you are trying to change should be at the level of the component from which you are having to pass an ID.

I suppose that the article that the speaker previously brought up goes against my instinct. I am just going to trust
that that is the case and that I don't need "derived state" which is what I am describing.

if the parent intializes the components with their state, then, the state should live in the parent I guess.




*/