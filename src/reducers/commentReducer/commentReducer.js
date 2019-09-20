import { GET_POST_COMMENTS } from '../../actions/types.js';

export default (state = [], action) => {
	switch (action.type) {
		case GET_POST_COMMENTS:
			return action.payload;
			break;
		default:
			return state
	}
}