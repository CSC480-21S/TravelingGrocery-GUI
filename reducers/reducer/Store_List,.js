import { FETCH_STORE_ITEMS } from "../../actions/actionTypes";

const Store_List = (lists = [], action) => {
	switch (action.type) {
		case FETCH_STORE_ITEMS:
			//console.log(`from reducer: ${JSON.stringify(action.payload)}`);
			return action.payload;
		default:
			return lists;
	}
};
export default Store_List;
