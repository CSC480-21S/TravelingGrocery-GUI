import React from "react";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//Local Imports

//Styles
import makeStyles from "./Third_Section_List_styles";

const ThirdSectionList = ({ setting_boolean, set_Setting_bolean, item }) => {
	const styles = makeStyles();

	const handle_threeDots_button = () => {
		set_Setting_bolean(!setting_boolean);
	};

	return (
		<div style={{ marginRight: 2 }}>
			<div>
				{/* Three Dots button (Options) */}
				<Button className={styles.three_dots} onClick={handle_threeDots_button}>
					<MoreHorizIcon />
				</Button>
			</div>
			<div style={{ fontSize: "12px" }}>
				{/* Item Count Buttons */}
				<p>
					<b>Qty:</b> {item.quantityItem}
				</p>
			</div>
		</div>
	);
};

export default ThirdSectionList;
