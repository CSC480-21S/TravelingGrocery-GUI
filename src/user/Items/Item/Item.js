//Regular imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//Actions

//Components
import FirstSectionList from "./Sections/First/First_Section_List";
import SecondSectionList from "./Sections/Second/Second_Section_List";
import ThirdSectionList from "./Sections/Third/Third_Section_List";

//Styles
import makeStyles from "./item_styles";
import { Button } from "@material-ui/core";
//Actions
import { listToBeUpdated_AddItem } from "../../../actions/actions";
import { set_fromStore } from "../../../actions/actions";
const List = ({ item }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();

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

	useEffect(() => {});
	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div className={styles.container}>
				<div className={styles.item_Image_Container}>
					<FirstSectionList />
				</div>
				<div className={styles.item_details_Container}>
					<SecondSectionList item={item} />
				</div>
				<div className={styles.third_section_list_Container}>
					<ThirdSectionList
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
