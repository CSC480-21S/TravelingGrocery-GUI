import axios from "axios";

const url = "http://localhost:5050"; //first run json server,
const url_list = "http://pi.cs.oswego.edu:9081/list";
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
//				SERVER DEPLOYED at PI
//==========================================================================================================
//	List (List of lists) --------------------
export const list_get = () =>
	axios
		.get(url_list)
		.catch((e) => console.log(`API list_get [ERROR]: ${e.message}`));
export const list_create = (list) =>
	axios
		.post(url_list, list)
		.catch((e) => console.log(`API list_create [ERROR]: ${e.message}`));
export const list_delete = (shoppingListID) =>
	axios
		.delete(`${url_list}/${shoppingListID}`)
		.catch((e) => console.log(`API list_delete [ERROR]: ${e.message}`));
export const list_update = (shoppingListID, list) =>
	axios
		.put(`${url_list}/${shoppingListID}`, list)
		.catch((e) => console.log(`API list_update [ERROR]: ${e.message}`));
// List Items (List of Items) --------------------
export const list_getMissedItems = () =>
	axios
		.get(`${url_list}/missed/items`)
		.catch((e) => console.log(`API list_getMissedItems [ERROR]: ${e.message}`));
export const list_getItems = (shoppingListID) =>
	axios
		.get(`${url_list}/${shoppingListID}/items`)
		.catch((e) => console.log(`API list_getItems [ERROR]: ${e.message}`));
export const list_addItemList = (shoppingListID, items) =>
	axios
		.post(`${url_list}/${shoppingListID}/items`, items)
		.catch((e) => console.log(e.message));
export const list_deleteItemList = (shoppingListID, items) =>
	axios
		.delete(`${url_list}/${shoppingListID}/items`, items)
		.catch((e) => console.log(e.message));
export const list_updateItemList = (shoppingListID, items) =>
	axios
		.put(`${url_list}/${shoppingListID}/items`, items)
		.catch((e) => console.log(e.message));
//	List Item (Individual Item)--------------------
export const list_addItem = (shoppingListID, item) =>
	axios
		.post(`${url_list}/${shoppingListID}/item`, item)
		.catch((e) => console.log(e.message));
export const list_deleteItem = (shoppingListID, itemName) =>
	axios
		.delete(`${url_list}/${shoppingListID}/item/${itemName}`)
		.catch((e) => console.log(e.message));
export const list_updateItem = (shoppingListID, itemName, item) =>
	axios
		.put(`${url_list}/${shoppingListID}/item/${itemName}`, item)
		.catch((e) => console.log(e.message));
//	Share List
export const shareList_getUsers = (shoppingListID) =>
	axios
		.get(`${url_list}/${shoppingListID}/user`)
		.catch((e) => console.log(e.message));
export const shareList_addUser = (shoppingListID, userID) =>
	axios
		.post(`${url_list}/${shoppingListID}/user`, userID)
		.catch((e) => console.log(e.message));
export const shareList_deleteUser = (shoppingListID, userID) =>
	axios
		.delete(`${url_list}/${shoppingListID}/user/${userID}`)
		.catch((e) => console.log(e.message));
