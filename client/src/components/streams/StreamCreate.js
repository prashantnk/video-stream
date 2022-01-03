import React from 'react';
import { createStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (inputValues) => {
        this.props.createStream(inputValues);
    }
    render() {
        return (
            <div>
                <h2>Create The Stream : </h2>
                <StreamForm onSubmit={this.onSubmit} />
            </div>

        );
    }
}

export default connect(null, {
    createStream
})(StreamCreate);