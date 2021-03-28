export const CHANGE = 'CHANGE';

let defaultState = ["name","dog"];


const petInfoObj = (state = defaultState, action) => {


	switch (action.type) {
    		case CHANGE:
    			return action.changes;
    		default:
    			return state;
    	}
}

export default petInfoObj;
