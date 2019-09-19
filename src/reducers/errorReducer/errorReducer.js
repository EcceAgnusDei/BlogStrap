import { ERROR } from '../../actions/types';

export default (state = false, action) => {
	switch (action.type) {
		case 'ERROR': 
			return true
			break;
		default:
			return false
	}
}