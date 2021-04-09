export const FIRST = 'FIRST';
//export const AFTER = 'AFTER';

const loginReducer = (state = 1, action) => {
    switch (action.type) {
        case FIRST:
            return 0;
        default:
            return state;
    }
}

export default loginReducer;
