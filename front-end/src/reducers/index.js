import { combineReducers } from "redux";
import createList from "./reducer/createList";
import homePage from "./reducer/homePage";
import login from "./reducer/login";
import lists from "./reducer/lists";

export default combineReducers({ createList, homePage, login, lists });
