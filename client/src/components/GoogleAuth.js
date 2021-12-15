import React, { useEffect } from "react";

const GoogleAuth = () => {
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "582152842626-9r14ipembq2t6aoumibhvm9sph6msum4.apps.googleusercontent.com",
                scope: "email"
            });
        });
    }, []);
    return (
        <div>Google auth</div>
    );
};

export default GoogleAuth;