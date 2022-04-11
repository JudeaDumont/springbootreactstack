import React from "react";

export default function Level5App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        comments: "",
        hasAids: false,
        aidsType: ""
    })

    console.log(formData.aidsType) //now its logging when the component is rendered, which is what you want for react
    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
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
                <fieldset>
                    <legend>Type of AIDS Achieved</legend>
                    <input
                        type={"radio"}
                        onChange={handleChange}
                        id={"super-aids"}
                        name={"aidsType"}
                        value={"super-aids"}
                        checked={formData.aidsType==="super-aids"}
                    />
                    <label htmlFor={"super-aids"}>Super AIDS?</label>
                    <input
                        type={"radio"}
                        onChange={handleChange}
                        id={"super-hyper-mega-aids"}
                        name={"aidsType"}
                        value={"super-hyper-mega-aids"}
                        checked={formData.aidsType==="super-hyper-mega-aids"}
                    />
                    <label htmlFor={"super-hyper-mega-aids"}>Super Hyper Mega AIDS?</label>
                    <input
                        type={"radio"}
                        onChange={handleChange}
                        id={"super-hyper-mega-death-aids"}
                        name={"aidsType"}
                        value={"super-hyper-mega-death-aids"}
                        checked={formData.aidsType==="super-hyper-mega-death-aids"}//method for control
                    />
                    <label htmlFor={"super-hyper-mega-death-aids"}>Super Hyper Mega Death AIDS?</label>
                </fieldset>
            </form>
        </div>
    )
}

/*
radio buttons do not have their own html state, they are controlled by react state.
 */