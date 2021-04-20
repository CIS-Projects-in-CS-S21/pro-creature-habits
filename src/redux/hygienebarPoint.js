export const HYGIENEBARINCREASE = 'HYGIENEBARINCREASE';
export const HYGIENEBARDECREASE = 'HYGIENEBARDECREASE';

const hygienebarPointReducer = (state = 5, action) => {
	switch (action.type) {
		case HYGIENEBARINCREASE :
		    console.log("increasing")
			if (state + action.data >= 10) {
                return 10;
            } else {
                return state + action.data;
            }
        case HYGIENEBARDECREASE :
            if (state - action.data <= 0) {
                return 0;
            } else {
                return state - action.data;
            }
		default:
			return state;
	}
}

export default hygienebarPointReducer;