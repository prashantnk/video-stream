import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';
import history from '../../history';

const StreamEdit = (props) => {
    const id = props.match.params.id;
    const fetchStream = props.fetchStream;
    useEffect(() => {
        // console.log("called useEffect stream Edit !");
        fetchStream(id);
    }, [fetchStream, id]);

    const onSubmit = (formValues) => {
        if (props.isSignedIn) props.editStream(id, formValues);
        else props.gapiInstance.signIn();
    }
    if (!props.stream) return <>Loading!</>;
    if (props.isSignedIn && props.stream && props.stream.userId !== props.userId) {
        history.push('/');
    }
    return (
        <div >
            <h2>Edit The Stream : </h2>
            <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream, 'title', 'description')} />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        gapiInstance: state.auth.gapiInstance
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);