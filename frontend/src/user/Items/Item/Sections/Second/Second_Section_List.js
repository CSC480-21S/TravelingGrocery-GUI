import React from "react";
import Typography from "@material-ui/core/Typography";
//Styles
import makeStyles from "./Second_Section_List_styles";
const Second_Section_List = ({ item }) => {
	const styles = makeStyles();
	return (
		<div>
			<Typography className={styles.item_Name}>
				{item.name ? item.name : "Error_Name"}
			</Typography>
		</div>
	);
};

export default Second_Section_List;
