export const SET_INDEX = 'SET_INDEX';

const taskEditIndexReducer = (state = -1, action) => {
	switch (action.type) {
		case SET_INDEX:
			return action.data;
		default:
			return state;
	}
}

export default taskEditIndexReducer;
