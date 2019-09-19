import { GET_USERS, ERROR } from './types.js';

export const getUsers = () => dispatch =>
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => dispatch({ type: GET_USERS, payload: json}))
	.catch(() => dispatch({ type: ERROR}))