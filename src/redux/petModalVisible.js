export const OFF_PET = 'OFF_PET';
export const ON_PET = 'ON_PET'

const petMVR = (state = "off", action) => {
	switch (action.type) {
		case ON_PET:
		    return action.data;
		case OFF_PET:
			return "off";
		default:
			return state;
	}
}

export default petMVR;
