import * as api from "../api/api";
import * as TYPES from "./actionTypes";

//DONT FORGET TO DISPATCH THE ACTION (REDUX)

//============================================================================
//					JSON SERVER
//============================================================================
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
	dispatch({ type: TYPES.SEND_LIST, payload: list });
};
//Send Google Info to a Component
export const send_Google_User_info = (profile) => (dispatch) => {
	dispatch({ type: TYPES.SEND_GOOGLE_INFO, payload: profile });
};
//Fetch items of a list
export const fecth_list_items = (user_id, list_id) => async (dispatch) => {
	try {
		const { data } = await api.fetch_items(user_id, list_id);
		//console.log(`Items from Actions: ${JSON.stringify(data)}`);
		dispatch({ type: TYPES.FETCH_LIST_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//Fetch Store items
export const fetch_store_items = () => async (dispatch) => {
	try {
		const { data } = await api.fetch_store_items();
		//console.log(`Store Items from Actions: ${JSON.stringify(data)}`);
		dispatch({ type: TYPES.FETCH_STORE_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//Set Global Active List
export const set_active_list = (list) => (dispatch) => {
	dispatch({ type: TYPES.SET_ACTIVE_LIST, payload: list });
};
//Set Global To be Updates List
export const set_list_to_be_updated = (list) => (dispatch) => {
	dispatch({ type: TYPES.SET_LIST_TO_BE_UPDATED, payload: list });
};

//============================================================================
//					PI SERVER
//============================================================================

export const list_get = () => async (dispatch) => {
	try {
		const { data } = await api.list_get();
		//console.log("response (list_get): " + JSON.stringify(data));
		dispatch({ type: TYPES.LIST_GET, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const list_create = (list) => async (dispatch) => {
	try {
		//console.log(JSON.stringify("List: " + JSON.stringify(list)));
		const { data } = await api.list_create(list);
		//console.log("respone (list_create) " + JSON.stringify(data));
		dispatch({ type: TYPES.CREATE, payload: data });
	} catch (error) {
		console.log(error.nessage);
	}
};
export const list_getItems = (shoppingListID) => async (dispatch) => {
	try {
		const { data } = await api.list_getItems(shoppingListID);
		console.log("response (list_getItems): " + JSON.stringify(data));
		dispatch({ type: TYPES.LIST_GET_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//----------	STORE	----------
export const store_getItems = () => async (dispatch) => {
	try {
		const { data } = await api.store_getItems();
		console.log("Response (store_getItems: " + JSON.stringify(data));
		dispatch({ type: TYPES.FETCH_STORE_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
