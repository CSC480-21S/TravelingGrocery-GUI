import * as api from "../api/api";
import * as TYPES from "./actionTypes";

//DONT FORGET TO DISPATCH THE ACTION (REDUX)

//Send a List to a Component
export const sendList = (list) => (dispatch) => {
	dispatch({ type: TYPES.SEND_LIST, payload: list });
};
//Send Google Info to a Component
export const send_Google_User_info = (profile) => (dispatch) => {
	dispatch({ type: TYPES.SEND_GOOGLE_INFO, payload: profile });
};

//============================================================================
//					PI SERVER
//============================================================================

export const list_get = (token) => async (dispatch) => {
	try {
		const { data } = await api.list_get(token);
		//console.log("response (list_get): " + JSON.stringify(data));
		dispatch({ type: TYPES.LIST_GET, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const list_getItems = (shoppingListID, token) => async (dispatch) => {
	try {
		const { data } = await api.list_getItems(shoppingListID, token);
		//console.log("response (list_getItems): " + JSON.stringify(data));
		dispatch({ type: TYPES.LIST_GET_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
//----------	STORE	----------
export const store_getItems = () => async (dispatch) => {
	try {
		const { data } = await api.store_getItems();
		//console.log("Response (store_getItems: " + JSON.stringify(data));
		dispatch({ type: TYPES.FETCH_STORE_ITEMS, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
export const store_navigation = (lists) => async (dispatch) => {
	try {
		const { data } = await api.store_nav(lists);
		dispatch({ type: TYPES.STORE_NAV, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

//============================================================================
//					REDUCERS
//============================================================================

//----------	List to Update (REDUCER)	----------

//Set Global To be Updates List
export const set_list_to_be_updated = (list) => (dispatch) => {
	dispatch({ type: TYPES.SET_LIST_TO_BE_UPDATED, payload: list });
};

export const listToBeUpdated_AddItem = (item) => (dispatch) => {
	dispatch({ type: TYPES.LIST_TO_BE_UPDATED_ADD_ITEM, payload: item });
};
export const set_fromStore = (bol) => (dispatch) => {
	dispatch({ type: TYPES.SET_FROM_STORE, payload: bol });
};

export const assign_employee = (employee) => (dispatch) => {
	dispatch({ type: TYPES.ASSIGN_EMPLOYEE, payload: employee });
};
