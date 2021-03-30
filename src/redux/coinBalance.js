export const BUY = 'BUY';
export const REWARD = 'REWARD';

const balanceReducer = (state = 100, action) => {
	switch (action.type) {
		case BUY:
			return state - action.data;
		case REWARD:
			return state + action.data;
		default:
			return state;
	}
}

export default balanceReducer;
