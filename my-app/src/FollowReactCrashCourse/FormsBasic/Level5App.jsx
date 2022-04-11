import React from "react";

export default function Level5App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        comments: "",
        hasAids: false,
        aidsType: "",
        egg: ""
    })

    console.log(formData.egg) //now its logging when the component is rendered, which is what you want for react
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
        event.preventDefault() //this means it won't refresh our page and rerender our app with its initial state and configuration.
        console.log(formData)
        //preventdefault prevents the way of the past of submitting forms with action methods that generally point to
        // php with a specific http protocol
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    name={"firstName"}
                    value={formData.firstName}
                />
                <br/>
                <input
                    type={"text"}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    name={"lastName"}
                    value={formData.lastName}
                />
                <br/>
                <input
                    type={"text"}
                    placeholder={"Email"}
                    onChange={handleChange}
                    name={"email"}
                    value={formData.email}
                />
                <br/>
                <input
                    type={"text"}
                    placeholder={"State"}
                    onChange={handleChange}
                    name={"state"}
                    value={formData.state}
                />
                <br/>
                <textarea
                    placeholder={"Comments"}
                    onChange={handleChange}
                    name={"comments"}
                    value={formData.comments}
                />
                <br/>
                <br/>
                <br/>
                <input
                    type={"checkbox"}
                    onChange={handleChange}
                    name={"hasAids"}
                    checked={formData.hasAids}
                />
                <label htmlFor={"hasAids"}>Got AIDS?</label>
                <br/>
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
                    <br/>
                    <input
                        type={"radio"}
                        onChange={handleChange}
                        id={"super-hyper-mega-aids"}
                        name={"aidsType"}
                        value={"super-hyper-mega-aids"}
                        checked={formData.aidsType==="super-hyper-mega-aids"}
                    />
                    <label htmlFor={"super-hyper-mega-aids"}>Super Hyper Mega AIDS?</label>
                    <br/>
                    <input
                        type={"radio"}
                        onChange={handleChange}
                        id={"super-hyper-mega-death-aids"}
                        name={"aidsType"}
                        value={"super-hyper-mega-death-aids"}
                        checked={formData.aidsType==="super-hyper-mega-death-aids"}//method for control
                    />
                    <label htmlFor={"super-hyper-mega-death-aids"}>Super Hyper Mega Death AIDS?</label>
                    <br/>
                    <br/>
                    <select
                        id={"egg"}
                        value={formData.egg}
                        onChange={handleChange}
                        name={"egg"}
                    >
                        <option value={""}>--Choose--</option>
                        <option value={"deez"}>Deez</option>
                        <option value={"nutz"}>Nutz</option>
                        <option value={"goat"}>Goat</option>
                        <option value={"ham"}>Ham</option>
                    </select>
                </fieldset>
                <button>SHRIMP</button>
            </form>
        </div>
    )
}

/*
radio buttons do not have their own html state, they are controlled by react state.
 */