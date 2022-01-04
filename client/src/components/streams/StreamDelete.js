import React, { useEffect } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Redirect } from 'react-router-dom';

const StreamDelete = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const stream = useSelector((state) => {
        return state.streams[id];
    });
    const userId = useSelector(state => state.auth.userId);
    const gapiInstance = useSelector(state => state.auth.gapiInstance);

    useEffect(() => {
        dispatch(fetchStream(id));
    }, [dispatch, id]);

    const onDismiss = () => {
        history.goBack();
    }
    const onDeleteClick = () => {
        if (userId) dispatch(deleteStream(id));
        else gapiInstance.signIn();
    }
    const modalActions = () =>
        <>
            <button onClick={onDeleteClick} className="ui button negative">Delete</button>
            <button onClick={onDismiss} className="ui button">Cancel</button>
        </>
        ;
    const modalProps = {
        actions: modalActions(),
        onDismiss: onDismiss,
        content: "Are you sure , You want to delete this stream ?",
        header: (stream ? stream.title : "Stream Delete")
    };
    if (stream && userId && stream.userId !== userId) {
        return <Redirect to={"/"} />
    }
    return (
        <div>
            <Modal {...modalProps} />
        </div>
    );
}

export default StreamDelete;