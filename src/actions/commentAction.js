import { GET_POST_COMMENTS, ERROR } from './types.js';

export const getComments = postId => dispatch =>
	fetch('https://jsonplaceholder.typicode.com/comments')
	.then(resp => resp.json())
	.then(json => dispatch({
		type: GET_POST_COMMENTS,
		payload: json.filter(comment => comment.postId == postId)
	}))
	.catch(() => dispatch({type: ERROR}));