export const SET_IMG = 'SET_IMG';

const weatherImgReducer = (state='01d', action) => {
	switch (action.type) {
		case SET_IMG:
			return action.data;
		default:
			return state;
	}
}

export default weatherImgReducer;
