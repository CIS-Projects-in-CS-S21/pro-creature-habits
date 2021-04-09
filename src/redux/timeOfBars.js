export const TIME_CHANGE = 'TIME_CHANGE';
export const TIME_FEED_CHANGE = 'TIME_FEED_CHANGE';
export const TIME_TOY_CHANGE = 'TIME_TOY_CHANGE';
export const TIME_BATH_CHANGE = 'TIME_BATH_CHANGE';


const curr = new Date();


const timeOfBarsReducer = (state = [new Date(),new Date(),new Date(),new Date()], action) => {
	switch (action.type) {
		case TIME_FEED_CHANGE:
		    temp = [...state]
		    temp[1] = action.data;
			return temp;
		case TIME_TOY_CHANGE:
		    temp = [...state]
        	temp[2] = action.data;
        	return temp;
		case TIME_BATH_CHANGE:
		    temp = [...state]
		    temp[3] = action.data;
			return temp;
		case TIME_CHANGE:
		    temp = [...state]
        	temp[0] = action.data;
        	return temp;
		default:
			return state;
	}
}

export default timeOfBarsReducer;

