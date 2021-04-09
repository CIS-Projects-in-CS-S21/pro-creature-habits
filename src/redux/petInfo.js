export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';
export const CHANGE_EMOTION = 'CHANGE_EMOTION';

let defaultState = ["name","dog","happy"];


const petInfoObj = (state = defaultState, action) => {
    let copy = [...state];

	switch (action.type) {
    		case CHANGE:
    			return action.changes;
    	    case CHANGENAME:
    	        copy[0] = action.changes;
    	        return copy;
    	    case CHANGE_EMOTION:
    	        copy[2] = action.changes;
    	        return copy;
    		default:
    			return state;
    	}
}

export default petInfoObj;
