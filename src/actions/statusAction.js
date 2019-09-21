import { ERROR, LOADING, LOADED } from './types.js';

export const loading = () => {
	return {
		type: LOADING
	}
}

export const loaded = () => {
	return {
		type: LOADED
	}
}

export const error = () => {
	return {
		type: ERROR
	}
} 