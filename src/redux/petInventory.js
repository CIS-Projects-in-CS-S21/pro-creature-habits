export const ADD = 'ADD';
export const FILTER_ALL_PET = 'FILTER_ALL_PET'
export const FILTER_PET = 'FILTER_PET';
export const SELECTED = 'SELECTED';
//possibly add in a SELL in case we want to allow them to sell directly from their inventory

import {ItemInventory} from "../components/ItemInventory";

let boughtItems = JSON.parse(JSON.stringify(ItemInventory));
for (const [key, value] of Object.entries(boughtItems)) {
    boughtItems[key].bought = 0;
    boughtItems[key].show = false;
    boughtItems[key].wear = false;
}
const petInventoryReducer = (state=boughtItems, action) => {
    console.log("in reducer "+action.data)
    for (const [key, value] of Object.entries(state)) {
            console.log(key+" :? "+value.bought)
        }

let copy = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case ADD:
		    console.log(action.data);
		    copy[action.data].bought = copy[action.data].bought + 1;
		    copy[action.data].show = true;
		    return copy;
		case FILTER_ALL_PET:
		    for (const [key, value] of Object.entries(copy)) {
		        if (copy[key].bought != 0) {
		            copy[key].show = true;
		        }

		    }
		    console.log("trying to filter pet for all")
			return copy;
		case FILTER_PET:
		    console.log("trying to filter pet for: "+action.data)
            for (const [key, value] of Object.entries(copy)) {
                if (copy[key].category != action.data) {
                    copy[key].show = false;
                } else if (copy[key].bought != 0) {
                    copy[key].show = true;
                } else {
                    copy[key].show = false;
                }
            }
			return copy;
	    case SELECTED:
	        if (action.data == "select_food") {
                		    copy[action.thing].bought = copy[action.thing].bought - 1;
                		    if (copy[action.thing].bought != 0) {copy[action.thing].show = true;}
                		    else {copy[action.thing].show = false;}
	        } else if (action.data == "select_toys") {
                copy[action.thing].wear = true;
	        } else {
                copy[action.thing].wear = true;
	        }
	        return copy;
		default:
			return state;
	}
}

export default petInventoryReducer;