import { GET_POST_COMMENTS } from '../../actions/types.js';

export const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POST_COMMENTS:
			return action.payload;
			break;
		default:
			return state
	}
}