//Regular imports
import React, { useState, useEffect } from "react";

//Components
import First_Section_List from "./Sections/First/First_Section_List";
import Second_Section_List from "./Sections/Second/Second_Section_List";
import Third_Section_List from "./Sections/Third/Third_Section_List";
import Options from "./Sections/Third/Three_Dots/Options";
//Styles
import makeStyles from "./Regular_Item_styles";

const Regular_Item = ({ item }) => {
	const styles = makeStyles();
	const [setting_boolean, set_Setting_boolean] = useState(false);

	useEffect(() => {
		return set_Setting_boolean(true);
	}, []);
	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div className={styles.container}>
				{/* Item image */}
				<div className={styles.item_Image_Container}>
					<First_Section_List />
				</div>
				{/* Hide The item info to toggle the settings menu */}
				{setting_boolean ? (
					/* Contains item's info (Item name, type, on Stock, location ) */
					<div className={styles.item_details_Container}>
						<Second_Section_List item={item} />
					</div>
				) : (
					<div className={styles.setting_details}>
						<Options
							setting_boolean={setting_boolean}
							set_Setting_bolean={set_Setting_boolean}
							item={item}
						/>
					</div>
				)}
				{setting_boolean ? (
					<div className={styles.third_section_list_Container}>
						<Third_Section_List
							setting_boolean={setting_boolean}
							set_Setting_bolean={set_Setting_boolean}
							item={item}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Regular_Item;
