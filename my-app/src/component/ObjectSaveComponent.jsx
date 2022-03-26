import React from 'react';
import ObjectService from "../services/ObjectService";

const Field = React.forwardRef(({label, type}, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} type={type}/>
        </div>
    );
});

const Form = ({onSubmit}) => {
    const idRef = React.useRef();
    const nameRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        // noinspection JSUnresolvedVariable
        const data = {
            id: Number(idRef.current.value),
            name: nameRef.current.value
        };
        ObjectService.SaveObject(data);
    };
    return (
        <form onSubmit={handleSubmit} >
            <Field ref={idRef} label="id:" type="number" pattern="[0-9]*" />
            <Field ref={nameRef} label="name:" type="text" />
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

const ObjectSaveComponent = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
        <div>
            <Form onSubmit={handleSubmit} />
        </div>
    );
};

export default ObjectSaveComponent;