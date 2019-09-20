import { combineReducers } from 'redux';
import user from './userReducer/userReducer.js';
import post from './postReducer/postReducer.js';
import error from './errorReducer/errorReducer.js';
import comment from './commentReducer/commentReducer.js';

export default combineReducers({user, post, error, comment});