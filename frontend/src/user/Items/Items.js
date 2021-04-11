import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
//Local imports
import Item from "./Item/Item";
import SearchBar from "./Search_Bar/Search_Bar";
import makeStyles from "./Items_styles";
//Api

//Actions

const Items = () => {
	const styles = makeStyles();
	const [items, set_items] = useState([]); //STORE ITEMS
	const [isFetching, setIsFetching] = useState(false);

	return (
		<div>
			{/* Search Bar gets the items from the store */}
			<SearchBar set_items={set_items} setIsFetching={setIsFetching} />
			<div>{isFetching ? <LinearProgress /> : <p></p>}</div>
			{items.length > 0 ? (
				<div className={styles.text}>
					<Typography style={{ fontFamily: "Inter", fontWeight: "600" }}>
						Results
					</Typography>
				</div>
			) : (
				<div></div>
			)}

			<div>
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Items;
