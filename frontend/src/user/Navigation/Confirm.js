import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
//API
import { list_update } from "../../api/api";
//ACTIONS

//Styles
import makeStyles from "./ConfirmStyles";

const Confirm = ({ onConfirm, set_onConfirm, shoppingListID }) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const navList = useSelector((state) => state.active_list);

	const history = useHistory();
	const styles = makeStyles();

	const handleClose = () => {
		set_onConfirm(false);
	};

	const handle_Accept = async () => {
		navList.listShoppedFlag = 1;
		console.log(JSON.stringify(navList));
		await list_update(shoppingListID, navList, token);
		history.push("/home");
	};

	return (
		<div>
			<Dialog onClose={handleClose} open={onConfirm}>
				<div className={styles.container}>
					<div className={styles.first}>
						<DialogActions>
							<IconButton size="small" onClick={handleClose}>
								<CloseIcon></CloseIcon>
							</IconButton>
						</DialogActions>
					</div>
					<div className={styles.second}>
						<Typography>Are you done shopping?</Typography>
					</div>
					<div className={styles.third}>
						<div>
							{" "}
							{/* Cancel Button */}
							<IconButton onClick={handleClose} className={styles.cancelBtn}>
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
export default Confirm;
