export const ACH_ON = 'ACH_ON';
export const ACH_OFF = 'ACH_OFF';

const achievementsVisibleReducer = (state = false, action) => {
	switch (action.type) {
		case ACH_ON:
			return true;
		case ACH_OFF:
			return false;
		default:
			return state;
	}
}

export default achievementsVisibleReducer;
