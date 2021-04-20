import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//Styles
import makeStyles from "./Third_Section_List_styles";

const ThirdSectionList = ({ item_count, set_Item_count }) => {
	const styles = makeStyles();

	const increment = (e) => {
		set_Item_count(1 + +item_count);
		e.stopPropagation();
	};
	const decrement = (e) => {
		set_Item_count(item_count > 1 ? item_count - 1 : item_count);
		e.stopPropagation();
	};

	return (
		<div>
			<div>
				{/* Item Count Buttons */}
				<ButtonGroup className={styles.group_button}>
					<Button className={styles.minus} onClick={(e) => decrement(e)}>
						-
					</Button>
					<Button
						onClick={(e) => e.stopPropagation()}
						classes={{ disabled: styles.disabledCount, root: styles.count }}
					>
						{item_count}
					</Button>
					<Button className={styles.plus} onClick={(e) => increment(e)}>
						+
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default ThirdSectionList;
