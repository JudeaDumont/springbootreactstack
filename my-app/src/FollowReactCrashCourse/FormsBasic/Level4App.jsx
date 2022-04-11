import React from "react";

export default function Level4App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        comments: "",
        hasAids: false
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target; //mapping function (not iterating like target was an array
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value //nice trick for checkbox inputs
            }
        })
        console.log(formData)
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
                <textarea
                    placeholder={"Comments"}
                    onChange={handleChange}
                    name={"comments"}
                    value={formData.comments}
                />
                <input
                    type={"checkbox"}
                    onChange={handleChange}
                    name={"hasAids"}
                    checked={formData.hasAids}
                />
                <label htmlFor={"hasAids"}>Got AIDS?</label>
            </form>
        </div>
    )
}

/*
htmlFor binds a label to another element, such that,

if oyu were to click on it it would handle the click event via the bond element.




 */