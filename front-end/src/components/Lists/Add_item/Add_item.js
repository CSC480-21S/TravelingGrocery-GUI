import React from "react";
//Libraries
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
//Local Libraries
import makeStyles from "./Add_item_styles";

const Add_item = ({ setbol }) => {
	const styles = makeStyles();
	const history = useHistory();

	return (
		<div style={{ paddingLeft: 36, paddingRight: 36 }}>
			<Button
				className={styles.button}
				onClick={() => {
					setbol(true);
					history.push("/items");
				}}
			>
				<AddIcon fontSize="inherit" /> Add Item
			</Button>
		</div>
	);
};

export default Add_item;
