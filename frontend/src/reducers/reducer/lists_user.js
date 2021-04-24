import { LIST_GET } from "../../actions/actionTypes";

const lists_user = (lists = [], action) => {
	//where action constains the payload/data thats going to the Store
	switch (action.type) {
		case LIST_GET: {
			const shoppingLists = action.payload.shoppingLists;
			return shoppingLists;
		}
		default:
			return lists;
	}
};
export default lists_user;
