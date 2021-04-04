import {
	SET_LIST_TO_BE_UPDATED,
	LIST_TO_BE_UPDATED_ADD_ITEM,
} from "../../actions/actionTypes";

const list_toUpdate = (lists = [], action) => {
	switch (action.type) {
		case SET_LIST_TO_BE_UPDATED:
			return action.payload;
		case LIST_TO_BE_UPDATED_ADD_ITEM: {
			return [...lists, action.payload];
		}
		default:
			return lists;
	}
};
export default list_toUpdate;
