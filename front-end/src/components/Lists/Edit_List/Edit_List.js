import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_list_to_be_updated } from "../../../actions/actions";
//Local imports
import Add_Item from "./Add_Item/Add_item";
import Confirm from "./Confirm/Confirm";
import Item from "./List/Item";

const Edit_List = () => {
	const dispatch = useDispatch();

	//ADD CHECK MARK BOOLEAN TO A NEW LIST OBJECT
	const [new_Items, set_new_Item] = useState(
		useSelector((state) => state.list_toUpdate)
	);
	//REMOVE ITEMS FROM THE LIST IF CHECK MARK BOOLEAN IS TRUE
	const handleDelete = () => {
		set_new_Item(new_Items.filter((item) => item.isChecked === false));
	};

	//UPTADE REDUX STATE (LIST_TOUPDATE) WHEN THE COMPONENT IS RENDERED
	useEffect(() => {
		//console.log("FROM EDIT LISTS: " + JSON.stringify(new_Items));
		dispatch(set_list_to_be_updated(new_Items));
	}, []);
	useEffect(() => {
		//console.log("LIST: " + JSON.stringify(new_Items));
	}, [new_Items]);

	return (
		<div>
			<div>
				<Add_Item set_new_Item={set_new_Item} new_Items={new_Items} />
			</div>
			<div>
				{new_Items.map((item) => (
					<Item item={item} set_new_Item={set_new_Item} new_Items={new_Items} />
				))}
			</div>
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
			<div>
				<Confirm new_Items={new_Items} />
			</div>
		</div>
	);
};

export default Edit_List;
