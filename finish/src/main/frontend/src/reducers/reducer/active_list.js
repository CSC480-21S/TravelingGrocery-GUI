import { SEND_LIST } from "../../actions/actionTypes";

const active_list = (lists = [], action) => {
	//where action constains the payload/data thats going to the Store
	switch (action.type) {
		case SEND_LIST:
			return action.payload;
		default:
			return lists;
	}
};
export default active_list;
