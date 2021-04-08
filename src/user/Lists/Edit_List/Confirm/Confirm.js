import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

//API
import { list_addItemList } from "../../../../api/api";
import { list_deleteItemList } from "../../../../api/api";
import { list_updateItemList } from "../../../../api/api";

//ACTIONS
import { set_fromStore } from "../../../../actions/actions";

const Confirm = ({ new_Items, set_isEdit }) => {
	const dispatch = useDispatch();

	const shoppingListID = useSelector(
		(state) => state.active_list.shoppingListID
	);

	const handleSaveChanges = async () => {
		let list_create = { listItems: [] };
		let list_delete = { listItems: [] };
		let list_update = { listItems: [] };

		new_Items.map((item) => {
			if (item.delete && !item.fromStore) {
				var temp = item;
				delete temp.isChecked;
				delete temp.delete;
				delete temp.create;
				delete temp.update;
				delete temp.fromStore;
				list_delete.listItems.push(temp.itemName);
			}
			if (item.create) {
				var create = item;
				delete create.isChecked;
				delete create.delete;
				delete create.create;
				delete create.update;
				delete create.fromStore;
				list_create.listItems.push(create);
			}
			if (item.update) {
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

		console.log("CREATE: " + JSON.stringify(list_create));
		console.log("UPDATE: " + JSON.stringify(list_update));
		console.log("DELETE: " + JSON.stringify(list_delete));

		await list_addItemList(shoppingListID, list_create);
		await list_deleteItemList(shoppingListID, list_delete);
		await list_updateItemList(shoppingListID, list_update);

		dispatch(set_fromStore(false));
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
