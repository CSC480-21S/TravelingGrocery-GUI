import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
//Redux
import { useDispatch } from "react-redux";
//API
import { list_deleteItem } from "../../../../../../../../api/api";
//Actions
import { list_getItems } from "../../../../../../../../actions/actions";
//Styles
import makeStyles from "./Delete_Item_styles";
const DeleteItem = ({
	onDelete,
	setOnDelete,
	set_Setting_bolean,
	setOnConfirmation,
	item,
}) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const dispatch = useDispatch();
	const styles = makeStyles();

	const handleClose = () => {
		setOnDelete(false);
	};

	const handle_Cancel = () => {
		setOnDelete(false);
		set_Setting_bolean(true);
	};

	const handle_Accept = async () => {
		await list_deleteItem(item.shoppingListID, item.itemName, token);
		dispatch(list_getItems(item.shoppingListID, token));
		set_Setting_bolean(true);
		setOnConfirmation(true);
		handleClose();
	};
	return (
		<div>
			<Dialog onClose={handleClose} open={onDelete} className={styles.test}>
				<div className={styles.container}>
					<div>
						<DialogActions>
							<IconButton size="small" onClick={handleClose}>
								<CloseIcon></CloseIcon>
							</IconButton>
						</DialogActions>
					</div>
					<div className={styles.second}>
						<Typography>
							Are you sure you want to delete the item from the list?
						</Typography>
					</div>
					<div className={styles.third}>
						<div>
							{/* Cancel Button */}
							<IconButton onClick={handle_Cancel} className={styles.cancelBtn}>
								<CloseIcon />
							</IconButton>
						</div>
						<div>
							{/* Accept Button */}
							<IconButton onClick={handle_Accept} className={styles.acceptBtn}>
								<CheckOutlinedIcon />
							</IconButton>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default DeleteItem;
