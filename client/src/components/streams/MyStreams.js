import React from "react";
import { connect } from "react-redux";
import GoogleAuth from "../GoogleAuth";
import StreamList from "./StreamList";

const MyStreams = ({ isSignedIn, userId, gapiInstance }) => {
    const handleShowStream = (stream) => {
        return isSignedIn && stream.userId === userId;
    }
    if (isSignedIn === false && gapiInstance) {
        return (
            <>
                <h3>You are not signed in , Please Sign In !</h3>
                <GoogleAuth />
            </>
        );
    }
    return (
        <StreamList handleShowStream={handleShowStream} label={"My Streams : "} />
    );
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        gapiInstance: state.auth.gapiInstance
    }
}

export default connect(mapStateToProps)(MyStreams);