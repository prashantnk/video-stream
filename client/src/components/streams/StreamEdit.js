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
        props.editStream(id, formValues);
    }

    if (!props.isSignedIn) {
        history.push('/');
    }
    if (!props.stream) return <>Loading!</>;
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
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);