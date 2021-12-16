import { combineReducers } from 'redux';
import authChange from './authChange';
export default combineReducers({
    auth: authChange
});