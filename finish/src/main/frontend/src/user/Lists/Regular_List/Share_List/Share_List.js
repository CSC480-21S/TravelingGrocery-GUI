import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//Material UI
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import { Typography } from "@material-ui/core";
//API
import { shareList_addUser } from "../../../../api/api";
//Local Imports
import makeStyles from "./Share_List_styles";

const ShareList = ({ onShare, set_onShare, shoppingListID }) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //token from google login
	const styles = makeStyles();
	const [userID, set_userID] = useState({ userID: "" });
	const [isValid, setIsValid] = useState(true);

	const handleClose = () => {
		set_onShare(false);
		setIsValid(true);
		set_userID("");
	};
	const validateInput = (email) => {
		let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};
	const shareList = async (e) => {
		e.preventDefault();
		if (validateInput(userID.userID)) {
			console.log(userID.userID);
			await shareList_addUser(shoppingListID, userID, token);
			return;
		}
		setIsValid(validateInput(userID.userID));
	};

	useEffect(() => {}, [userID]);

	return (
		<div>
			<Dialog onClose={handleClose} open={onShare} className={styles.main}>
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
					<Typography className={styles.title}> Share List </Typography>
				</DialogContent>
				<form
					className={`${styles.root} ${styles.mainContainer}`}
					onSubmit={shareList}
				>
					<FormControl className={styles.formControl}>
						<TextField
							//className={styles.inputText}
							error={!isValid}
							variant="outlined"
							helperText={!isValid ? "Invalid Email" : ""}
							required
							autoFocus={true}
							fullWidth
							value={userID.userID}
							onChange={(e) => {
								set_userID({ ...userID, userID: e.target.value });
								setIsValid(true);
							}}
							placeholder="Enter user Email"
							styles={{ marginBottom: "10%" }}
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

export default ShareList;
