import React, { useEffect, useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Components
import RegularList from "./Regular_List/Regular_List";
import EditList from "./Edit_List/Edit_List";
//Actions
import { list_getItems } from "../../actions/actions";

const Lists = () => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //user access Token
	const items = useSelector((state) => state.lists); //get items
	const fromStore = useSelector((state) => state.fromStore);
	const [isEdit, set_isEdit] = useState(false);
	const shoppingListID = useSelector(
		(state) => state.active_list.shoppingListID
	);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => dispatch(list_getItems(shoppingListID, token)); //Update List when closing component
	}, [dispatch, shoppingListID]);

	return (
		<>
			<div>
				{isEdit || fromStore ? (
					<EditList items={items} set_isEdit={set_isEdit} />
				) : (
					<RegularList items={items} set_isEdit={set_isEdit} />
				)}
			</div>
		</>
	);
};

export default Lists;
