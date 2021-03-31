import React from "react";
import Avatar from "@material-ui/core/Avatar";
//Styles
import makeStyles from "./First_Section_List_styles";
//Local Imports
import test from "../../../../../images/test.jpg";
const First_Section_List = () => {
	const styles = makeStyles();
	return (
		<div>
			<Avatar src={test} variant="rounded" className={styles.image} />
		</div>
	);
};

export default First_Section_List;
