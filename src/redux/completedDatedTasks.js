export const ADD_COMP_TASK_ONE = 'ADD_COMP_TASK_ONE';

const completedDatedTasksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_COMP_TASK_ONE:
			return [...state, {task_name: action.data.task_name, date: action.data.date}];
		default:
			return state;
	}
}

export default completedDatedTasksReducer;
