export const SELECT = 'SELECT';

const selectedMarketItemReducer = (state = 'ball', action) => {
	switch (action.type) {
		case SELECT:
			return action.data;
		default:
			return state;
	}
}

export default selectedMarketItemReducer;
