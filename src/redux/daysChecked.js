export const TOGGLE_DAY = 'TOGGLE_DAY';
export const RESET_DAYS = 'RESET_DAYS';

const days = {
	Sunday: {on: true},
	Monday: {on: true},
	Tuesday: {on: true},
	Wednesday: {on: true},
	Thursday: {on: true},
	Friday: {on: true},
	Saturday: {on: true},
}

const daysCheckedReducer = (state=days, action) => {
	switch (action.type) {
		case TOGGLE_DAY:
			let newDays = {...state};
			newDays[action.data].on = !newDays[action.data].on;
			return newDays
		case RESET_DAYS:
			return {
				Sunday: {on: true},
				Monday: {on: true},
				Tuesday: {on: true},
				Wednesday: {on: true},
				Thursday: {on: true},
				Friday: {on: true},
				Saturday: {on: true},
			};
		default:
			return state;
	}
}

export default daysCheckedReducer;
