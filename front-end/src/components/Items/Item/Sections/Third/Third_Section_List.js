import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//Local Imports
import makeStyles from "./Third_Section_List_styles";

const Third_Section_List = ({ item_count, set_itemCount }) => {
	const styles = makeStyles();

	return (
		<div>
			{/* Item Count Buttons */}
			<ButtonGroup className={styles.group_button}>
				<Button
					className={styles.minus}
					onClick={() =>
						item_count > 0 ? set_itemCount(item_count - 1) : item_count
					}
				>
					-
				</Button>
				<Button className={styles.count}>{item_count}</Button>
				<Button
					className={styles.plus}
					onClick={() => set_itemCount(item_count + 1)}
				>
					+
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default Third_Section_List;