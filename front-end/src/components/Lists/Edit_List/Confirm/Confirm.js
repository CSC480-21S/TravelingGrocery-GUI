import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";

import { update_user_item } from "../../../../api/api";

import { update_Item } from "../../../../api/api";
import { delete_Item } from "../../../../api/api";
import { add_Item } from "../../../../api/api";
import { add_item_to_list } from "../../../../api/api";

const Confirm = ({ new_Items, items_ToBeDeleted }) => {
	const user_id = useSelector((state) => state.login.profileObj.email);
	const list_id = useSelector((state) => state.homePage.name);

	const temp2 = {
		lists: [
			{
				shoppingListID: 5,
				itemNameArray: ["turkey jerky", "grape juice", "ranch", "honey"],
				itemQuantityArray: [3, 1, 6, 6],
			},
			{
				shoppingListID: 200,
				itemNameArray: ["spices", "pita bread"],
				itemQuantityArray: [1, 4],
			},
		],
	};
	const handleSaveChanges = () => {
		//Handle items to be deleted
		items_ToBeDeleted.map((item) => {
			if (item !== null) {
				delete item.isChecked;
				delete_Item(item.id, item);
			}
		});
		//Handle items to be updated
		new_Items.map((item) => {
			delete item.isChecked;
			if (item.isStoreItem) {
				delete item.isChecked;
				delete item.isStoreItem;
				add_item_to_list(user_id, item);
			} else {
				update_Item(item.id, item);
			}
			//console.log("from item: \n" + JSON.stringify(item));
		});
		console.log("from confirm: \n" + JSON.stringify(new_Items));
		//Handle items to be created

		/* axios
			.post("http://localhost:9080/store/nav", temp2)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			}); */
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
