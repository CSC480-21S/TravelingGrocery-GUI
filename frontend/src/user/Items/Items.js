import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
//Local imports
import Item from "./Item/Item";
import SearchBar from "./Search_Bar/Search_Bar";
import makeStyles from "./Items_styles";
//Api

//Actions

const Items = () => {
	const styles = makeStyles();
	const list_Name = useSelector((state) => state.active_list.listName); //NAME OF THE LIST THAT WE ARE GOING TO ADD ITEMS
	const [items, set_items] = useState([]); //STORE ITEMS

	return (
		<div>
			{/* Search Bar gets the items from the store */}
			<SearchBar set_items={set_items} />
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
