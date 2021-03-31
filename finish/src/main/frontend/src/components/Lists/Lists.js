import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Components
import Regular_List from "./Regular_List/Regular_List";
import { list_getItems } from "../../actions/actions";
//Actions
import { sendList } from "../../actions/actions";

const Lists = () => {
	const items = useSelector((state) => state.lists); //get items
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
				<Regular_List items={items} />
			</div>
		</>
	);
};

export default Lists;
