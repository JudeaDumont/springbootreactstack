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

const Form = (props) => {
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
        props.refreshList()
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

const ObjectSaveComponent = (props) => {
    return (
        <div>
            <Form refreshList={props.refreshList}/>
        </div>
    );
};

export default ObjectSaveComponent;