export const ADD = 'ADD';
export const FILTER_ALL_PET = 'FILTER_ALL_PET'
export const FILTER_PET = 'FILTER_PET';
//possibly add in a SELL in case we want to allow them to sell directly from their inventory

import {ItemInventory} from "../components/ItemInventory";

let defaultState = [];
defaultState.sort();

const petInventoryReducer = (state=defaultState, action) => {
	switch (action.type) {
		case ADD:
			const copyItems = [...state];
			copyItems.push(action.data);
			defaultState.push(action.data);
			return copyItems;
		case FILTER_ALL_PET:
			return defaultState
		case FILTER_PET:
			return defaultState.filter(item => ItemInventory[item].category === action.data);
		default:
			return state;
	}
}

export default petInventoryReducer;