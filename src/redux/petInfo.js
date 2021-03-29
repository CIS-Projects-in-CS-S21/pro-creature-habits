export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';

let defaultState = ["name","dog"];


const petInfoObj = (state = defaultState, action) => {


	switch (action.type) {
    		case CHANGE:
    			return action.changes;
    	    case CHANGENAME:
    	        let copy = state;
    	        copy[0] = action.changes;
    	        return copy;
    		default:
    			return state;
    	}
}

export default petInfoObj;
