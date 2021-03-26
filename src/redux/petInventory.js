export const ADD = 'ADD';
export const FILTER_ALL_PET = 'FILTER_ALL_PET'
export const FILTER_PET = 'FILTER_PET';
//possibly add in a SELL in case we want to allow them to sell directly from their inventory

import {ItemInventory} from "../components/ItemInventory";

let test = [];
test.sort();
let currentFilter = "All";

const petInventoryReducer = (state=test, action) => {
	switch (action.type) {
		case ADD:
			test.push(action.data);
			return test; //.filter(item => currentFilter === action.data);
		case FILTER_ALL_PET:
			return test
		case FILTER_PET:
		    currentFilter = action.data;
			return test.filter(item => ItemInventory[item].category === action.data);
		default:
			return state;
	}
}

export default petInventoryReducer;