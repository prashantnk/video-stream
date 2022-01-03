import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
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
        this.props.onSubmit(inputValues);
    }
    render() {
        return (
            <form className='ui error form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field component={this.renderInput} name="title" label="Enter Title" />
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
const formWrappedComponent = reduxForm({
    form: "StreamForm",
    validate: formValidator
})(StreamForm);

export default formWrappedComponent;