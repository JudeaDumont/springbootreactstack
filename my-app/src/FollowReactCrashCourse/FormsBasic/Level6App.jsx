import React from "react";

export default function Level6App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
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
        if (formData.newsletter) {
            console.log("Thanks for subscribing to our newsletter!")
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
                    value={formData.state}
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

 */