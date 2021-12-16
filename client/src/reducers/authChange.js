const INITIAL_STATE = {
    isSignedIn: null
};
const authChange = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        case "CHANGE_SIGNIN_STATUS":
            return { ...state, isSignedIn: action.payload };
        default:
            return state;
    }
}

export default authChange;