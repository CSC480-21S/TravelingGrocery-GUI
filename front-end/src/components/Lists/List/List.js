//Regular imports
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
//Actions

//Components
import First_Section_List from "./Sections/First/First_Section_List";
import Second_Section_List from "./Sections/Second/Second_Section_List";
import Third_Section_List from "./Sections/Third/Third_Section_List";
import Options from "./Sections/Third/Three_Dots/Options";
//Styles
import makeStyles from "./List_styles";

const List = ({ item, setBol }) => {
	const styles = makeStyles();
	const [setting_boolean, set_Setting_boolean] = useState(false);

	useEffect(() => {
		return set_Setting_boolean(true);
	}, []);
	return (
		<div style={{ paddingLeft: 50, paddingRight: 50 }}>
			<Grid className={styles.container} container spacing={3}>
				{/* Item image */}
				<Grid item xs={1} className={styles.item_Image_Container}>
					<First_Section_List />
				</Grid>
				{/* Hide The item info to toggle the settings menu */}
				{setting_boolean ? (
					/* Contains item's info (Item name, type, on Stock, location ) */
					<Grid item xs className={styles.item_details_Container}>
						<Second_Section_List item={item} />
					</Grid>
				) : (
					<Grid item xs={19} className={styles.setting_details}>
						<Options
							setting_boolean={setting_boolean}
							set_Setting_bolean={set_Setting_boolean}
							item_id={item.id}
						/>
					</Grid>
				)}
				{setting_boolean ? (
					<Grid item xs className={styles.third_section_list_Container}>
						<Third_Section_List
							setting_boolean={setting_boolean}
							set_Setting_bolean={set_Setting_boolean}
							item={item}
						/>
					</Grid>
				) : null}
			</Grid>
		</div>
	);
};

export default List;
