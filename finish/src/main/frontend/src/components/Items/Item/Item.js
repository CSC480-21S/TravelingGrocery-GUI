//Regular imports
import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
//Actions

//Components
import First_Section_List from "./Sections/First/First_Section_List";
import Second_Section_List from "./Sections/Second/Second_Section_List";
import Third_Section_List from "./Sections/Third/Third_Section_List";

//Styles
import makeStyles from "./item_styles";
import { Button } from "@material-ui/core";
//Actions
import { listToBeUpdated_AddItem } from "../../../actions/actions";
import { set_fromStore } from "../../../actions/actions";
const List = ({ item, items, set_items }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	const isMounted = useRef(false);
	const isMounted2 = useRef(false);

	const [item_count, set_itemCount] = useState(1);

	const addItem = () => {
		const temp = {
			itemName: item.name,
			itemNote: "",
			quantityItem: item_count,
			isChecked: false,
			delete: false,
			create: true,
			update: false,
			fromStore: true,
		};
		dispatch(listToBeUpdated_AddItem(temp));
		dispatch(set_fromStore(true));
		console.log(JSON.stringify(item));
	};

	//
	/* useEffect(() => {
		if (isMounted2.current) {
			items.map((obj) => {
				if (obj.id === item.id) obj.count = item_count;
			});
			//console.log("COUNT: " + JSON.stringify(items));
		} else {
			isMounted2.current = true;
		}
	}, [item_count]); */
	useEffect(() => {});
	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div className={styles.container}>
				<div className={styles.item_Image_Container}>
					<First_Section_List />
				</div>
				<div className={styles.item_details_Container}>
					<Second_Section_List item={item} />
				</div>
				<div className={styles.third_section_list_Container}>
					<Third_Section_List
						item={item}
						item_count={item_count}
						set_itemCount={set_itemCount}
					/>
				</div>
				<div>
					<Button onClick={addItem}>Add</Button>
				</div>
			</div>
		</div>
	);
};

export default List;
