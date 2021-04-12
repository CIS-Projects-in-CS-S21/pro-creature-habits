export const ADD_TASK_ONE = 'ADD_TASK_ONE';
export const REMOVE_TASK_ONE = 'REMOVE_TASK_ONE';
export const EDIT_TASK_ONE = 'EDIT_TASK_ONE';
export const COMPLETED_TASK_ONE = 'COMPLETE_TASK_ONE';

const datedTasksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TASK_ONE:
			return [...state,
				{
					task_name: action.data[0],
					date: action.data[1],
					completed: false,
					difficulty: action.data[2]
				}];
		case REMOVE_TASK_ONE:
			return state.filter((element, index) => action.data !== index);
		case COMPLETED_TASK_ONE:
			let completeState = [...state];
			completeState[action.data].completed = true;
			return completeState;
		case EDIT_TASK_ONE:
			let editTasks = [...state];
			editTasks[action.data[0]].task_name = action.data[1];
			editTasks[action.data[0]].date = action.data[2];
			return editTasks;
		default:
			return state;
	}
}

export default datedTasksReducer;
