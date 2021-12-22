import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { changeSignInStatus } from '../actions';

const GoogleAuth = ({ signedIn, changeSignInStatus }) => {
    const authRef = useRef();
    const onSignInChange = useCallback((signIn) => {
        if (signIn) changeSignInStatus(true, authRef.current.currentUser.get().getId());
        else changeSignInStatus(false, null);
    }, [changeSignInStatus]);

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                clientId: "582152842626-9r14ipembq2t6aoumibhvm9sph6msum4.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                authRef.current = window.gapi.auth2.getAuthInstance();
                onSignInChange(authRef.current.isSignedIn.get());
                authRef.current.isSignedIn.listen(onSignInChange);
            });
        });
    }, [onSignInChange]);



    const forSignOut = () => {
        authRef.current.signOut().catch((err) => {
            console.log(err.error);
        });
    }

    const forSignIn = () => {
        authRef.current.signIn().catch((err) => {
            console.log(err.error);
        });
    }

    const renderAuthButton = () => {
        if (signedIn === null) {
            return null;
        }
        else if (signedIn === true) {
            // console.log(auth.currentUser.get().getBasicProfile());
            return (
                <button className="ui google plus button" onClick={forSignOut}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button className="ui google plus button" onClick={forSignIn}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    return (
        <div className="item">
            {renderAuthButton()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { changeSignInStatus })(GoogleAuth);