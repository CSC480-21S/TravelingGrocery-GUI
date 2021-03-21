//Regular imports
import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
//Actions
import { set_list_to_be_updated } from "../../../../actions/actions";
//Components
import First_Section_List from "./Sections/First/First_Section_List";
import Second_Section_List from "./Sections/Second/Second_Section_List";
import Third_Section_List from "./Sections/Third/Third_Section_List";

//Styles
import makeStyles from "./item_styles";

const Item = ({ item, set_new_Item, new_Items }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	//Edit List Content
	const [item_count, set_Item_count] = useState(item.count);
	const [isChecked, set_isChecked] = useState(false);
	const isMounted = useRef(false);
	const isMounted2 = useRef(false);

	//UPDATE CHECK OF CURENT ITEM
	useEffect(() => {
		//Prevent rendering on mount
		if (isMounted.current) {
			console.log(isChecked);
			new_Items.map((obj) => {
				if (obj.id === item.id) {
					/* 					console.log("ISCHECKED: " + isChecked);
					console.log("OBJ: " + obj.isChecked); */
					obj.isChecked = isChecked;
				}
			});
			set_new_Item(new_Items);
			dispatch(set_list_to_be_updated(new_Items));
			console.log("New Items CHECK: " + JSON.stringify(new_Items));
		} else {
			isMounted.current = true;
		}
	}, [isChecked]);

	//UPDATE COUNT OF CURRENT ITEM
	useEffect(() => {
		//Prevent rendering on mount
		if (isMounted2.current) {
			//console.log(`COUNT: ${item_count}`);
			new_Items.map((obj) => {
				if (obj.id === item.id) {
					obj.count = item_count;
				}
			});
			set_new_Item(new_Items);
			dispatch(set_list_to_be_updated(new_Items));
			//console.log("New Items COUNT: " + JSON.stringify(new_Items));
		} else {
			isMounted2.current = true;
		}
	}, [item_count]);

	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div className={styles.container}>
				{/* Item image */}
				<div>
					<Checkbox
						checked={isChecked}
						onChange={() => set_isChecked(!isChecked)}
						inputProps={{ "aria-label": "primary checkbox" }}
					/>
				</div>
				<div className={styles.item_Image_Container}>
					<First_Section_List />
				</div>

				<div className={styles.item_details_Container}>
					<Second_Section_List item={item} />
				</div>
				<div className={styles.third_section_list_Container}>
					<Third_Section_List
						item_count={item_count}
						set_Item_count={set_Item_count}
					/>
				</div>
			</div>
		</div>
	);
};

export default Item;
