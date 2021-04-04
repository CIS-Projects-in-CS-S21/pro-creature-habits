export const HUNGERBARINCREASE = 'HUNGERBARINCREASE';
export const HUNGERBARDECREASE = 'HUNGERBARDECREASE';

const hungerbarPointReduce = (state = 10, action) => {
	switch (action.type) {
		case HUNGERBARINCREASE :
			return state + action.data;
        case HUNGERBARDECREASE :
                return state - action.data;
		default:
			return state;
	}
}

export default hungerbarPointReduce;

