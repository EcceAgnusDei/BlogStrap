import { GET_POST_COMMENTS, ERROR } from './types.js';
import { commentsLoading } from './statusAction.js';

export const getComments = postId => dispatch => {
	dispatch(commentsLoading(true))
	fetch('https://jsonplaceholder.typicode.com/comments')
	.then(resp => resp.json())
	.then(json => {
		dispatch({
			type: GET_POST_COMMENTS,
			payload: json.filter(comment => comment.postId == postId)
		});
		dispatch(commentsLoading(false));
	})
	.catch(() => {
		dispatch({type: ERROR});
		dispatch(commentsLoading(false));
	});
}