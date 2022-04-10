import React from "react";
import boxes from "./boxes";
import BoxComponent from "./BoxComponent"


export default function DarkThemeComponent() {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <BoxComponent
            on={square.on}
            key={square.id} //this doesn't even show up in the component, no access. wtf
            toggleTurnedOn={()=>toggleTurnedOn(square.id)} //closure
        />
    ))

    function toggleTurnedOn(id){ // i really don't like how you have to update every single component just because one changes.
        //also, we are in javascript, why in the F are we using arrays and iterating over them when we can just use maps.
        // bad data structuring practice, bad efficiency, just BAD
        setSquares(prevSquares => {
            return (prevSquares.map(prevSquare => {
                    return prevSquare.id === id ? {...prevSquare, on: !prevSquare.on} : prevSquare
            }))
        })
    }

    return (
        <main>
            {squareElements}
        </main>

    )
}

// main
// React will rerender any native dom element that depends on state as defined by the dev
//
// React will also rerender any component that relies on the state to be configured properly.
//
//     so
//
// if you have an app that has a parent component and that
// parent component defines state,
//     and then has a child component that gets that state passed into it,
//     then, when that state changes, any native dom element that depnends on
// that state will re render and any child component that has
// that state passed into it as props will also be re rendered.
//
//     One of the things that is a concern is, which comonents it is re rendering, how it is rerendering the components,
//     and how to optimize what is being re rendered as well as how it is deciding to render it potentially.
//
//     and now, the reason why i started this tutorial, to figure out how a child component can gain access to its parents
// state and make changes to it.
//
//     if that is the case, then the parent child component relationship is a dependency tree. in which case,
// cycles are probably catastrophic.
//
//     I finally came to the solution I was looking for.
//
//
//
// //Section of code used to refresh list component
// constructor(props) {
//     super(props)
//     this.listComponent = React.createRef()
// }
//
// refreshList = () => {
//     this.listComponent.current.refreshObjectList();
// };
// <ObjectListComponent
//     ref={this.listComponent}
//     title={"List Of Objects!"}
// />
//
// //Additions to save component
// const ObjectSaveComponent = (props) => {
//     <Form refreshList={props.refreshList}/>
// }
//
// const Form = (props) => {
//     const handleSubmit = e => {
//         props.refreshList()
//     }
// }
//
// if the parent component is a class component you have to add a constructor, and in that constructor
// create a reference (this.listComponent = React.createRef()) to the child component (ObjectListComponent)  such
// that you can call its methods(refreshObjectList()) from the parent .
//     in the parent, you create a function (refreshList) that you can pass to the sibling (ObjectSaveComponent)
// of the reffed component(ObjectListComponent).
//     the sibling component will execute some behavior(props.refreshList())
// which will, in turn, bubble up to the parent until the method of the reffed sibling is hit
// (this.listComponent.current.refreshObjectList();)
// which the ref "ref={this.listComponent}" defined in the parent gives access.
//
//     Context and redux are both technologies that help solve the problem of state creeping up to the highest level of the app.
//
//     This problem suits my solution to having a sibling component simply call a function that does only the work that needs
// to be done on its sibling (refreshing the object list).
//
// To me this seems like a more viable solution then moving the state up for exactly the reason that redux and context
// exist, state creeping up to a level where its access is unnecessary in many positions below that level in the dependency
// tree. State should exist at the leaves and the functions that operate on that state coupled with it, this is the
// whole idea behind object oriented programming. To couple data with the operations that utilize it.
//
//     What an awesome way to discover the trade offs between functional and object oriented from the perspective of functional.
//
//     when you intiialize state with incoming props that is called derived state. It is generally accepted that intiializing state with incoming props is worse than
// using unified state.
//
//     attempting to identify which box gets updated by passing the ID won't work because we do not get to decide what gets passed to our toggle function.
//
// function toggleTurnedOn(key)
// <div onClick={props.toggleTurnedOn} style={styles} className={"box"}/>
//
// incompatible
//
// to make this work you have to wrap the onCLick handler in another function
//
// function toggleTurnedOn(key)
// <div onClick={()=>props.toggleTurnedOn(key)} style={styles} className={"box"}/>
//
//
// for the next part we are going to rewrite the funciton loops over an array (which bothered me as seen above)
// in a more declarative syntax. To me this is a hint that it is going to optimize for the considerations I have.
//     This is really just a hunch, but an educated one, being as we are going to rewqrite the function that iterates through
// some objects and updates one of them based on an ID i am guessing
// that doing this in a declarative way means that the react compiler will optimize for it being as the compiler for
//     react was made to deal with declarative code.