export const SET_DATE = 'SET_DATE';

const selectedDateReducer = (state = new Date(), action) => {
	switch (action.type) {
		case SET_DATE:
			return action.data;
		default:
			return state;
	}
}

export default selectedDateReducer;
