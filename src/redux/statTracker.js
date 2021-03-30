import {StatsData} from "../components/StatsData";
export const INCREMENT_STAT = 'INCREMENT_STAT';
export const RESET_STAT = 'RESET_STAT';
export const SET_STAT = 'SET_STAT';
export const ADD_TO_STAT = 'ADD_TO_STAT';

const statTrackerReducer = (state=StatsData, action) =>{
	switch (action.type){
		case INCREMENT_STAT:
			let newStatsInc = {...state};
			newStatsInc[action.data].count += 1;
			return newStatsInc;
		case RESET_STAT:
			let newStatsRes = {...state};
			newStatsRes[action.data].count = 0;
			return newStatsRes;
		case SET_STAT:
			let newStatsSet = {...state};
			newStatsSet[action.data[0]].count = action.data[1];
			return newStatsSet;
		case ADD_TO_STAT:
			let newStatsAdd = {...state};
			newStatsAdd[action.data[0]].count += action.data[1];
			return newStatsAdd;
		default:
			return state;
	}
}

export default statTrackerReducer;
