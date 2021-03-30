import {ItemInventory} from "../components/ItemInventory";

export const PURCHASE_GRAY = 'PURCHASE_GRAY';


const marketplaceItemsBoughtReducer = (state=[], action) => {
	switch (action.type) {
		case PURCHASE_GRAY:
			if(ItemInventory[action.data].category === 'food') {

				return state;
			}
			return [...state, action.data];
		default:
			return state;
	}
}

export default marketplaceItemsBoughtReducer;
