export const STAT_ON = 'STAT_ON';
export const STAT_OFF = 'STAT_OFF';

const statsVisibleReducer = (state = false, action) => {
	switch (action.type) {
		case STAT_ON:
			return true;
		case STAT_OFF:
			return false;
		default:
			return state;
	}
}

export default statsVisibleReducer;
