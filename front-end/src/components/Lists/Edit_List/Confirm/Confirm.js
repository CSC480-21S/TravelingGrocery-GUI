import React from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

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
