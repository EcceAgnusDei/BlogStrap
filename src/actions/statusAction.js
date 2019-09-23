import { ERROR, POSTS_LOADING, COMMENTS_LOADING, USERS_LOADING } from './types.js';

export const postsLoading = (status) => {
	return {
		type: POSTS_LOADING,
		payload: status
	}
}

export const commentsLoading = (status) => {
	return {
		type: COMMENTS_LOADING,
		payload: status
	}
}

export const usersLoading = (status) => {
	return {
		type: USERS_LOADING,
		payload: status
	}
}

export const error = () => {
	return {
		type: ERROR
	}
} 