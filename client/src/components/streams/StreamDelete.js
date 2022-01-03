import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
    const onDismiss = () => {
        history.push('/')
    }
    const modalActions = (
        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>
    );
    return (
        <div>
            <Modal
                actions={modalActions}
                onDismiss={onDismiss}
                content={"Are you sure , You want to delete this stream ?"}
                header={"Stream Delete"}
            />
        </div>
    );
}

export default StreamDelete;