import { 
	GET_POSTS, 
	ERROR, 
	NEXT_POST,
	PREV_POST,
	SET_POST } from '../../actions/types';

const initialState = {
	all: [],
	currentPost: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				all: action.payload
			}
			break;
		case NEXT_POST:
			return {
				...state,
				currentPost: state.currentPost + 1
			}
		case PREV_POST:
			return {
				...state,
				currentPost: state.currentPost - 1
			}
		case SET_POST:
			return {
				...state,
				currentPost: action.payload
			}
		default:
			return state;
	}
}