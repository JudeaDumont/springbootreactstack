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