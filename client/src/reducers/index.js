import { combineReducers } from 'redux';
import authChange from './authChange';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authChange,
    form: formReducer
});