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
	const [items, set_items] = useState([]);

	//====================================================

	useEffect(() => {
		set_items(
			items.map((item) => {
				item.count = 1;
				item.isChecked = false;
			})
		);
	}, []);

	return (
		<div>
			{/* Search Bar gets the items from the store */}
			<Search_Bar set_items={set_items} />
			<div className={styles.text}>
				<Typography style={{ fontFamily: "Inter", fontWeight: "600" }}>
					Add Items to {list_Name}
				</Typography>
			</div>
			<div>
				{items.map((item) => (
					<Item key={item.id} item={item} items={items} set_items={set_items} />
				))}
			</div>
		</div>
	);
};

export default Items;
