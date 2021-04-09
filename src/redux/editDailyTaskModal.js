export const DAILY_EDIT_ON = 'DAILY_EDIT_ON';
export const DAILY_EDIT_OFF = 'DAILY_EDIT_OFF';

const editDailyReducer = (state=false, action) => {
	switch (action.type) {
		case DAILY_EDIT_ON:
			return true;
		case DAILY_EDIT_OFF:
			return false;
		default:
			return state;
	}
}

export default editDailyReducer;
