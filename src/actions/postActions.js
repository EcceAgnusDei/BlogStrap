import {
		GET_POSTS, 
		ERROR, 
		NEXT_POST,
		PREV_POST,
		SET_POST } from './types.js';

export const getPosts = () => dispatch => 
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(resp => resp.json())
	.then(json => 
		dispatch({type: GET_POSTS, payload: json})
	)
	.catch(() => dispatch({type: ERROR}))

export const next = () => {
	return {type: NEXT_POST}
}

export const prev = () => {
	return {type: PREV_POST}
}

export const setPost = page => {
	return {type: SET_POST, payload: page}
}