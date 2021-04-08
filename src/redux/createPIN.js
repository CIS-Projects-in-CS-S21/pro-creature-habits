export const CREATE_PIN = 'CREATE_PIN';

/**
 * Reducer for the state of CREATE_PIN. Stores the hint input by user
 * @method pinReducer
 * @return {String} state of CREATE_PIN
 */
const pinReducer = (state = '' , action) => {
    switch (action.type) {
        case CREATE_PIN:
            return action.data;
        default:
            return state;
    }
}

export default pinReducer;
