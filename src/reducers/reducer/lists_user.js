import { CREATE, FETCH_ALL, LIST_GET } from "../../actions/actionTypes";

const lists_user = (lists = [], action) => {
	//where action constains the payload/data thats going to the Store
	switch (action.type) {
		case CREATE: {
			console.log(JSON.stringify(action.payload));
			return [...lists, action.payload];
		}
		case FETCH_ALL:
			console.log(`From reducer: \n ${JSON.stringify(action.payload)}`);
			return action.payload;
		case LIST_GET: {
			const shoppingLists = action.payload.shoppingLists;
			return shoppingLists;
		}
		default:
			return lists;
	}
};
export default lists_user;
