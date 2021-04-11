//Regular imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";

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
//API
const List = ({ item, items }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();

	const [item_count, set_itemCount] = useState(1);
	const [bol, setBol] = useState(false);
	const addItem = () => {
		const temp = {
			itemName: item.name,
			itemNote: "",
			quantityItem: item_count,
			isChecked: false,
			delete: false,
			create: true,
			update: false,
			regularItem: false,
		};
		dispatch(listToBeUpdated_AddItem(temp)); //Add item to the list thats going to be updated
		dispatch(set_fromStore(true)); // set bolean indicating that the item came from the store
		setBol(true); //Snack bar boolean
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
					<Button
						onClick={addItem}
						style={{ textTransform: "none" }}
						startIcon={<AddIcon />}
					>
						Add
					</Button>
					<ThirdSectionList
						item={item}
						item_count={item_count}
						set_itemCount={set_itemCount}
					/>
				</div>
			</div>
			<Snackbar
				open={bol}
				onClose={() => setBol(false)}
				autoHideDuration={2000}
				message={`${item.name} has been added`}
			></Snackbar>
		</div>
	);
};

export default List;
