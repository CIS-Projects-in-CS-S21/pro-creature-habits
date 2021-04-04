export const ADD_COMP_TASK_DAILY = 'ADD_COMP_TASK_DAILY';

const completedDailyTasksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_COMP_TASK_DAILY:
			return [...state, {task_name: action.data.task_name, days: action.data.days}];
		default:
			return state;
	}
}

export default completedDailyTasksReducer;
