import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//Styles
import makeStyles from "./Third_Section_List_styles";

const ThirdSectionList = ({ item_count, set_Item_count }) => {
	const styles = makeStyles();

	const increment = () => {
		set_Item_count(1 + +item_count);
	};
	const decrement = () => {
		set_Item_count(item_count - 1);
	};

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

export default ThirdSectionList;
