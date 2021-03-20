import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//Local Imports
import { update_Item } from "../../../../../../api/api";

//Styles
import makeStyles from "./Third_Section_List_styles";

const Third_Section_List = ({ item_count, set_Item_count }) => {
	const styles = makeStyles();

	const increment = () => {
		set_Item_count(1 + +item_count);
	};
	//Set Count is ASYNC so you have to wait before getting an updated value
	const decrement = () => {
		set_Item_count(item_count - 1);
	};

	// update count in JSON server everytime count changes

	/* try {
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
		} */

	return (
		<div>
			<div>
				{/* Item Count Buttons */}
				<ButtonGroup className={styles.group_button}>
					<Button className={styles.minus} onClick={() => decrement()}>
						-
					</Button>
					<Button className={styles.count} disabled>
						{item_count}
					</Button>
					<Button className={styles.plus} onClick={() => increment()}>
						+
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default Third_Section_List;
