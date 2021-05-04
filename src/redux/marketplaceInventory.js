export const FILTER_ALL = 'FILTER_ALL'
export const FILTER = 'FILTER';

import {ItemInventory} from "../components/ItemInventory";

let defaultState = Object.keys(ItemInventory);


const marketplaceInventoryReducer = (state=defaultState, action) => {
	switch (action.type) {
		case FILTER_ALL:
			return defaultState
		case FILTER:
			return defaultState.filter(item => ItemInventory[item].category === action.data);
		default:
			return state;
	}
}

export default marketplaceInventoryReducer;
