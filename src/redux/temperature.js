export const SET_COLD = 'SET_COLD';
export const SET_MILD = 'SET_MILD';
export const SET_HOT = 'SET_HOT';

const temperatureReducer = (state='Mild', action) => {
	switch (action.type) {
		case SET_COLD:
			return 'Cold';
		case SET_MILD:
			return 'Mild';
		case SET_HOT:
			return 'Hot';
		default:
			return state;
	}
}

export default temperatureReducer;
