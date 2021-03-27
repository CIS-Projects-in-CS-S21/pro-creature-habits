import {achievementsList} from '../components/achievementsList'
export const ACH_PROGRESS = 'ACH_PROGRESS';
export const ACH_REWARD = 'ACH_REWARD';

const achievementsCompleteReducer = (state = achievementsList, action) => {
	switch(action.type) {
		case ACH_PROGRESS:
			let newState = {...state};
			newState[action.data].completed += 1;
			if(newState[action.data].completed >= newState[action.data].beginner.to_complete) {
				newState[action.data].beginner.complete = true;
			}
			if(newState[action.data].completed >= newState[action.data].intermediate.to_complete) {
				newState[action.data].intermediate.complete = true;
			}
			if(newState[action.data].completed >= newState[action.data].hard.to_complete) {
				newState[action.data].hard.complete = true;
			}
			return newState;
		case ACH_REWARD:
			let newState2 = {...state};

			newState2[action.data[0]][action.data[1]].reward_taken = true;
			return newState2;
		default:
			return state;
	}

}

export default achievementsCompleteReducer;
