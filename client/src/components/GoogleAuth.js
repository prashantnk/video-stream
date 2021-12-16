import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeSignInStatus } from '../actions';

const GoogleAuth = (props) => {
    const [signedIn, setSignIn] = useState(null);
    const [auth, setAuth] = useState(null);
    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                clientId: "582152842626-9r14ipembq2t6aoumibhvm9sph6msum4.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                setAuth(window.gapi.auth2.getAuthInstance());
            });
        });
    }, []);

    useEffect(() => {
        if (!auth) return;
        // console.log(auth);
        setSignIn(auth.isSignedIn.get());
        auth.isSignedIn.listen(onSignInChange);
    }, [auth]);

    const onSignInChange = (signIn) => {
        setSignIn(signIn);
        changeSignInStatus(signIn);
    }

    const forSignOut = () => {
        auth.signOut().catch((err) => {
            console.log(err.error);
        });
    }
    const forSignIn = () => {
        auth.signIn().catch((err) => {
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