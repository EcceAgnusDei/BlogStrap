import { combineReducers } from 'redux';
import user from './userReducer/userReducer.js';
import post from './postReducer/postReducer.js';
import status from './statusReducer/statusReducer.js';
import comment from './commentReducer/commentReducer.js';
import theme from './themeReducer/themeReducer.js';

export default combineReducers({user, post, status, comment, theme});