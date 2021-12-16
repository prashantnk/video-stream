export const changeSignInStatus = (status) => {
    return {
        type: "CHANGE_SIGNIN_STATUS",
        payload: status
    };
};