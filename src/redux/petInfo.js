export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';
export const CHANGE_EMOTION = 'CHANGE_EMOTION';

const defaultState = {
  name: "name",
  type: "dog",
  emote: "happy"
}

//let defaultState = ["name","dog","happy"];


const petInfoObj = (state = defaultState, action) => {
    //let copy = [...state];

	switch (action.type) {
    		case CHANGE:
    			return action.changes;
    	    case CHANGENAME:
    	        state.name = action.changes;
    	        return state.name;
    	    case CHANGE_EMOTION:
    	        state.emote = action.changes;
    	        return emote;
    		default:
    			return state;
    	}
}

export default petInfoObj;
