import React, { useEffect, useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Components
import Regular_List from "./Regular_List/Regular_List";
import Edit_List from "./Edit_List/Edit_List";
//Actions
import { list_getItems } from "../../actions/actions";
import { sendList } from "../../actions/actions";

const Lists = () => {
	const items = useSelector((state) => state.lists); //get items
	const fromStore = useSelector((state) => state.fromStore);
	const [isEdit, set_isEdit] = useState(false);
	const shoppingListID = useSelector(
		(state) => state.active_list.shoppingListID
	);
	const dispatch = useDispatch();

	useEffect(() => {
		//fetchList
		//Update List when closing component
		return dispatch(list_getItems(shoppingListID));
	}, []);
	useEffect(() => {
		//fetchList
		//Update List when closing component
	}, []);

	return (
		<>
			<div>
				{isEdit || fromStore ? (
					<Edit_List items={items} set_isEdit={set_isEdit} />
				) : (
					<Regular_List items={items} set_isEdit={set_isEdit} />
				)}
			</div>
		</>
	);
};

export default Lists;
