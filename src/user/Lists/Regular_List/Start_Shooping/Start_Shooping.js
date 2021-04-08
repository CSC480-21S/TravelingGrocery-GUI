import React from "react";
import Button from "@material-ui/core/Button";
//Local Imports
import makeStyles from "./Start_Shooping_syles";
const Start_Shooping = () => {
	const styles = makeStyles();
	return (
		<div className={styles.container}>
			<Button className={styles.button_root}>Start Shopping</Button>
		</div>
	);
};

export default Start_Shooping;
