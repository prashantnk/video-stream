import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeSignInStatus, getGapiInstance } from '../actions';

const GoogleAuth = ({ signedIn, changeSignInStatus, gapiInstance, getGapiInstance }) => {
    useEffect(() => {
        if (!gapiInstance) return;
        const onSignInChange = (signIn) => {
            if (!gapiInstance) return;
            if (signIn) changeSignInStatus(true, gapiInstance.currentUser.get().getId());
            else changeSignInStatus(false, null);
        }
        onSignInChange(gapiInstance.isSignedIn.get());
        gapiInstance.isSignedIn.listen(onSignInChange);
    }, [changeSignInStatus, gapiInstance]);

    useEffect(() => {
        getGapiInstance();
    }, [getGapiInstance]);


    const forSignOut = () => {
        gapiInstance.signOut().catch((err) => {
            console.log(err.error);
        });
    }

    const forSignIn = () => {
        gapiInstance.signIn().catch((err) => {
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
        signedIn: state.auth.isSignedIn,
        gapiInstance: state.auth.gapiInstance
    };
};

export default connect(mapStateToProps, { changeSignInStatus, getGapiInstance })(GoogleAuth);