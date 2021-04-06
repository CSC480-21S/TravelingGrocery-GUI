import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "./Set_Title_styles";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Actions
import { sendList } from "../../../actions/actions";
import { list_get } from "../../../actions/actions";
//API
import { list_update } from "../../../api/api";

const SetTitle = ({ onClose, open }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [list, setList] = useState(useSelector((state) => state.active_list));

	const handleClose = () => {
		onClose();
	};
	const updateList = async (e) => {
		e.preventDefault();
		await list_update(list.shoppingListID, list);
		dispatch(sendList(list));
		dispatch(list_get());
		handleClose();
		history.replace(`${list.listName}`);
	};

	return (
		<div>
			<Dialog onClose={handleClose} open={open} className={styles.main}>
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
					{" "}
					<Typography className={styles.title}> Rename List </Typography>
				</DialogContent>
				<form
					className={`${styles.root} ${styles.mainContainer}`}
					onSubmit={updateList}
				>
					<FormControl className={styles.formControl}>
						<TextField
							autoFocus={true}
							fullWidth
							className={styles.inputText}
							value={list.name}
							onChange={(e) => setList({ ...list, listName: e.target.value })}
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

export default SetTitle;
