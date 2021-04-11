import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

//API
import { list_addItemList } from "../../../../api/api";
import { list_updateItemList } from "../../../../api/api";

//ACTIONS
import { set_fromStore } from "../../../../actions/actions";
import { list_getItems } from "../../../../actions/actions";

const Confirm = ({ new_Items, set_isEdit }) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //token from google login
	const dispatch = useDispatch();
	const url = "http://pi.cs.oswego.edu:9081/list";
	const shoppingListID = useSelector(
		(state) => state.active_list.shoppingListID
	);

	const handleSaveChanges = async () => {
		let list_create = { listItems: [] };
		let list_delete = { listItems: [] };
		let list_update = { listItems: [] };

		new_Items.map((item) => {
			if (item.delete) {
				var temp = item.itemName;
				list_delete.listItems.push(temp);
			}
			if (item.create && !item.delete) {
				var create = item;
				delete create.isChecked;
				delete create.delete;
				delete create.create;
				delete create.update;
				delete create.fromStore;
				list_create.listItems.push(create);
			}
			if (item.update && !item.create && !item.delete) {
				var update = item;
				delete update.isChecked;
				delete update.delete;
				delete update.create;
				delete update.update;
				delete update.fromStore;
				list_update.listItems.push(update);
			}
			return item;
		});

		/* console.log("CREATE: " + JSON.stringify(list_create));
		console.log("UPDATE: " + JSON.stringify(list_update));
		console.log("DELETE: " + JSON.stringify(list_delete)); */

		if (list_create.listItems.length > 0)
			await list_addItemList(shoppingListID, list_create, token);
		if (list_update.listItems.length > 0)
			await list_updateItemList(shoppingListID, list_update, token);

		await fetch(`${url}/${shoppingListID}/items`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			method: "DELETE",
			body: JSON.stringify(list_delete),
		});
		//await list_deleteItemList(shoppingListID, list_delete);
		dispatch(set_fromStore(false));
		dispatch(list_getItems(shoppingListID, token));
		set_isEdit(false);
	};

	return (
		<div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
			<Button
				style={{
					background: "#222258",
					borderRadius: "10px",
					fontFamily: "Inter",
					fontWeight: "500px",
					color: "#FFFFFF",
					height: "40px",
					width: "100%",
				}}
				onClick={handleSaveChanges}
			>
				Save Changes
			</Button>
		</div>
	);
};

export default Confirm;
