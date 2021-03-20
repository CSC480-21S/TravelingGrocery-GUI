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
		useSelector((state) =>
			state.lists.map((item) => {
				item.isChecked = false;
				return item;
			})
		)
	);
	//REMOVE ITEMS FROM THE LIST IF CHECK MARK BOOLEAN IS TRUE
	const handleDelete = () => {
		set_new_Item(new_Items.filter((item) => item.isChecked === false));
	};

	//UPTADE LIST OF ITEMS EVERYTIME THE LIST CHANGES
	useEffect(() => {
		console.log("FROM EDIT LISTS: " + JSON.stringify(new_Items));
	}, []);

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
				<Confirm set_new_Item={set_new_Item} />
			</div>
		</div>
	);
};

export default Edit_List;
