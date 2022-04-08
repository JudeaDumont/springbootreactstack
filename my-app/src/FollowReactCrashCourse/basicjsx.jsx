// We can pass in any javascript object as props, we are not limitied to stirngs or numbers for our properties.

// for example you could pass in an array of strings, a map of strings, a list of SomeObjects retrieved from the backend rest controller, etc.

// static web pages dont allow the changing of data, or at least that is probably the defining attribute of static web pages vs. dynamic web pages.

//static web pages are blogs, nespaper sites article sites, recipe sites, any site where you dontchange any data

//dynamic is both read and write, user has ability to change the data that the app uses. they will display your specific data. banmk websites, air bnb social media, online games, andything that is highly interactive, they all exist on a tier above static web pages because of the interactcivity that they have.

//figma drafts are used as mock ups.

// event listenerns add the dynamic interactive aspect ot the web application. a lot of time learning about state, we will elarn about conditional rendering, forms that gather data fromt he user, and side effects which wewill learn how to handle.

// first couple lessons are css and javascript.

// under the cirsumtances where we are feeling overwhelmned about creating something that we don't necessarily have the ' +
// 'know=ledge to create, the way to overcome the feeling of being overwhelmed is to break down the app as much as posisble and take note of the parts that you can create.

//
// header is a static part of the site still
//
// figma determines font size, spacing, purple gradient, etc.
//
//     work on building the header ocmponent.
//
//     seperate components flder even if it is not really necessary.
//a



/*
One gotcha with react state is that component hierarchies are, to da gegree, dictated by where state needs to live.


React uses state to detect when data has changes, when this "state" data has changed, it will automatically update native dom elements that depend on that state.

The native DOM will update any values that it has assigned if those values are variables saved in state

any interaction with a react website would change the state. if you hit the heart or bookmark icon then it likely updates a database with the fact that you liked a recipe or song

those interactions update the state and then react updates the UI with those changes to the state

props and state are not the same things and do not behave similarly.

clarify the differences between the two and when you want to use one over the other.

props refers to variables that we are passing into a component that that compnent needs to work correctly.

props are properties of the component. it is component configuration. the comopnent will also deal with state that it displays,

but state does not need to be passed into the component for it to be properly configured

props work in the same way that a function receives parameters from above, a component receives props from above.

props are immutable, the component cannot change properties that it is passed.

inside a function you wouldn't want to just arbitrarily assign parameters a new value in a real qorld context. in the same way that you would not want a component to arbitrarily makes changes to its props.

This is all true as long as the parameters are not passed by pointer or reference where the expectation is that the function will change them, and that the logic of the later parts of the function do not rely on specific flag values that would be changed to in the earlier part of the function

I dont know the metaphor really falls apart actually.

If you considered pure functions then the metaphor holds water I would say.

props should never change in the body of a component.

state is the data that changes when the user interacts with the site. "The way the site currently is"

you would want to use props when you are trying to initialize the component with data that may change upon its reuse

you would want to use state to track user data and data that the user can manipulate.

immutable means that it cannot be changed once the variable is assigned for example. a variable is immutable if it cannot be changed after it is assigned a value.
immutable means read only. mutable means read and write.

state is more like declaring new variables inside a function that is going to be used for new behavior

state outlives components, so if a component needed to be rerendered the state would not be destroyed, but the props will be recreated.

state is not immutable.

useState is what we are going to use as state in react, and "useState is one of many hooks inside of react".

when we use React.useState()

it will return an array where the first value is undefined and the second walue is a function.

any value we pass to React.useState() will be returned as the first element of the array that comes back, only that that value will update in place
if you change the value that you passed into it. The variable that you assign the result of useState to becomes dynamic.

the function that comes back.

often you will see things like this const [someDynamicVariable, set] = React.useState("chef");

this will create two constants, one of them a dynamic varibale named someDynamicVaribale and one called set[].
where [] is going to be the name of the dynamic varibale that we just created.


this is called array destructuring, where the assignment of the result of something, in this case the call to React.useState,
includes the unpacking of an array into individual variables we can reference from then on out.

any value that we call setSomeDynamicVariable with is going to be the new version of state.



*/


