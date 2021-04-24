import { FETCH_LIST_ITEMS, LIST_GET_ITEMS } from "../../actions/actionTypes";

const lists = (lists = [], action) => {
	switch (action.type) {
		case FETCH_LIST_ITEMS:
			//console.log(`Payload from List Reducer: ${action.payload}`);
			return action.payload;
		case LIST_GET_ITEMS:
			//console.log(JSON.stringify(action.payload));
			return action.payload.listItems;
		default:
			return lists;
	}
};
export default lists;
