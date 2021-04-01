export const CHANGE = "CHANGE";

const timeReducer = (state = null, action) => {
	switch (action.type) {
		case CHANGE:
			return action.data;
		default:
			return state;
	}
}

export default timeReducer;
