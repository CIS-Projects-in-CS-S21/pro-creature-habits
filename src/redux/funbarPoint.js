export const FUNBARINCREASE = 'FUNBARINCREASE';
export const FUNBARDECREASE = 'FUNBARDECREASE';

const funbarPointReducer = (state = 5, action) => {
	switch (action.type) {
        case FUNBARINCREASE:
            if (state + action.data >= 10) {
            	return 10;
            } else {
            	return state + action.data;
            }
            case FUNBARDECREASE:
            	if (state - action.data <= 0) {
                    return 0;
                } else {
                    return state - action.data;
                }
            	default:
            		return state;
            }
}

export default funbarPointReducer;