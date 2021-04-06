export const BUY = 'BUY';
export const REWARD = 'REWARD';
export const DEBUG_REVERT = "DEBUG_REVERT";

const balanceReducer = (state = 100, action) => {
	switch (action.type) {
		case BUY:
			return state - action.data;
		case REWARD:
			return state + action.data;


		// reverts coin balance back to 100 for debug purposes
		case DEBUG_REVERT:
			state = 100;
			return state;
		default:
			return state;
	}
}

export default balanceReducer;
