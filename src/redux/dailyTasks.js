export const ADD_TASK_DAILY = 'ADD_TASK_DAILY';
export const REMOVE_TASK_DAILY = 'REMOVE_TASK_DAILY';
export const EDIT_TASK_DAILY = 'EDIT_TASK_DAILY';
export const COMPLETE_DAILY_TASK = 'COMPLETE_DAILY_TASK';
export const UPDATE_DAILY_TASKS = 'UPDATE_DAILY_TASKS';

const dailyTasksReducer = (state = [], action) => {
	switch (action.type) {

		case ADD_TASK_DAILY:
			const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const date = new Date();
			const day = weekDay[date.getDay()];
			return [...state,
				{
					task_name: action.data[0],
					days: action.data[1],
					status: {
						due_today: action.data[1][day].on,
						completed: false
					}
				}];
		case REMOVE_TASK_DAILY:
			return state.filter((element, index) => action.data !== index);
		case EDIT_TASK_DAILY:
			const weekDay1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const date1 = new Date();
			const day1 = weekDay1[date1.getDay()];
			let editTasks = [...state];
			editTasks[action.data[0]].task_name = action.data[1];
			editTasks[action.data[0]].days = action.data[2];
			editTasks[action.data[0]].status = {due_today: action.data[2][day1].on, completed: false}
			return editTasks;
		case COMPLETE_DAILY_TASK:
			let completeTask = [...state];
			completeTask[action.data].status.completed = true;
			return completeTask;
		case UPDATE_DAILY_TASKS:
			const weekDay2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			const date2 = new Date();
			const day2 = weekDay2[date2.getDay()];
			let updateState = [...state];
			updateState.forEach(task => {
				task.status.due_today = task.days[day2].on;
				task.status.completed = false;
			})
			return updateState;
		default:
			return state;
	}
}

export default dailyTasksReducer;
