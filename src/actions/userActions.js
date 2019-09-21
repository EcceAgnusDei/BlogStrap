import { GET_USERS, ERROR, USERS_LOADING } from './types.js';
import { usersLoading } from './statusAction.js';

export const getUsers = () => dispatch => {
	dispatch(usersLoading(true));
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		dispatch({ type: GET_USERS, payload: json});
		dispatch(usersLoading(false));
	})
	.catch(() => {
		dispatch({ type: ERROR});
		dispatch(usersLoading(false));
	});
}