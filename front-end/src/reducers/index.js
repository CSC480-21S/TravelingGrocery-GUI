import { combineReducers } from "redux";
//Reducers
import homePage from "./reducer/homePage";
import login from "./reducer/login";
import lists from "./reducer/lists";
import store_list from "./reducer/Store_List,";
import list_toUpdate from "./reducer/list_toUpdate";
import list_users from "./reducer/lists_user";

export default combineReducers({
	list_users,
	homePage,
	login,
	lists,
	store_list,
	list_toUpdate,
});
