export const EASY_DIFFICULTY = 'EASY_DIFFICULTY';
export const MEDIUM_DIFFICULTY = 'MEDIUM_DIFFICULTY';
export const HARD_DIFFICULTY = 'HARD_DIFFICULTY';



const difficultyCheckedReducer = (state="easy", action) => {
    switch (action.type) {
        case EASY_DIFFICULTY:
            return 'easy';
        case MEDIUM_DIFFICULTY:
            return 'medium';
        case HARD_DIFFICULTY:
            return 'hard';
        default:
            return state;
    }
}

export default difficultyCheckedReducer;
