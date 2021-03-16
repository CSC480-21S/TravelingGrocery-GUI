//Regular imports
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
//Actions

//Components
import First_Section_List from "./Sections/First/First_Section_List";
import Second_Section_List from "./Sections/Second/Second_Section_List";
import Third_Section_List from "./Sections/Third/Third_Section_List";

//Styles
import makeStyles from "./item_styles";

const List = ({ item }) => {
	const styles = makeStyles();

	useEffect(() => {}, []);
	return (
		<div style={{ paddingLeft: 50, paddingRight: 50 }}>
			<div className={styles.container}>
				<div className={styles.item_Image_Container}>
					<First_Section_List />
				</div>
				<div className={styles.item_details_Container}>
					<Second_Section_List item={item} />
				</div>
				<div className={styles.third_section_list_Container}>
					<Third_Section_List item={item} />
				</div>
			</div>
		</div>
	);
};

export default List;
