import { ERROR, LOADING, LOADED } from '../../actions/types';

const initialState = {
	loading: false,
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
			case LOADING: 
			return {
				...state,
				loading: true
			}
			break;
			case LOADED: 
			return {
				...state,
				loading: false
			}
			break;
		default:
			return state;
	}
}