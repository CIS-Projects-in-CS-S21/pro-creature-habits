export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

const hungerBarReducer = (state = 10, action) => {
	switch (action.type) {
		case INCREASE:
			return state + action.data;
		case DECREASE:
			return state - action.data;
		default:
			return state;
	}
}

export default hungerBarReducer;
