import { CHANGE_THEME } from './types';
import themes from '../libs/themes.js';

export const changeTheme = (theme) => {
	return {
		type: CHANGE_THEME,
		payload: themes.find(item => item.name === theme)
	}
}