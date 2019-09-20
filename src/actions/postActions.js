import {
		GET_POSTS, 
		ERROR, 
		NEXT_POST,
		PREV_POST,
		SET_POST,
		GET_BY_USER } from './types.js';

export const getPosts = () => dispatch => 
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(resp => resp.json())
	.then(json => 
		dispatch({type: GET_POSTS, payload: json.reverse()})
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

export const getByUser = id => dispatch => 
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(resp => resp.json())
	.then(json => 
		dispatch({type: GET_POSTS, 
			payload: json.filter(post => post.userId == id).reverse()
		})
	)
	.catch(() => dispatch({type: ERROR}))