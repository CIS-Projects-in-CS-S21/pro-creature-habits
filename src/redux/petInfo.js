export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';
export const CHANGE_EMOTION = 'CHANGE_EMOTION';

const defaultState = {
  name: "name",
  type: "dog",
  emote: "neutral"
}


const petInfoObj = (state = defaultState, action) => {
    let copy = {...state};

	switch (action.type) {
    		case CHANGE:
    			return action.changes;
    	    case CHANGENAME:
                copy.name = action.changes;
    	        return copy;
    	    case CHANGE_EMOTION:
    	        copy.emote = action.changes;
    	        return copy;
    		default:
    			return state;
    	}
}

export default petInfoObj;
