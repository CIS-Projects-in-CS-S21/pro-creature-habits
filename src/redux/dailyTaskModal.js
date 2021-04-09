export const DAILY_TASK_OFF = 'DAILY_TASK_OFF';
export const DAILY_TASK_ON = 'DAILY_TASK_ON'

const dailyTaskModalReducer = (state = false, action) => {
	switch (action.type) {
		case DAILY_TASK_ON:
			return true;
		case DAILY_TASK_OFF:
			return false;
		default:
			return state;
	}
}

export default dailyTaskModalReducer;
