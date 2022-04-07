/*
* html element properties are limited to what can be placed on that element type.
* we can't pass in a 'whateveriwant' tag into the html element because that property is notdefined for that element in the html spec
* with react, because it is a custom component, we can pass in any property or attribute that we want.
* we have four pieces of data that we need to pass in. right now we are just going to pass in some data, we are not going to consume it until next lesson..
*
* props help us make components more re usable by passing dynamic data in through props, like through the jsx element definitions for example.
* could be configuration meta data to configure the component to work a function way, or could just be data that is going to be displayed or use to display something, etc.
*
* <MyComponent prop="value"/>
*
* You cannot pass a custom property into a native DOM element because native dom elements have specifications that are adhered to property and attribute wise.
* So if that particular attribute or property is not defined for that element, then it is an error to try and assign a value to it.
* jsx syntax returns an object that describes a DOM node that should be created, so in a way we are both defining and assigning values to our own custom nbative DOM element.
*
*
* Properties are recieved in a component by different methods if it is a function based component then you can just add a parameter into the function and use the props there
*
* function MyComponent(myProps){
*   return (<h1>{myProps.creamcheese}</h1>)
* }
* myProps should really just be "props" to follow strong conventions.
*
* The alternative way is to have the acutal text unit be a class that inherits/extends Component
* and then the props property will be available inside said component.
*
*
* */

import React, {Component} from "react";

class MyChildComponent extends Component {
    render() {
        return (<div>
                <h1>Conditional Rendering Example:</h1>
                {this.props.someProperty && <h2> someProperty = {this.props.someProperty}!</h2>}
            </div>
        )
    }
}

class MyParentComponent extends Component {
    render() {
        return (
            <div>
                <MyChildComponent
                    someProperty={"property value!"}
                />

                <MyChildComponent
                />
            </div>
        )
    }
}

export default MyParentComponent