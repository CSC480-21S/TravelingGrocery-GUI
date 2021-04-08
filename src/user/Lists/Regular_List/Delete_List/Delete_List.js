import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
//API
import { list_delete } from "../../../../api/api";

const DeleteList = ({ onDelete, set_onDelete, shoppingListID }) => {
	const history = useHistory();
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
				<div>
					<div>
						<DialogActions>
							<IconButton size="small" onClick={handleClose}>
								<CloseIcon></CloseIcon>
							</IconButton>
						</DialogActions>
					</div>
					<div>
						<Typography>Are you sure you want to delete list?</Typography>
					</div>
					<div>
						<div>
							{" "}
							{/* Cancel Button */}
							<Button onClick={handle_Cancel}>
								<CloseIcon />
							</Button>
						</div>
						<div>
							{" "}
							{/* Accept Button */}
							<Button onClick={handle_Accept}>
								<CheckOutlinedIcon />
							</Button>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default DeleteList;
