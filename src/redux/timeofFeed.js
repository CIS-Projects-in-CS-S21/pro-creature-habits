export const TIMECHANGE = 'TIMECHANGE';

const timeofFeedReducer = (state = null, action) => {
	switch (action.type) {
		case TIMECHANGE:
			return action.data;
		default:
			return state;
	}
}

export default timeofFeedReducer;

