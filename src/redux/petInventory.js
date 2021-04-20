export const ADD = 'ADD';
export const FILTER_ALL_PET = 'FILTER_ALL_PET'
export const FILTER_PET = 'FILTER_PET';
export const SELECTED = 'SELECTED';
export const EAT = 'EAT';
//possibly add in a SELL in case we want to allow them to sell directly from their inventory

import {ItemInventory} from "../components/ItemInventory";

let boughtItems = JSON.parse(JSON.stringify(ItemInventory));
for (const [key] of Object.entries(boughtItems)) {
    boughtItems[key].bought = 0;
    boughtItems[key].show = false;
    boughtItems[key].wear = false;
}

let currentFilter = "all";

const petInventoryReducer = (state=boughtItems, action) => {

let copy = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case ADD:
		    copy[action.data].bought = copy[action.data].bought + 1;
		    if (copy[action.data].category == currentFilter || currentFilter == "all") {
		        copy[action.data].show = true;
		    } else {
		        copy[action.data].show = false;
		    }
		    return copy;
		case FILTER_ALL_PET:
		    currentFilter = "all";
		    for (const [key, value] of Object.entries(copy)) {
		        if (copy[key].bought != 0) {
		            copy[key].show = true;
		        }
		    }
			return copy;
		case FILTER_PET:
		    currentFilter = action.data;
		    console.log("trying to filter pet for: "+action.data)
            for (const [key, value] of Object.entries(copy)) {
                if (copy[key].category != action.data) {
                    copy[key].show = false;
                } else if (copy[key].bought !== 0) {
                    copy[key].show = true;
                } else {
                    copy[key].show = false;
                }
            }
			return copy;
	    case SELECTED:
	        if (action.data == "select_food") {
                copy[action.thing].bought = copy[action.thing].bought - 1;
                copy[action.thing].wear = true;
                if (copy[action.thing].bought != 0) {
                    copy[action.thing].show = true;
                }
                else {
                    copy[action.thing].show = false;
                }
	        } else if (action.data == "select_toys") {
	            for (const [key] of Object.entries(copy)) {
                    if (copy[key].name.includes("ball")) {
                        copy[key].wear = false;
                    }
                }
                copy[action.thing].wear = true;
	        } else if (action.data === "select_grooming"){
				copy[action.thing].bought = copy[action.thing].bought - 1;
				//copy[action.thing].wear = true;
				if (copy[action.thing].bought !== 0) {copy[action.thing].show = true;}
				else {copy[action.thing].show = false;}
	        } else {
	            let type = "hat";
                 if (action.thing.includes('shirt')) {
                    type = "shirt"
                 } else if (action.thing.includes('shoes')) {
                    type = "shoes";
                 }
                 for (const [key] of Object.entries(copy)) {
                     if (copy[key].name.includes(type)) {
                         copy[key].wear = false;
                     }
                 }
                 copy[action.thing].wear = true;
             }
	        return copy;
	        case EAT:
	            copy[action.thing].wear = false;
	            return copy;
		default:
			return state;
	}
}

export default petInventoryReducer;
