import { SET_ACTIVE_LIST } from "../../actions/actionTypes";

export default (active_list = [], action) => {
	switch (action) {
		case SET_ACTIVE_LIST:
			return action.payload;
		default:
			return active_list;
	}
};
