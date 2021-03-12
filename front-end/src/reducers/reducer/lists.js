import { FETCH_LIST_ITEMS } from "../../actions/actionTypes";

export default (lists = [], action) => {
	switch (action.type) {
		case FETCH_LIST_ITEMS:
			//console.log(`Payload from List Reducer: ${action.payload}`);
			return action.payload;
		default:
			return lists;
	}
};
