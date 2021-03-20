import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
const Delete_affirmation = ({ onConfirmation, setOnConfirmation }) => {
	const handleClose = () => {
		setOnConfirmation(false);
		window.location.reload(false);
	};
	return (
		<div>
			<Dialog onClose={handleClose} open={onConfirmation}>
				<DialogActions>
					<IconButton size="small" onClick={handleClose}>
						<CloseIcon></CloseIcon>
					</IconButton>
					<p>The item has been deleted from the list.</p>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Delete_affirmation;
