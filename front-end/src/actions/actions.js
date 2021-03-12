import * as api from "../api/api";
import * as TYPES from "./actionTypes";

//Create a new List
export const create_List = (list, id) => async (dispatch) => {
	try {
		const { data } = await api.createList(list, id);
		//console.log(`data: ${data}`);
		dispatch({ type: TYPES.CREATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//Get all Lists
export const fetchLists = (id) => async (dispatch) => {
	try {
		const { data } = await api.getLists(id);
		//console.log("FetchLists data: " + data);
		dispatch({ type: TYPES.FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//Send a List to a Component
export const sendList = (list) => (dispatch) => {
	try {
		dispatch({ type: TYPES.SEND_LIST, payload: list });
	} catch (error) {
		console.log(error.message);
	}
};
//Send Google Info to a Component
export const send_Google_User_info = (profile) => (dispatch) => {
	try {
		//console.log("From Actions: " + profile);
		dispatch({ type: TYPES.SEND_GOOGLE_INFO, payload: profile });
	} catch (error) {
		console.log(error.message);
	}
};
//Fecth items of a list
export const fecth_list_items = (user_id, list_id) => async (dispatch) => {
	try {
		const { data } = await api.fetch_items(user_id, list_id);
		//console.log(`Items from Actions: ${JSON.stringify(data)}`);
		dispatch({ type: TYPES.FETCH_LIST_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
export const fetch_store_items = () => async (dispatch) => {
	try {
		const { data } = await api.fetch_store_items();
		//console.log(`Store Items from Actions: ${JSON.stringify(data)}`);
		dispatch({ type: TYPES.FETCH_STORE_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
