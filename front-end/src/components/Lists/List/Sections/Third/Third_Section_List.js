import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
//Local Imports
import { update_Item } from "../../../../../api/api";
import { fecth_list_items } from "../../../../../actions/actions";
//Styles
import makeStyles from "./Third_Section_List_styles";

const Third_Section_List = ({ setting_boolean, set_Setting_bolean, item }) => {
	const item_count = item.count;
	const styles = makeStyles();
	const dispatch = useDispatch();
	const [count, setCount] = useState(item_count);
	const [canUpdate, set_canUpdate] = useState(item_count);
	const list_Name = useSelector((state) => state.homePage.name); //gets name of the list
	const user_email = useSelector((state) => state.login.profileObj.email); // gets the email of the user

	console.log("Render count:" + count);

	const increment = () => {
		setCount(1 + +count);
		set_canUpdate(!canUpdate);
	};
	//Set Count is ASYNC so you have to wait before getting an updated value
	const decrement = () => {
		setCount(count - 1);
		set_canUpdate(!canUpdate);
	};

	useEffect(async () => {
		// update count in JSON server everytime count changes
		try {
			console.log("When count: " + count);
			const updated_item = {
				listId: item.listId,
				userId: item.userId,
				name: item.name,
				count: count.toString(),
			};
			await update_Item(item.id, updated_item);
		} catch (error) {
			console.log(error.message);
		}
	}, [count]);

	const handle_threeDots_button = () => {
		set_Setting_bolean(!setting_boolean);
	};

	return (
		<div>
			<div>
				{/* Three Dots button (Options) */}
				<Button className={styles.three_dots} onClick={handle_threeDots_button}>
					<MoreHorizIcon />
				</Button>
			</div>
			<div>
				{/* Item Count Buttons */}
				<ButtonGroup className={styles.group_button}>
					<Button className={styles.minus} onClick={() => decrement()}>
						-
					</Button>
					<Button className={styles.count}>{count}</Button>
					<Button className={styles.plus} onClick={() => increment()}>
						+
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default Third_Section_List;
