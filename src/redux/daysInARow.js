export const RESET_DAYS_ROW = 'RESET_DAYS_ROW'
export const INC_DAYS_ROW = 'INC_DAYS_ROW'

const daysInARowReducer = (state=1, action) => {
	switch(action.type) {
		case RESET_DAYS_ROW:
			return 1;
		case INC_DAYS_ROW:
			return state + 1;
		default:
			return state;
	}
}

export default daysInARowReducer;

