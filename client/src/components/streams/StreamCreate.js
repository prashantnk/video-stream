import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput(props) {
        return (
            <div className='ui field'>
                <label htmlFor={props.input.name}>{props.label}</label>
                <input {...props.input} id={props.input.name} />
            </div >
        );
    }
    render() {
        return (
            <div className='ui form'>
                <Field component={this.renderInput} name="title" label="Enter Title" />
                <Field component={this.renderInput} name="description" label="Enter Description" />
            </div>
        );
    }
}

export default reduxForm({
    form: "streamCreate"
})(StreamCreate);