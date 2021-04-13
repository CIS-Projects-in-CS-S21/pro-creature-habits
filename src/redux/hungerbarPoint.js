export const HUNGERBARINCREASE = 'HUNGERBARINCREASE';
export const HUNGERBARDECREASE = 'HUNGERBARDECREASE';

const hungerbarPointReducer = (state = 5, action) => {
	switch (action.type) {
    		case HUNGERBARINCREASE:
    		    if (state + action.data >= 10) {
    		        return 10;
    		    } else {
    		        return state + action.data;
    		    }
    		case HUNGERBARDECREASE:
    		    if (state - action.data <= 0) {
                    return 0;
                } else {
                    return state - action.data;
                }
    		default:
    			return state;
    }
}

export default hungerbarPointReducer;

