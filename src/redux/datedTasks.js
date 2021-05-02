import {UPDATE_DAILY_TASKS} from "./dailyTasks";

export const ADD_TASK_ONE = 'ADD_TASK_ONE';
export const REMOVE_TASK_ONE = 'REMOVE_TASK_ONE';
export const EDIT_TASK_ONE = 'EDIT_TASK_ONE';
export const COMPLETED_TASK_ONE = 'COMPLETE_TASK_ONE';
export const UPDATE_DATED_TASKS = 'UPDATE_DATED_TASKS';

const datedTasksReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TASK_ONE:
			return [...state,
				{
					task_name: action.data[0],
					date: action.data[1],
					completed: false,
					difficulty: action.data[2],
					isLate: false
				}];
		case REMOVE_TASK_ONE:
			return state.filter((element, index) => action.data !== index);
		case COMPLETED_TASK_ONE:
			let completeState = [...state];
			completeState[action.data].completed = true;
			completeState[action.data].isLate= false;
			return completeState;
		case EDIT_TASK_ONE:
			let editTasks = [...state];
			editTasks[action.data[0]].task_name = action.data[1];
			editTasks[action.data[0]].date = action.data[2];
			editTasks[action.data[0]].difficulty = action.data[3];
			return editTasks;
		case UPDATE_DATED_TASKS:
			let updateState = [...state];
			const today = new Date();

			updateState.forEach(task => {
				const assignedDate = new Date(task.date);
				console.log("assigned" + assignedDate);
				const lateDate = new Date(assignedDate)
				console.log("lateDate" + lateDate);
				console.log("today" + today);
				lateDate.setDate(lateDate.getDate() + 1)
				if(today > (lateDate)){
					task.isLate = true;
				}
			})
			return updateState;
		default:
			return state;
	}
}

export default datedTasksReducer;
