import { CREATE, FETCH_ALL, LIST_GET } from "../../actions/actionTypes";

export default (lists = [], action) => {
	//where action constains the payload/data thats going to the Store
	switch (action.type) {
		case CREATE:
			return [...lists, action.payload];
		case FETCH_ALL:
			console.log(`From reducer: \n ${JSON.stringify(action.payload)}`);
			return action.payload;
		case LIST_GET:
			const shoppingLists = action.payload.shoppingLists;
			return shoppingLists;
		default:
			return lists;
	}
};
