import { GET_POST_COMMENTS } from '../../actions/types.js';
import commentReducer from './commentReducer';

describe('Comment Reducer' , () => {

	it('Should return default state', () => {
		const newState = commentReducer(undefined, {});
		expect(newState).toEqual([]);
	})

	it('It should return payload when receive GET_POSTS_COMMENTS type', () => {
		const comments = [{id: 1}, {id: 2}];
		const newState = commentReducer(undefined, {
			type: GET_POST_COMMENTS,
			payload: comments
		})
		expect(newState).toEqual(comments);
	})
})