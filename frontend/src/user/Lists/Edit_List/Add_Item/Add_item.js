import React from "react";
//Libraries
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//Local Libraries
import makeStyles from "./Add_item_styles";
import { set_list_to_be_updated } from "../../../../actions/actions";

const AddItem = ({ new_Items }) => {
	const styles = makeStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();

	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<Button
				className={styles.button}
				onClick={() => {
					//Send the user to the Items(Store Items) Component
					dispatch(set_list_to_be_updated(new_Items));
					history.push(`${location.pathname}/store`);
				}}
			>
				<AddIcon fontSize="inherit" /> Add Item
			</Button>
		</div>
	);
};

export default AddItem;
