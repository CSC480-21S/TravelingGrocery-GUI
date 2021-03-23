import { combineReducers } from "redux";
import createList from "./reducer/createList";
import homePage from "./reducer/homePage";
import login from "./reducer/login";
import lists from "./reducer/lists";
import store_list from "./reducer/Store_List,";
import list_toUpdate from "./reducer/list_toUpdate";

export default combineReducers({
	createList,
	homePage,
	login,
	lists,
	store_list,
	list_toUpdate,
});
