export const DAILY = 'DAILY';
export const DATED = 'DATED';

const taskFilterReducer = (state='daily', action) => {
	switch (action.type) {
		case DAILY:
			return 'daily';
		case DATED:
			return 'dated';
		default:
			return state;
	}
}

export default taskFilterReducer;
