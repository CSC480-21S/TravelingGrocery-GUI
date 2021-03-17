import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
//local Imports
import { add_item_to_list } from "../../../../../api/api";
//Styles
import makeStyles from "./Third_Section_List_styles";

const Third_Section_List = ({ item }) => {
	const styles = makeStyles();
	const [count, setCount] = useState(1); //I need listname, item.name, etc
	const user_id = useSelector((state) => state.login.profileObj.email);
	const active_list = useSelector((state) => state.homePage.name);
	const new_Item = { listId: active_list, name: item.name, count: count };

	const handle_Add_item = () => {
		add_item_to_list(user_id, new_Item);
	};

	return (
		<div>
			<div>
				{/* Add button */}
				<Button
					startIcon={<AddIcon />}
					className={styles.three_dots}
					onClick={handle_Add_item}
				>
					Add
				</Button>
			</div>
			<div>
				{/* Item Count Buttons */}
				<ButtonGroup className={styles.group_button}>
					<Button
						className={styles.minus}
						onClick={() => (count > 0 ? setCount(count - 1) : count)}
					>
						-
					</Button>
					<Button className={styles.count}>{count}</Button>
					<Button className={styles.plus} onClick={() => setCount(count + 1)}>
						+
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default Third_Section_List;
