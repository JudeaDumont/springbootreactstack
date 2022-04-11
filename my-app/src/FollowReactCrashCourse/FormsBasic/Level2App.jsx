import React from "react";

//what we want is to analyze how we are using state and inputs such that when we need to add 30 inputs to a
// form that it isn't painful with us repeating ourselves and duplicating code per input
//we are going to get a setter that updates one of the elements in our state,
//once we start getting to upwards of four inputs then we are going to want to save that in state.


export default function Level2App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: ""
    })

    //we are going to chagne this handler to make it more universal
    function handleChange(event) {
        console.log(formData)
        //there are some properties that we can access on this DOM element now

        //need to distinguish between which input triggered this event since both onCHange hooks are assigned this function

        //one way to do that that also makes use of a best practice mechanism is to give the inputs names and use that name
        //to save the data off in the form data object.
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]:event.target.value //the [] syntax here makes use of computed properties from es6
                //computed properties just means we can interpolate javascript as the key in map objects
            }
        })
        console.log(formData) //one important thing to keep in mind is that calls to state through React are ASYNCHRONOUS
        //so this line of putting things in the console may be
        // confusing when it has the same result as the one previous to setting the state.
    }

    return (
        <div>
            <form>
                <input
                    type={"text"}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    name={"firstName"}
                />
                <input
                    type={"text"}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    name={"lastName"}
                />
                <input
                    type={"text"}
                    placeholder={"Email"}
                    onChange={handleChange}
                    name={"email"}
                />
                <input
                    type={"text"}
                    placeholder={"State"}
                    onChange={handleChange}
                    name={"state"}
                />
            </form>
        </div>
    )
}