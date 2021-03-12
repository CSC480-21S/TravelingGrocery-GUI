import React from "react";
//Libraries
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
//Local Libraries
import makeStyles from "./Add_item_styles";

const Add_item = () => {
	const styles = makeStyles();

	return (
		<div style={{ paddingLeft: 36, paddingRight: 36 }}>
			<Button className={styles.button}>
				<AddIcon fontSize="inherit" /> Add Item
			</Button>
		</div>
	);
};

export default Add_item;
