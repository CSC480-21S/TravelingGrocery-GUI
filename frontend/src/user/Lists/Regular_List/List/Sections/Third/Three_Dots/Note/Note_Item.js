import React from "react";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
//local Imports
import makeStyles from "./Note_Item_Styles";
//API
import { list_updateItem } from "../../../../../../../../api/api";
//ACTIONS
import { list_getItems } from "../../../../../../../../actions/actions";

const NoteItem = ({ onNote, setOnNote, set_Setting_bolean, item }) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const [itemToBeUpdated, set_itemToBeUpdated] = useState(item);
	const dispatch = useDispatch();
	const styles = makeStyles();
	const handleClose = () => {
		setOnNote(false);
	};
	const updateItem = async (e) => {
		e.preventDefault();
		await list_updateItem(
			itemToBeUpdated.shoppingListID,
			itemToBeUpdated.itemName,
			itemToBeUpdated,
			token
		);
		dispatch(list_getItems(item.shoppingListID, token));
		handleClose();
		set_Setting_bolean(true);
	};

	return (
		<div>
			<Dialog onClose={handleClose} open={onNote} className={styles.main}>
				<DialogActions disableSpacing>
					<IconButton
						className={styles.exitIcon}
						size="small"
						onClick={handleClose}
					>
						<CloseIcon></CloseIcon>
					</IconButton>
				</DialogActions>
				<DialogContent>
					<Typography className={styles.title}> Note </Typography>
				</DialogContent>
				<form
					className={`${styles.root} ${styles.mainContainer}`}
					onSubmit={updateItem}
				>
					<FormControl className={styles.formControl}>
						<TextField
							autoFocus={true}
							fullWidth
							className={styles.inputText}
							value={itemToBeUpdated.itemNote}
							onChange={(e) =>
								set_itemToBeUpdated({
									...itemToBeUpdated,
									itemNote: e.target.value,
								})
							}
							placeholder="Enter Name"
							InputProps={{
								disableUnderline: true,
							}}
						></TextField>
						<Button type="submit" className={styles.submitButton}>
							Confirm
						</Button>
					</FormControl>
				</form>
				<DialogActions></DialogActions>
			</Dialog>
		</div>
	);
};

export default NoteItem;
