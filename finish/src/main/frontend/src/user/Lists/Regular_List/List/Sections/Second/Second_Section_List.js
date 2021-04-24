import React from "react";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "./Second_Section_List_styles";
const SecondSectionList = ({ item }) => {
	const styles = makeStyles();
	return (
		<div className={styles.container}>
			<div className={styles.itemName}>
				<Typography className={styles.item_Name}>
					{item.itemName ? item.itemName : "Error_Name"}
				</Typography>
			</div>
			<div>
				{/* <Typography className={styles.item_Type}>Item Type</Typography> */}
				<Typography className={styles.item_Stock}>
					{true ? "In Stock" : "Out of Stock"}
				</Typography>
			</div>
		</div>
	);
};

export default SecondSectionList;
