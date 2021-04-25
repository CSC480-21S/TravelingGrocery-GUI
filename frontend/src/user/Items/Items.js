import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
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
	const [isChecked, setIsChecked] = useState(false); //bool
	const [isEmpty, setIsEmpty] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<div>
			{/* Search Bar gets the items from the store */}
			<SearchBar
				set_items={set_items}
				setIsFetching={setIsFetching}
				setIsEmpty={setIsEmpty}
				isChecked={isChecked}
				setIsError={setIsError}
			/>
			<div>{isFetching ? <LinearProgress /> : <p></p>}</div>
			<div className={styles.container}>
				<Typography style={{ fontFamily: "Inter", fontWeight: "600" }}>
					{isEmpty
						? "No results"
						: isError
						? "404 Error"
						: items.length > 0
						? "Results"
						: ""}
				</Typography>
				<div className={styles.switch}>
					<Typography style={{ fontFamily: "Inter", fontWeight: "600" }}>
						Show out of Stock Items
					</Typography>
					<Switch checked={isChecked} onChange={handleChange} name="chekced" />
				</div>
			</div>

			<div>
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Items;
