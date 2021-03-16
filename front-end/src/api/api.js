import axios from "axios";

const url = "http://localhost:5050"; //first run json server,
//run ngrok http 5050,
//change the url

export const getLists = (user_id) => axios.get(`${url}/users/${user_id}/lists`);
export const createList = (newList, user_id) =>
	axios.post(`${url}/users/${user_id}/lists`, newList);
export const fetch_items = (user_id, list_Id) =>
	axios.get(`${url}/users/${user_id}/items?listId=${list_Id}`);
export const fetch_store_items = () => axios.get(`${url}/items_list`);
export const add_item_to_list = (user_id, item) =>
	axios.post(`${url}/users/${user_id}/items`, item);
export const update_Item = (item_id, item) =>
	axios.put(`${url}/items/${item_id}`, item);
export const delete_item = (item_id) => axios.delete(`${url}/items/${item_id}`);
