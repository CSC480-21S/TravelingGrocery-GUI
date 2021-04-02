import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";

import { update_user_item } from "../../../../api/api";

import { update_Item } from "../../../../api/api";
import { delete_Item } from "../../../../api/api";
import { add_Item } from "../../../../api/api";
import { add_item_to_list } from "../../../../api/api";
import { pink } from "@material-ui/core/colors";

const Confirm = ({ new_Items, items_ToBeDeleted, set_isEdit }) => {
	const user_id = useSelector((state) => state.user.email);

	const handleSaveChanges = () => {
		//Handle items to be deleted
		items_ToBeDeleted.map((item) => {
			console.log(`ITEMS TO BE DELETED: ${JSON.stringify(items_ToBeDeleted)}`);
			if (item !== null) {
				console.log(`item deleted: ${JSON.stringify(item)}`);
				delete item.isChecked;
				delete item.isStoreItem;
				delete_Item(item.id);
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
				console.log(`ITEMS TO BE UPDTED: ${JSON.stringify(item)}`);
				update_Item(item.id, item);
			}
			//console.log("from item: \n" + JSON.stringify(item));
		});

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
