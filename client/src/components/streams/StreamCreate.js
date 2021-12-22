import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) return (
            <div className='ui error message'> {error} </div>
        );
        else return null;
    }
    renderInput = ({ input, label, meta }) => {
        const error = this.renderError(meta);
        const fieldClassName = `ui field ${error ? 'error' : ''}`;
        return (
            <div className={fieldClassName}>
                <label htmlFor={input.name}>{label}</label>
                <input {...input} id={input.name} autoComplete='off' />
                {error}
            </div >
        );
    }
    onSubmit = (inputValues) => {
        console.log(inputValues);
    }
    render() {
        return (
            <form className='ui error form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field component={this.renderInput} name="title" label="Enter Title" value="hello" />
                <Field component={this.renderInput} name="description" label="Enter Description" />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
}

const formValidator = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Title should not be empty! "
    }
    if (!formValues.description) {
        errors.description = "Description should not be empty! "
    }
    return errors;
}

export default reduxForm({
    form: "streamCreate",
    validate: formValidator
})(StreamCreate);