export const HYGIENEBARINCREASE = 'HYGIENEBARINCREASE';
export const HYGIENEBARDECREASE = 'HYGIENEBARDECREASE';

const hygienebarPointReducer = (state = 5, action) => {
    console.log("hygiene "+state)
	switch (action.type) {
		case HYGIENEBARINCREASE :
			return state + action.data;
        case HYGIENEBARDECREASE :
                return state - action.data;
		default:
			return state;
	}
}

export default hygienebarPointReducer;