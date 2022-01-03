import {
    CHANGE_SIGNIN_STATUS,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './types';
import history from '../history';
import streams from '../apis/streams';
export const changeSignInStatus = (isSignedIn, userId) => {
    return {
        type: CHANGE_SIGNIN_STATUS,
        payload: {
            isSignedIn,
            userId
        }
    };
};
export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get('/streams', {
            params: {
                id
            }
        });
        dispatch({ type: FETCH_STREAM, payload: response.data[0] });

    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const streamValues = { ...formValues, userId };
        const response = await streams.post('/streams', streamValues);
        dispatch({ type: CREATE_STREAM, payload: response.data });
        history.push("/");
    }
}
export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: FETCH_STREAMS, payload: response.data });
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({ type: EDIT_STREAM, payload: response.data });
        history.push("/");
    }
}
export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({ type: DELETE_STREAM, payload: id });
    }
}