import React from "react";
import { useSelector } from "react-redux";

import { update_user_item } from "../../../../api/api";

const Confirm = ({ new_Items }) => {
	const user_id = useSelector((state) => state.login.profileObj.email);
	const list_id = useSelector((state) => state.homePage.name);

	const handleSaveChanges = () => {
		new_Items.map((item) => {
			delete item.isChecked;
			console.log("from item: \n" + JSON.stringify(item));
		});
		console.log("from confirm: \n" + JSON.stringify(new_Items));
		update_user_item(new_Items, user_id, list_id);
	};
	return (
		<div>
			<button onClick={handleSaveChanges}>Save Changes</button>
		</div>
	);
};

export default Confirm;
