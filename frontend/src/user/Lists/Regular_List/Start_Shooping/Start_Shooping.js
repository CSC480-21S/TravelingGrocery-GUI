import React from "react";
import Button from "@material-ui/core/Button";
//Local Imports
import makeStyles from "./Start_Shooping_syles";
const Start_Shooping = ({ setOpen }) => {
	const styles = makeStyles();
	const startShooping = () => {
		setOpen(true);
	};
	return (
		<div className={styles.container}>
			<Button className={styles.button_root} onClick={startShooping}>
				Start Shopping
			</Button>
		</div>
	);
};

export default Start_Shooping;
