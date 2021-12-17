import { CHANGE_SIGNIN_STATUS } from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};
const authChange = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SIGNIN_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export default authChange;