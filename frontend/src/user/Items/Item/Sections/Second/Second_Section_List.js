import React from "react";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "./Second_Section_List_styles";
const SecondSectionList = ({ item }) => {
	const styles = makeStyles();
	return (
		<div>
			<Typography className={styles.item_Name}>
				{item.name ? item.name : "Error_Name"}
			</Typography>
			<p></p>
			<Typography className={item.inStock ? styles.inStock : styles.outStock}>
				{item.inStock ? "In Stock" : "Out of Stock"}
			</Typography>
		</div>
	);
};

export default SecondSectionList;
