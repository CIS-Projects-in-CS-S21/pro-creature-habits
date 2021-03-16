export const CHANGE = 'CHANGE';

let defaultState = ["name","image"];


const petInfoObj = (state = defaultState, action) => {


	switch (action.type) {
    		case CHANGE:
    			state = action.changes;
    			return state;
    		default:
    			return state;
    	}
}

export default petInfoObj;
