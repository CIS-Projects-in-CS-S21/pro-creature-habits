export const CREATE_PIN = 'CREATE_PIN';


const pinReducer = (state = 0 , action) => {
    switch (action.type) {
        case CREATE_PIN:
            return action.data;
        default:
            return state;
    }
}

export default pinReducer;
