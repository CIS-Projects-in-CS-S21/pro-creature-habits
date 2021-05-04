export const INCREASE_HEALTH = 'INCREASE_HEALTH';
export const DECREASE_HEALTH = 'DECREASE_HEALTH';

const healthBarReducer = (state = 5, action) => {
	switch (action.type) {
        		case INCREASE_HEALTH:
        		    if (state + action.data >= 10) {
        		        return 10;
        		    } else {
        		        return state + action.data;
        		    }
        		case DECREASE_HEALTH:
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
