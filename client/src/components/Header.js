import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <div className="ui header">Video Streamer | All Streams</div>
            </Link>
            <div className="right menu">
                <Link to="/streams/my" className="item">
                    <div className="ui header">My Streams</div>
                </Link>
                <GoogleAuth />
            </div>
        </div >
    );
};

export default Header;