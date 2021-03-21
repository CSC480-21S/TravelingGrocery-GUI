import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_list_to_be_updated } from "../../../actions/actions";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Typography from "@material-ui/core/Typography";
//Local imports
import Add_Item from "./Add_Item/Add_item";
import Confirm from "./Confirm/Confirm";
import Item from "./List/Item";
import makeStyles from "./Edit_List_styles";

const Edit_List = () => {
	const dispatch = useDispatch();
	const styles = makeStyles();
	//ADD CHECK MARK BOOLEAN TO A NEW LIST OBJECT
	const [new_Items, set_new_Item] = useState(
		useSelector((state) => state.list_toUpdate)
	);
	//REMOVE ITEMS FROM THE LIST IF CHECK MARK BOOLEAN IS TRUE
	const handleDelete = () => {
		set_new_Item(new_Items.filter((item) => item.isChecked === false));
	};

	//UPTADE REDUX STATE (LIST_TOUPDATE) WHEN THE COMPONENT IS RENDERED
	useEffect(() => {
		//console.log("FROM EDIT LISTS: " + JSON.stringify(new_Items));
		dispatch(set_list_to_be_updated(new_Items));
	}, []);
	useEffect(() => {
		//console.log("LIST: " + JSON.stringify(new_Items));
	}, [new_Items]);

	return (
		<div style={{ marginTop: "0px" }}>
			<div className={styles.firstContainer}>
				<div>
					<Typography
						style={{
							fontFamily: "Inter",
							fontStyle: "normal",
							fontWeight: 600,
						}}
					>
						Editing . . .
					</Typography>
				</div>
				<div className={styles.delete}>
					<Button
						onClick={handleDelete}
						className={styles.delete_button}
						startIcon={<DeleteOutlinedIcon />}
					>
						Delete
					</Button>
				</div>
			</div>
			<div>
				<Add_Item set_new_Item={set_new_Item} new_Items={new_Items} />
			</div>
			<div>
				{new_Items.map((item) => (
					<Item item={item} set_new_Item={set_new_Item} new_Items={new_Items} />
				))}
			</div>
			<div>
				<Confirm new_Items={new_Items} />
			</div>
		</div>
	);
};

export default Edit_List;
