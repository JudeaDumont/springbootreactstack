
/*
* quick little pop quiz on topics we have talked about up to this point.
* We need to import react to be able to write jsx syntax
* if you were to console log(page) then what would show up is a parent element with child elements in javascript (a javascript object)
* a bunch of react elements described via javascript object
* what is wrong with the code is that the jsx object contains sibiling elements.
* declarative is less verbose. imperative is more step by step with every detail being described to the computer
* declarative: make me a pbj, imperative: untwist bread tie on bread, take out two slices of bread, etc.
*
* declarative leads to fewer bugs in the end.
* when comething is composable, small pieces are put togethet ro make a greater hold. pieces of UIs, put into components, then put those components together to buidl the page.
*
* pretty braod definition, composability spreads throughout allof computer programming.
*
* custom components in react. implies the idead of having components that are boiler plate, and you cajust pull them from the web or something.
*
* rendering vjsx elements via the renderDOM.render method.
*
* you can render raw html but that is a bad practice because the elements are not re usable and it is harder to maintain.
*
* CUSTOM COMPONENTS!
*
* here we go
*
* write some code that we can execute just by calling that funciton. react adopts that concecpt by calling a component in a reusable way. create a function.
* */
/* eslint-disable */
import ReactDOM from "react-dom";
import React from "react";

function Slappadabass(){//functional components have to be pascal case for the ide to recognize that it is called in the angle brackets below
    return (<div>CREAMED CORN</div>)
}
//
// need to use pascal case for component names, capatilize first letter of component.

//Enumerate reasons to learn react.
ReactDOM.render(<Slappadabass/>, document.getElementById("frognuts"));
ReactDOM.render(<h1>It's working</h1>, document.getElementById("frognuts"));