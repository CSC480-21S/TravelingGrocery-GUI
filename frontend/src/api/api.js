import axios from "axios";

const url = "http://localhost:5050"; //first run json server,
const url_list = "http://pi.cs.oswego.edu:9081/list";
const url_store = "http://pi.cs.oswego.edu:9082/store";
const url_user = "http://pi.cs.oswego.edu:7808/user";
//run ngrok http 5050,
//change the url   http://pi.cs.oswego.edu:9181/list

//==========================================================================================================
//					JSON-SERVER
//==========================================================================================================
//Handle Store's items--------------------
export const fetch_store_items = () => axios.get(`${url}/items_list`);
export const fetch_items = (user_id, list_Id) =>
	axios.get(`${url}/users/${user_id}/items?listId=${list_Id}`);
//Handle User's List --------------------
export const getLists = (user_id) => axios.get(`${url}/users/${user_id}/lists`);
export const update_List = (list_id, list) =>
	axios.put(`${url}/lists/${list_id}`, list);
export const createList = (newList, user_id) =>
	axios.post(`${url}/users/${user_id}/lists`, newList);
export const add_item_to_list = (user_id, item) =>
	axios.post(`${url}/users/${user_id}/items`, item);
//Handle List's items --------------------
export const add_Item = (item_id, item) =>
	axios.post(`${url}/items/${item_id}`, item);
export const update_Item = (item_id, item) =>
	axios.put(`${url}/items/${item_id}`, item);

export const delete_Item = (item_id, item) =>
	axios.delete(`${url}/items/${item_id}`);
//Testing stuff
export const delete_item = (item_id) => axios.delete(`${url}/items/${item_id}`);
//==========================================================================================================
//										SERVER DEPLOYED at PI
//==========================================================================================================

//----------------------------------------------------------------------------------------------------------
//											 LIST SERVICE
//----------------------------------------------------------------------------------------------------------

//--------------------	List (List of lists) --------------------

export const list_get = (token) =>
	axios
		.get(url_list, { headers: { Authorization: `Bearer ${token}` } })
		.catch((e) => console.log(`API list_get [ERROR]: ${e.message}`));
export const list_create = (list, token) =>
	axios
		.post(url_list, list, { headers: { Authorization: `Bearer ${token}` } })
		.catch((e) => console.log(`API list_create [ERROR]: ${e.message}`));
export const list_delete = (shoppingListID, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_delete [ERROR]: ${e.message}`));
export const list_update = (shoppingListID, list, token) =>
	axios
		.put(`${url_list}/${shoppingListID}`, list, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_update [ERROR]: ${e.message}`));

// --------------------  List Items (List of Items) --------------------

export const list_getMissedItems = (token) =>
	axios
		.get(`${url_list}/missed/items`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_getMissedItems [ERROR]: ${e.message}`));

//Get ----------------------------------------
export const list_getItems = (shoppingListID, token) =>
	axios
		.get(`${url_list}/${shoppingListID}/items`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`API list_getItems [ERROR]: ${e.message}`));

//Create ----------------------------------------
export const list_addItemList = (shoppingListID, items, token) =>
	axios
		.post(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Delete ----------------------------------------
export const list_deleteItemList = (shoppingListID, items, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Update ----------------------------------------
export const list_updateItemList = (shoppingListID, items, token) =>
	axios
		.put(`${url_list}/${shoppingListID}/items`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//--------------------	List Item (Individual Item)  --------------------

//Create ----------------------------------------
export const list_addItem = (shoppingListID, item, token) =>
	axios
		.post(`${url_list}/${shoppingListID}/item`, item, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Delete ----------------------------------------
export const list_deleteItem = (shoppingListID, itemName, token) =>
	axios
		.delete(`${url_list}/${shoppingListID}/item/${itemName}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

//Update ----------------------------------------
export const list_updateItem = (shoppingListID, itemName, item, token) =>
	axios
		.put(`${url_list}/${shoppingListID}/item/${itemName}`, item, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(e.message));

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

export const store_nav = (lists, token) =>
	axios.post(`${url_store}/nav`, lists, {
		headers: { Authorization: `Bearer ${token}` },
	});

export const store_getItems = () =>
	axios
		.get(`${url_store}/items`)
		.catch((e) => console.log(`store_getItems: ${e.message}`));

export const store_searchItems = (searchTerm, token) =>
	axios.post(`${url_store}/search`, searchTerm, {
		headers: { Authorization: `Bearer ${token}` },
	});

export const store_addItems = (items, token) =>
	axios
		.post(`${url_store}/additems`, items, {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((e) => console.log(`store_addItems: ${e.message}`));
//----------------------------------------------------------------------------------------------------------
//										 User Account SERVICE
//----------------------------------------------------------------------------------------------------------

export const userAccount_login = (token) =>
	axios.post(`${url_user}/records`, token);

/* .then((res) => console.log(JSON.stringify(res.data))); */
