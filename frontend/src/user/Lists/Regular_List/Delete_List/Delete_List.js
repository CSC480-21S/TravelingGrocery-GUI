import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { useHistory } from "react-router";
//API
import { list_delete } from "../../../../api/api";
//Styles
import makeStyles from "./Delete_List_Styles";

const DeleteList = ({ onDelete, set_onDelete, shoppingListID }) => {
	const history = useHistory();
	const styles = makeStyles();

	const handleClose = () => {
		set_onDelete(false);
	};
	const handle_Accept = async () => {
		await list_delete(shoppingListID);
		history.push("/home");
	};
	const handle_Cancel = () => {};
	return (
		<div>
			<Dialog onClose={handleClose} open={onDelete}>
				<div className={styles.container}>
					<div className={styles.first}>
						<DialogActions>
							<IconButton size="small" onClick={handleClose}>
								<CloseIcon></CloseIcon>
							</IconButton>
						</DialogActions>
					</div>
					<div className={styles.second}>
						<Typography>Are you sure you want to delete list?</Typography>
					</div>
					<div className={styles.third}>
						<div>
							{" "}
							{/* Cancel Button */}
							<IconButton onClick={handle_Cancel} className={styles.cancelBtn}>
								<CloseIcon />
							</IconButton>
						</div>
						<div>
							{" "}
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

export default DeleteList;
