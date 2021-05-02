import axios from "axios";

const url_list = process.env.REACT_APP_LIST_SERVICE;
const url_store = process.env.REACT_APP_STORE_SERVICE;
const url_user = process.env.REACT_APP_USER_SERVICE;

//----------------------------------------------------------------------------------------------------------
//											 LIST SERVICE
//----------------------------------------------------------------------------------------------------------

//--------------------	List (List of lists) --------------------

//Get List ----------------------------------------
export const list_get = (token) =>
	axios
		.get(url_list, { headers: { Authorization: `Bearer ${token}` } })
		.catch((e) => console.log(`API list_get [ERROR]: ${e.message}`));

//Create List ----------------------------------------
export const list_create = (list, token) =>
	axios
		.post(url_list, list, { headers: { Authorization: `Bearer ${token}` } })
		.catch((e) => console.log(`API list_create [ERROR]: ${e.message}`));

//Delete List ----------------------------------------
export const list_delete = (shoppingListID, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_delete [ERROR]: ${e.message}`));

//Update List ----------------------------------------
export const list_update = (shoppingListID, list, token) =>
	axios
		.put(`${url_list}/${shoppingListID}`, list, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_update [ERROR]: ${e.message}`));

// --------------------  List Items (List of Items) --------------------

//Get Missed Items ----------------------------------------
export const list_getMissedItems = (token) =>
	axios
		.get(`${url_list}/missed/items`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_getMissedItems [ERROR]: ${e.message}`));

//Get Item ----------------------------------------
export const list_getItems = (shoppingListID, token) =>
	axios
		.get(`${url_list}/${shoppingListID}/items`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_getItems [ERROR]: ${e.message}`));

//Create Items ----------------------------------------
export const list_addItemList = (shoppingListID, items, token) =>
	axios
		.post(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Delete Items ----------------------------------------
export const list_deleteItemList = (shoppingListID, items, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Update Items ----------------------------------------
export const list_updateItemList = (shoppingListID, items, token) =>
	axios
		.put(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//--------------------	List Item (Individual Item)  --------------------

//Create Single Item ----------------------------------------
export const list_addItem = (shoppingListID, item, token) =>
	axios
		.post(`${url_list}/${shoppingListID}/item`, item, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Delete  Single Item  ----------------------------------------
export const list_deleteItem = (shoppingListID, itemName, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}/item/${itemName}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Update  Single Item  ----------------------------------------
export const list_updateItem = (shoppingListID, itemName, item, token) =>
	axios
		.put(`${url_list}/${shoppingListID}/item/${itemName}`, item, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//--------------------	Share List  --------------------

//Get Share List ----------------------------------------
export const shareList_getUsers = (shoppingListID, token) =>
	axios
		.get(`${url_list}/${shoppingListID}/user`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Create Share List ----------------------------------------
export const shareList_addUser = (shoppingListID, userID, token) =>
	axios
		.post(`${url_list}/${shoppingListID}/user`, userID, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Delete Share List ----------------------------------------
export const shareList_deleteUser = (shoppingListID, userID, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}/user/${userID}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//--------------------	Analytics  --------------------

// Shopped Items Per Hour -------------------------
export const list_getAnalytics = (users, token) =>
	axios
		.put(`${url_list}/shopped/items/time`, users, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//----------------------------------------------------------------------------------------------------------
//										 Store SERVICE
//----------------------------------------------------------------------------------------------------------

// Get navigation directions -------------------------
export const store_nav = (lists, token) =>
	axios.post(`${url_store}/nav`, lists, {
		headers: { Authorization: `Bearer ${token}` },
	});

// Get items from the Store -------------------------
export const store_getItems = () =>
	axios
		.get(`${url_store}/items`)
		.catch((e) => console.log(`store_getItems: ${e.message}`));

// POST Search items -------------------------
export const store_searchItems = (searchTerm, token) =>
	axios.post(`${url_store}/search`, searchTerm, {
		headers: { Authorization: `Bearer ${token}` },
	});

// POST Add items to the store -------------------------
export const store_addItems = (items, token) =>
	axios
		.post(`${url_store}/additems`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`store_addItems: ${e.message}`));
//----------------------------------------------------------------------------------------------------------
//										 User Account SERVICE
//----------------------------------------------------------------------------------------------------------

// Authenticate user with backend -------------------------
export const userAccount_login = (token) =>
	axios.post(`${url_user}/records`, token);
// Update Analytic
export const updateAnalytic = (data) =>
	axios.put(`${url_user}/analytics`, data);
////--------------------	Admin 	-------------------------

export const unassignedList = (token) =>
	axios
		.get(`${url_list}/unassigned`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e));

export const add_employee = (employee, token) =>
	axios
		.post(`${url_user}/Upgrade`, employee, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`upgrade: ${e.message}`));

export const get_employees = (token) =>
	axios
		.get(`${url_user}/Upgrade`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e));

export const update_status = (tokenAndActiveStatus, token) =>
	axios
		.put(`${url_user}/Upgrade`, tokenAndActiveStatus, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e));
