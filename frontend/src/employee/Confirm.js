import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
//API
import { list_update } from "../api/api";
//ACTIONS

//Styles
import makeStyles from "./ConfirmStyles";

const Confirm = ({ onConfirm, set_onConfirm }) => {
	//const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	//States from the Store
	const lists_toUpdate = useSelector((state) => state.active_list);
	//Local States
	const token = useState(useSelector((state) => state.user.tk.tk))[0];
	const history = useHistory();
	const styles = makeStyles();

	const handleClose = () => {
		set_onConfirm(false);
	};

	const handle_Accept = async () => {
		lists_toUpdate.forEach(async (list) => {
			list.listShoppedFlag = 1;
			await list_update(list.shoppingListID, list, token);
		});
		//console.log(JSON.stringify(lists_toUpdate));
		history.push("/login");
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
