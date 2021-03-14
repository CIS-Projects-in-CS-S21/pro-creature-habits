export const PURCHASE = 'PURCHASE'

const defaultState = ['pizza', 'shoes', 'burger', 'shirt', 'carrot', 'ball', 'water'];

const marketplaceInventoryReducer = (state=defaultState, action) => {
	switch (action.type) {
		case PURCHASE:
			const index = state.indexOf(action.data);
			const copyItems = [...state];
			copyItems.splice(index, 1);
			return copyItems;
		default:
			return state;
	}
}

export default marketplaceInventoryReducer;
