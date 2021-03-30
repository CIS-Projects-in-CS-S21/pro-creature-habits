export const SELECT_PET = 'SELECT_PET';

const selectedPetItemReducer = (state = 'ball', action) => {
	switch (action.type) {
		case SELECT_PET:
			return action.data;
		default:
			return state;
	}
}

export default selectedPetItemReducer;
