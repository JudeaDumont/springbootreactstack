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
    const handleSubmit = e => {
        e.preventDefault();
        // noinspection JSUnresolvedVariable
        ObjectService.DeleteObject(Number(idRef.current.value));
    };
    return (
        <form onSubmit={handleSubmit} >
            <Field ref={idRef} label="id:" type="number" pattern="[0-9]*" />
            <div>
                <button type="submit">Delete</button>
            </div>
        </form>
    );
};

const ObjectDeleteComponent = () => {
    return (
        <div>
            <Form/>
        </div>
    );
};

export default ObjectDeleteComponent;