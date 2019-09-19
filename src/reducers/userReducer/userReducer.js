import { GET_USERS, ERROR } from '../../actions/types';

const initialState = {
	all: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				all: action.payload
			}
			break;
		default:
			return state;
	}
}