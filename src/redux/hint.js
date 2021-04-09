export const CREATE_HINT = 'CREATE_HINT';


const hintReducer = (state = '' , action) => {
    switch (action.type) {
        case CREATE_HINT:
            return action.data;
        default:
            return state;
    }
}

export default hintReducer;
