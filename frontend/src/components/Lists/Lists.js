import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
//Components
import Regular_List from "./Regular_List/Regular_List";
import { list_getItems } from "../../actions/actions";
const Lists = () => {
	const items = useSelector((state) => state.lists); //get items
	const shoppingListID = useSelector((state) => state.homePage.shoppingListID);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(list_getItems(shoppingListID));
		return dispatch(list_getItems(shoppingListID));
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
