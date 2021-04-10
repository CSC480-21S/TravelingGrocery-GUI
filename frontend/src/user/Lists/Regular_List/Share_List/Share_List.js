import React, { useState } from "react";
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

//Local Imports
import makeStyles from "./Share_List_styles";

const ShareList = ({ onShare, set_onShare, shoppingListID }) => {
	const styles = makeStyles();
	const [userID, set_userID] = useState();
	const handleClose = () => {
		set_onShare(false);
	};
	const shareList = () => {};
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
							autoFocus={true}
							fullWidth
							className={styles.inputText}
							value={userID}
							onChange={(e) => set_userID(e.target.value)}
							placeholder="Enter user Gmail"
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
