import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
//Material UI
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Typography from "@material-ui/core/Typography";
//Local imports
import AddItem from "./Add_Item/Add_item";
import Confirm from "./Confirm/Confirm";
import Item from "./List/Item";
import makeStyles from "./Edit_List_styles";
//Actions
import { set_list_to_be_updated } from "../../../actions/actions";

const EditList = ({ set_isEdit }) => {
	const dispatch = useDispatch();
	const styles = makeStyles();
	const history = useHistory();
	const location = useLocation();

	//Get List to be updated
	const [new_Items, set_new_Item] = useState(
		useSelector((state) => state.list_toUpdate)
	);

	//REMOVE ITEMS FROM THE LIST IF CHECK MARK BOOLEAN IS TRUE
	const handleDelete = () => {
		//Update item.delete new_Items
		set_new_Item(
			new_Items.map((item) => {
				if (item.isChecked) item.delete = true;
				return item;
			})
		);
	};
	const handleCancel = () => {
		set_isEdit(false);
	};
	//UPTADE REDUX STATE (LIST_TOUPDATE) WHEN THE COMPONENT IS RENDERED
	useEffect(() => {
		dispatch(set_list_to_be_updated(new_Items));
	}, [dispatch, new_Items]);

	useEffect(() => {
		if (new_Items.length === 0) history.push(`${location.pathname}/store`);
	}, [history, location.pathname, new_Items.length]);
	return (
		<div className={styles.mainContainer}>
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
					<Button onClick={handleCancel} style={{ textTransform: "none" }}>
						Cancel
					</Button>
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
				<AddItem new_Items={new_Items} />
			</div>
			<div>
				{new_Items.map((item) =>
					item.delete === false ? (
						<Item
							item={item}
							set_new_Item={set_new_Item}
							new_Items={new_Items}
						/>
					) : (
						<></>
					)
				)}
			</div>
			<div className={styles.confirm}>
				<Confirm new_Items={new_Items} set_isEdit={set_isEdit} />
			</div>
		</div>
	);
};

export default EditList;
