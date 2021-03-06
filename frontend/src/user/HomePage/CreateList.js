import { React, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//Styles
import makeStyles from "../../styles/CreasteList";
//API
import { list_create } from "../../api/api";
//ACTIONS
import { list_get } from "../../actions/actions";

const CreateList = (props) => {
	const profile = useSelector((state) => state.user); //Retrieve user information from the store
	const [isValid, set_isValid] = useState(true);
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;

	const [list, setList] = useState({
		listName: "",
		userID: profile.googleId,
	});
	const styles = makeStyles();
	const dispatch = useDispatch();

	const { onClose, open } = props;

	const handleClose = () => {
		set_isValid(true);
		clearInput();
		onClose();
	};
	const clearInput = () => {
		setList({ listName: "", userID: 0 });
	};
	// Regular functions
	const validateInput = (input) => {
		const regEx = /[<>%\/${}?#:;]/i;
		return regEx.test(input);
	};
	// Buttons
	const createNewList = async (e) => {
		e.preventDefault();
		if (validateInput(list.listName)) {
			set_isValid(false);
			console.log("Invalid Input");
			return;
		}
		set_isValid(true);
		e.preventDefault();
		await list_create(list, token);
		dispatch(list_get(token));
		handleClose();
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
					<Typography className={styles.title}> Create List </Typography>
				</DialogContent>
				<form
					className={`${styles.root} ${styles.mainContainer}`}
					onSubmit={createNewList}
				>
					<FormControl className={styles.formControl}>
						<TextField
							fullWidth
							required
							autoFocus={true}
							error={!isValid}
							label={!isValid ? "Error" : "Enter Name"}
							variant="outlined"
							helperText={!isValid ? "Invalid entry." : ""}
							//className={styles.inputText}
							value={list.listName}
							onChange={(e) => setList({ ...list, listName: e.target.value })}
							//placeholder="Enter Name"
							style={{ paddingBottom: "30px" }}
							InputProps={{
								disableUnderline: true,
							}}
						/>
						<Button type="submit" className={styles.submitButton}>
							Create New List
						</Button>
					</FormControl>
				</form>
				<DialogActions></DialogActions>
			</Dialog>
		</div>
	);
};

export default CreateList;
