import React from "react";

export default function Level6App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordconfirmation: "",
        newsletter: true,
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formData.passwordconfirmation === formData.password) {
            console.log("Sign up successful!")
            if (formData.newsletter) {
                console.log("Thanks for subscribing to our newsletter!")
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Email"}
                    onChange={handleChange}
                    name={"email"}
                    value={formData.email}
                />
                <br/>
                <input
                    type={"password"}
                    placeholder={"Password"}
                    onChange={handleChange}
                    name={"password"}
                    value={formData.password}
                />
                <br/>
                <input
                    type={"password"}
                    placeholder={"Password Confirmation"}
                    onChange={handleChange}
                    name={"passwordconfirmation"}
                    value={formData.passwordconfirmation}
                />
                <br/>
                <br/>
                <br/>
                <input
                    type={"checkbox"}
                    onChange={handleChange}
                    name={"newsletter"}
                    checked={formData.newsletter}
                />
                <label htmlFor={"newsletter"}>Do you want our new letter?</label>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

/*
buttons inside fomr act as submit already, when you click submit button it runs the onSubmit event handler which is assigned the handleSubmit function already.

then you want to prevent default so that the submission doesn't add all of the form data into the top of the page and
refresh the page and do a bunch of other things that are useless for us since we are not using antiquated web pages.

password and confirmation match each other then we say ":successfully signed up."


 */

// in a vanilla js app you gather all the fomr data for submission when you click submit

// in react, the fomr data is being constantly aggregated into react state, so when you submit, all the data is already there.

//the name of the element should match the key in state for said elements value
// that way when you handle a change, you can do so by storing the value of an element at that elements name

//saving a checkbox element requires a boolean value, as opposed to other elements whcih mostly use "value" as a string instead of "checked" as a boolean

//watch for a form submit by assigning a function to onSubmit within the properties of a form
//prevent default so that antiquated methods of form submission are not used.

//trigger a form submit by creating a button in a form and clicking that button.