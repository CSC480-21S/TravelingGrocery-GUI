import { combineReducers } from "redux";
//Reducers
import active_list from "./reducer/active_list";
import user from "./reducer/user";
import lists from "./reducer/lists";
import store_list from "./reducer/Store_List,";
import list_toUpdate from "./reducer/list_toUpdate";
import list_users from "./reducer/lists_user";

export default combineReducers({
	list_users,
	active_list,
	user,
	lists,
	store_list,
	list_toUpdate,
});
