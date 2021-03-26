export const FILTER_CHANGE = 'FILTER_CHANGE';

const achievementFilterReducer = (state='beginner', action) => {
	switch (action.type) {
		case FILTER_CHANGE:
			return action.data;
		default:
			return state;
	}
}

export default achievementFilterReducer;
