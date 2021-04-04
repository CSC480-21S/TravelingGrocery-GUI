import React from "react";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "./Second_Section_List_styles";
const SecondSectionList = ({ item }) => {
	const styles = makeStyles();
	return (
		<div>
			<Typography className={styles.item_Name}>
				{item.itemName ? item.itemName : "Error_Name"}
			</Typography>
			{/* <Typography className={styles.item_Type}>Item Type</Typography> */}
			<br />
			<Typography className={styles.item_Stock}>On Stock</Typography>
		</div>
	);
};

export default SecondSectionList;
