import { ERROR,
	 POSTS_LOADING,
	 COMMENTS_LOADING,
	 USERS_LOADING } from '../../actions/types';

const initialState = {
	postsLoading: true,
	commentsLoading: true,
	usersLoading: true,
	error: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ERROR: 
			return {
				...state,
				error: true
			}
		break;
		case POSTS_LOADING: 
			return {
				...state,
				postsLoading: action.payload
			}
		break;
		case COMMENTS_LOADING: 
			return {
				...state,
				commentsLoading: action.payload
			}
		break;
		case USERS_LOADING: 
			return {
				...state,
				usersLoading: action.payload
			}
		break;
		default:
			return state;
	}
}