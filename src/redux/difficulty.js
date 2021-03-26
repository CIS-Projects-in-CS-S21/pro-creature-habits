export const EASY = 'EASY';
export const MEDIUM = 'MEDIUM';
export const HARD = 'HARD';

const difficultyReducer = (state = 'easy', action) => {
	switch (action.type) {
		case EASY:
			return 'easy';
		case MEDIUM:
			return 'medium';
		case HARD:
			return 'hard';
		default:
			return state;
	}
}

export default difficultyReducer;
