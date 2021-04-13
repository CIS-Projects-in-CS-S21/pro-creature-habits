export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

const healthBarReducer = (state = 5, action) => {
	switch (action.type) {
        		case INCREASE:
        		    if (state + action.data >= 10) {
        		        return 10;
        		    } else {
        		        return state + action.data;
        		    }
        		case DECREASE:
        		    if (state - action.data <= 0) {
                        return 0;
                    } else {
                        return state - action.data;
                    }
        		default:
        			return state;
        }
}

export default healthBarReducer;
