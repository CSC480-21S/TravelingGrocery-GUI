import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//Styles
import makeStyles from "./Third_Section_List_styles";

const Third_Section_List = ({ setting_boolean, set_Setting_bolean }) => {
	const styles = makeStyles();
	const [count, setCount] = useState(0);

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
