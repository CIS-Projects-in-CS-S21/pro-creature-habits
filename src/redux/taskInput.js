export const SET_TASK_TEXT = 'SET_TASK_TEXT';

const taskInputReducer = (state = -1, action) => {
	switch (action.type) {
		case SET_TASK_TEXT:
			return action.data;
		default:
			return state;
	}
}

export default taskInputReducer;
