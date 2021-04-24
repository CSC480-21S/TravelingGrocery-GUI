import { SET_LIST_TO_BE_UPDATED } from "../../actions/actionTypes";

export default (lists = [], action) => {
	switch (action.type) {
		case SET_LIST_TO_BE_UPDATED:
			return action.payload;
		default:
			return lists;
	}
};
