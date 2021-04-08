export const FUNBARINCREASE = 'FUNBARINCREASE';
export const FUNBARDECREASE = 'FUNBARDECREASE';

const funbarPointReducer = (state = 5, action) => {
	switch (action.type) {
		case FUNBARINCREASE :
			return state + action.data;
        case FUNBARDECREASE :
                return state - action.data;
		default:
			return state;
	}
}

export default funbarPointReducer;