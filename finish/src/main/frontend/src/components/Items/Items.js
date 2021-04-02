import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
//Local imports
import Item from "./Item/Item";
import Search_Bar from "./Search_Bar/Search_Bar";
import makeStyles from "./Items_styles";
//Api
/* import { store_getItems } from "../../api/api"; */
//Actions
import { fetch_store_items } from "../../actions/actions";
import { set_list_to_be_updated } from "../../actions/actions";
import { store_getItems } from "../../actions/actions";

const Items = () => {
	const dispatch = useDispatch();
	const styles = makeStyles();
	const history = useHistory();
	const list_Name = useSelector((state) => state.active_list.listName); //NAME OF THE LIST THAT WE ARE GOING TO ADD ITEMS
	const username = useSelector((state) => state.user.profile.email);
	const [filtered_storeList, set_Filtered_storeList] = useState([]); //filetered items
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
				item.isChecked = false;
				item.isStoreItem = true;
				return item;
			})
		)
	);

	// IF CHECKED ADD THE ITEMS TO THE LIST TO BE UPDATED
	const handleAdd = () => {
		items.map((item) => {
			if (item.isChecked === true) {
				try {
					item.isChecked = false;
					items_to_be_updated.push(item); //push returns the new index of the array
					set_ItemsToBeUpdated(items_to_be_updated);
				} catch (error) {
					console.log(error);
				}
			}
		});
		//console.log(`ITMES TO BE ADDED: ${JSON.stringify(items)}`);
		history.goBack();
		dispatch(set_list_to_be_updated(items_to_be_updated));
	};
	//====================================================

	//FETCH STORE ITEMS
	useEffect(() => {
		//dispatch(fetch_store_items());
		//dispatch(store_getItems());
	}, []);

	return (
		<div>
			<Search_Bar
				items={items}
				set_Filtered_storeList={set_Filtered_storeList}
			/>
			<div className={styles.text}>
				<Typography style={{ fontFamily: "Inter", fontWeight: "600" }}>
					Add Items to {list_Name}
				</Typography>
			</div>
			<div>
				{/* {items.map((item) => (
					<Item key={item.id} item={item} items={items} set_items={set_items} />
				))} */}
			</div>
		</div>
	);
};

export default Items;
