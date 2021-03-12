import React from "react";
import Swiper from "swiper";
//Material UI
import Button from "@material-ui/core/Button";

import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import ForwardIcon from "@material-ui/icons/Forward";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";

//Local Components
import makeStyles from "./Options_styles";

const Options = ({ setting_boolean, set_Setting_bolean }) => {
	const styles = makeStyles();

	const handle_note_button = () => {
		set_Setting_bolean(!setting_boolean);
	};

	const handle_delete_button = () => {
		set_Setting_bolean(!setting_boolean);
	};

	const handle_move_button = () => {
		set_Setting_bolean(!setting_boolean);
	};
	const handle_close_button = () => {
		set_Setting_bolean(!setting_boolean);
	};

	return (
		<div>
			<Button
				classes={{ root: styles.root, label: styles.label }}
				onClick={handle_note_button}
			>
				<NoteAddOutlinedIcon />
				Note
			</Button>
			<Button
				classes={{ root: styles.root, label: styles.label }}
				onClick={handle_delete_button}
			>
				<DeleteSweepOutlinedIcon />
				Delete
			</Button>
			<Button
				classes={{ root: styles.root, label: styles.label }}
				onClick={handle_move_button}
			>
				<LibraryBooksOutlinedIcon />
				Move
			</Button>
			<Button
				classes={{ root: styles.root, label: styles.label }}
				onClick={handle_close_button}
			>
				<ForwardIcon />
				Close
			</Button>
		</div>
	);
};

export default Options;
