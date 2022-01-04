import {
    CHANGE_SIGNIN_STATUS,
    GET_GAPI_INSTANCE
} from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    gapiInstance: null
};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SIGNIN_STATUS:
            return { ...state, ...action.payload };
        case GET_GAPI_INSTANCE:
            return { ...state, gapiInstance: action.payload }
        default:
            return state;
    }
}

export default authReducer;