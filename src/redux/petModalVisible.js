export const OFF_PET = 'OFF_PET';
export const ON_PET = 'ON_PET'

const petMVR = (state = false, action) => {
	switch (action.type) {
		case ON_PET:
			return true;
		case OFF_PET:
			return false;
		default:
			return state;
	}
}

export default petMVR;
