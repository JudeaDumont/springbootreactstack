import React from "react";

//what we want is to analyze how we are using state and inputs such that when we need to add 30 inputs to a
// form that it isn't painful with us repeating ourselves and duplicating code per input
//we are going to get a setter that updates one of the elements in our state,
//once we start getting to upwards of four inputs then we are going to want to save that in state.


export default function Level3App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: ""
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    return (
        <div>
            <form>
                <input
                    type={"text"}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    name={"firstName"}
                    value={formData.firstName}
                />
                <input
                    type={"text"}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    name={"lastName"}
                    value={formData.lastName}
                />
                <input
                    type={"text"}
                    placeholder={"Email"}
                    onChange={handleChange}
                    name={"email"}
                    value={formData.email}
                />
                <input
                    type={"text"}
                    placeholder={"State"}
                    onChange={handleChange}
                    name={"state"}
                    value={formData.state}
                />
            </form>
        </div>
    )
}

/*

when a value is input into the input by the user, the value is no longer being controlled by the input buyt rather by react state

every change that the user makes to the forms runs the handle change function

function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

which updates react state,
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: ""
    })

    which then updates the value of the input box:

    <input
        type={"text"}
        placeholder={"First Name"}
        onChange={handleChange}
        name={"firstName"}
        value={formData.firstName}
    />

So now, the user is changing react state on every keystroke and then react state is telling the input box value what to be

if you don't set this up correctly react might complain about having uncontrolled components.

By "contorlled components" I'm thinking that what we mean is "components contorlled by react state".

forms can have all kinds of different inputs, radio buttons, check boxes, text areas and so forth.

each one has special considerations we need to keep in mind when using them in the real world
                    type={"text"}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    name={"firstName"}
                    value={formData.firstName}
                />
text area is different because it is not self closing, it has its own closing tag

and in between the opening and closing tag is the value of the text area.

Just kidding lol, react has made it uniform such that text areas follow the same principles as regular text inputs.

the only diff is that you do not include the type as it is included in the tag.



controlled components,
controlled inputs,

if you read through the react forms documentation you would find descriptions for controlled inputs

controlled components are going to be part of the react documentation.

when we are talking about mainting state inside of a component there is a common concept called the single source of
truth.

the state that you are maintatining in your component should be the single source of truth

think back to when we were learning abotu changing ctate  and we had our boxes and squares example one solution

that we came up with was that each box would take in its own incoming on prop and then set its internal state using that
 prop, this was called derived state,

each box is initially configured using props and then state takes over from there.

the box itself could change its own internal state and therefor display being filled or not. problem is that there are
two instances of that state that exist
and those two seperate sources of truth may not match up

the problem being of course that there is now more than one single source of truth.

this is the overarching philosophy of not needing derived state.

the array of these objects is being held in state int he app component  but thenm each box is changing that state without
telling the parent component that the initially configured state is not actually necessary.

the source of truth has changed ever since initialization.

app component never knew, state would offten not match with one another.

each input is holding its own state. in a regular html form, with no react involved at all when a user types intoa n input bnox

that input box is maintaining its own state.

in this case we have two pieces of state, one being held by the input box held in regular html

and the other updating on every keystroke in our react code.

we have set it up so that the state of our input box gets mirrored by our state in react

the good practice is to have the state defined by react define the state that drives the inputbox

So, now we have level3 of forms

the difference between level2 app and level 3 app is that conceptually:

 */