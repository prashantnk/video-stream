import React from "react";
import ReactDOM from 'react-dom';

const Modal = ({ onDismiss, header, content, actions }) => {
    return (
        ReactDOM.createPortal(
            <div className="ui dimmer modals active " onClick={onDismiss}>
                <div className="ui standard modal active" onClick={(e) => e.stopPropagation()}>
                    <i className="close icon" onClick={onDismiss}></i>
                    <div className="header">
                        {header}
                    </div>
                    <div className="content">
                        {content}
                    </div>
                    <div className="actions">
                        {actions}
                    </div>
                </div>
            </div>
            ,
            document.querySelector('#modal')
        )
    );
}

export default Modal;