import { CHANGE_SIGNIN_STATUS } from './types';
export const changeSignInStatus = (isSignedIn, userId) => {
    return {
        type: CHANGE_SIGNIN_STATUS,
        payload: {
            isSignedIn,
            userId
        }
    };
};