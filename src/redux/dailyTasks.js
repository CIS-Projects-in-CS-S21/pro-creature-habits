export const ADD_TASK_DAILY = 'ADD_TASK_DAILY';
export const REMOVE_TASK_DAILY = 'REMOVE_TASK_DAILY';
export const EDIT_TASK_DAILY = 'EDIT_TASK_DAILY';

const dailyTasksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TASK_DAILY:
			return [...state, {task_name: action.data[0], days: action.data[1]}];
		case REMOVE_TASK_DAILY:
			return state.filter((element, index) => action.data !== index);
		case EDIT_TASK_DAILY:
			let editTasks = [...state];
			editTasks[action.data[0]].task_name = action.data[1];
			editTasks[action.data[0]].days = action.data[2];
			return editTasks;
		default:
			return state;
	}
}

export default dailyTasksReducer;
