export const BUY = 'BUY';

const balanceReducer = (state = 100, action) => {
	switch (action.type) {
		case BUY:
			return state - action.data;
		default:
			return state;
	}
}

export default balanceReducer;
