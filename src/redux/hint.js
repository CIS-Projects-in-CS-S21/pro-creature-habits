export const CREATE_HINT = 'CREATE_HINT';

/**
 * Reducer for the state of CREATE_HINT. Stores the hint input by user
 * @method hintReducer
 * @return {String} state of CREATE_HINT
 */
const hintReducer = (state = '' , action) => {
    switch (action.type) {
        case CREATE_HINT:
            return action.data;
        default:
            return state;
    }
}

export default hintReducer;
