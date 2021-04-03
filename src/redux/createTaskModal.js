export const TASK_OFF = 'TASK_OFF';
export const TASK_ON = 'TASK_ON';

const modalTaskReducer = (state = false, action) => {
	switch (action.type) {
		case TASK_ON:
			return true;
		case TASK_OFF:
			return false;
		default:
			return state;
	}
}

export default modalTaskReducer;
