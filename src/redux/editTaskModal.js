export const EDIT_OFF = 'EDIT_OFF';
export const EDIT_ON = 'EDIT_ON';

const editTaskReducer = (state = false, action) => {
	switch (action.type) {
		case EDIT_ON:
			return true;
		case EDIT_OFF:
			return false;
		default:
			return state;
	}
}

export default editTaskReducer;
