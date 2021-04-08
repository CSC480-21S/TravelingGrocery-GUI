import React, { useState } from "react";
//Material UI
import Button from "@material-ui/core/Button";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import ForwardIcon from "@material-ui/icons/Forward";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
//Local Components
import makeStyles from "./Options_styles";
import DeleteItem from "./Delete/Delete_Item";
import DeleteAffirmation from "./Delete/Delete_affirmation";
import NoteItem from "./Note/Note_Item";

const Options = ({ set_Setting_bolean, item }) => {
	const styles = makeStyles();
	const [onDelete, setOnDelete] = useState(false); //Boolean to render Delete dialog box
	const [onNote, setOnNote] = useState(false); //Boolean to render  Note dialog Box
	const [onConfirmation, setOnConfirmation] = useState(false);
	const handle_note_button = () => {
		setOnNote(true);
	};

	const handle_delete_button = () => {
		setOnDelete(true);
	};

	const handle_close_button = () => {
		set_Setting_bolean(true);
	};

	return (
		<>
			<DeleteItem
				onDelete={onDelete}
				setOnDelete={setOnDelete}
				set_Setting_bolean={set_Setting_bolean} // To close the three dots menu
				setOnConfirmation={setOnConfirmation}
				item={item}
			/>
			{/* When user confirms the deletion of an item, a dialog box confirming
			the deletion renders*/}
			<NoteItem
				onNote={onNote}
				setOnNote={setOnNote}
				set_Setting_bolean={set_Setting_bolean}
				item={item}
			/>
			<div className={styles.container}>
				{/* When onDelete is true a dialog box will render */}
				<DeleteAffirmation
					onConfirmation={onConfirmation}
					setOnConfirmation={setOnConfirmation}
				/>
				<Button //Note Button
					classes={{ root: styles.root, label: styles.label }}
					onClick={handle_note_button}
				>
					<NoteAddOutlinedIcon />
					Note
				</Button>
				<Button //Delete Item Button
					classes={{ root: styles.root, label: styles.label }}
					onClick={handle_delete_button}
				>
					<DeleteSweepOutlinedIcon />
					Delete
				</Button>
				<Button //Close interface button
					classes={{ root: styles.root, label: styles.label }}
					onClick={handle_close_button}
				>
					<ForwardIcon />
					Close
				</Button>
			</div>
		</>
	);
};

export default Options;
