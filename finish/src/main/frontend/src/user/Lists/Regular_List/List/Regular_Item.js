//Regular imports
import React, { useState, useEffect } from "react";

//Components
import FirstSectionList from "./Sections/First/First_Section_List";
import SecondSectionList from "./Sections/Second/Second_Section_List";
import ThirdSectionList from "./Sections/Third/Third_Section_List";
import Options from "./Sections/Third/Three_Dots/Options";
//Styles
import makeStyles from "./Regular_Item_styles";

const RegularItem = ({ item }) => {
	const styles = makeStyles();
	const [setting_boolean, set_Setting_boolean] = useState(true);

	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div className={styles.container}>
				{/* Item image */}
				<div className={styles.item_Image_Container}>
					<FirstSectionList />
				</div>
				{/* Hide The item info to toggle the settings menu */}
				{setting_boolean ? (
					/* Contains item's info (Item name, type, on Stock, location ) */
					<>
						<div className={styles.item_details_Container}>
							<SecondSectionList item={item} />
						</div>

						<div className={styles.third_section_list_Container}>
							<ThirdSectionList
								setting_boolean={setting_boolean}
								set_Setting_bolean={set_Setting_boolean}
								item={item}
							/>
						</div>
					</>
				) : (
					<div className={styles.setting_details}>
						<Options
							setting_boolean={setting_boolean}
							set_Setting_bolean={set_Setting_boolean}
							item={item}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default RegularItem;
