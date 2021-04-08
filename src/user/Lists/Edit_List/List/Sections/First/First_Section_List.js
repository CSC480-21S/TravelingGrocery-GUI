import React from "react";
import Avatar from "@material-ui/core/Avatar";
//Styles
import makeStyles from "./First_Section_List_styles";
//Local Imports
import test from "../../../../../../images/test.jpg";
const FirstSectionList = () => {
	const styles = makeStyles();
	return (
		<div>
			<Avatar src={test} variant="rounded" className={styles.image} />
		</div>
	);
};

export default FirstSectionList;
