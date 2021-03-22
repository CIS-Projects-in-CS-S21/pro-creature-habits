export const OFF = 'OFF';
export const ON = 'ON'

const modalVisibleReducer = (state = false, action) => {
	switch (action.type) {
		case ON:
			return true;
		case OFF:
			return false;
		default:
			return state;
	}
}

export default modalVisibleReducer;
