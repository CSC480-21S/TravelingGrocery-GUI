import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import Button from "@material-ui/core/Button";
//local Imports
import { delete_item } from "../../../../../../../../api/api";
const Delete_Item = ({
	onDelete,
	setOnDelete,
	set_Setting_bolean,
	item_id,
	setOnConfirmation,
}) => {
	const handleClose = () => {
		setOnDelete(false);
	};

	const handle_Cancel = () => {
		setOnDelete(false);
		set_Setting_bolean(true);
	};

	const handle_Accept = async () => {
		await delete_item(item_id);
		setOnDelete(false);
		set_Setting_bolean(true);
		setOnConfirmation(true);
		window.location.reload(false);
	};
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
						<Typography>
							Are you sure you want to delete the item from the list?
						</Typography>
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

export default Delete_Item;
