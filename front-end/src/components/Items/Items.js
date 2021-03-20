import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
//Local imports
import Item from "./Item/Item";
import { fetch_store_items } from "../../actions/actions";
import { set_list_to_be_updated } from "../../actions/actions";
import Search_Bar from "./Search_Bar/Search_Bar";

const Items = () => {
	const dispatch = useDispatch();
	const list_Name = useSelector((state) => state.homePage.name); //NAME OF THE LIST THAT WE ARE GOING TO ADD ITEMS
	const username = useSelector((state) => state.login.profileObj.email);
	//LIST TO BE UPDATED
	const [items_to_be_updated, set_ItemsToBeUpdated] = useState(
		useSelector((state) => state.list_toUpdate)
	);
	//STORE ITEMS
	const [items, set_items] = useState(
		useSelector((state) =>
			state.store_list.map((item) => {
				item.listId = list_Name;
				item.userId = username;
				item.count = 1;
				item.id = Math.random().toString(36).substr(2, 9);
				item.isChecked = false;
				return item;
			})
		)
	);

	//set_ItemsToBeUpdated(items_to_be_updated.push(item))
	// IF CHECKED ADD THE ITEMS TO THE LIST TO BE UPDATED
	const handleAdd = () => {
		items.map((item) => {
			if (item.isChecked === true) {
				/* console.log(
					"items_to_be_updated: " + JSON.stringify(items_to_be_updated)
				); */
				try {
					items_to_be_updated.push(item); //push returns the new index of the array
					set_ItemsToBeUpdated(items_to_be_updated);
				} catch (error) {
					/* console.log(
						"items_to_be_updated: " + JSON.stringify(items_to_be_updated)
					);
					console.log("ITEM: " + JSON.stringify(item)); */
					console.log(error);
				}
			}
		});
		//console.log("items_to_be_updated: " + JSON.stringify(items_to_be_updated));
		//	console.log("items: " + JSON.stringify(items));
		dispatch(set_list_to_be_updated(items_to_be_updated));
	};
	//====================================================

	//FETCH STORE ITEMS
	useEffect(() => {
		dispatch(fetch_store_items());
	}, [dispatch]);

	return (
		<div>
			<Search_Bar />
			<div>
				<Typography>Adding Items to {list_Name}</Typography>
			</div>
			<div>
				{items.map((item) => (
					<Item key={item.id} item={item} items={items} set_items={set_items} />
				))}
			</div>
			<div>
				<button onClick={handleAdd}>ADD ITEMS</button>
			</div>
		</div>
	);
};

export default Items;
