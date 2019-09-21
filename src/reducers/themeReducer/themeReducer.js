import { CHANGE_THEME } from '../../actions/types.js';

const initialState = {
	primary: 'primary',
	secondary: 'secondary'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
				primary: action.payload.primary,
				secondary: action.payload.secondary
			}
			break;
		default:
			return state;
	}
}