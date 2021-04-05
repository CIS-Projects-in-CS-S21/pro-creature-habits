export const TIMEFEEDCHANGE = 'TIMEFEEDCHANGE';

const timeofFeedReducer = (state = null, action) => {
	switch (action.type) {
		case TIMEFEEDCHANGE:
		    console.log("testing time "+ action.data);
			return action.data;
		default:
			return state;
	}
}

export default timeofFeedReducer;

