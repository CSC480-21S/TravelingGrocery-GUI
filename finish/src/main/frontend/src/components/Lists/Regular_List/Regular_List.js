import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Import Local Components
import Regular_Item from "./List/Regular_Item";
import Start_Shooping from "./Start_Shooping/Start_Shooping";
import makeStyles from "./Regular_List_styles";
import Delete_List from "./Delete_List/Delete_List";
//Actions
import { fetch_store_items } from "../../../actions/actions";
import { set_list_to_be_updated } from "../../../actions/actions";
import { list_getItems } from "../../../actions/actions";

const Regular_Lists = ({ items }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const [onDelete, set_onDelete] = useState(false);

	const user = useSelector((state) => state.login.profileObj); //gets user information from reducer
	const shoppingListID = useSelector((state) => state.homePage.shoppingListID);

	/* useEffect(() => {
		//Update when component is mounted
		dispatch(list_getItems(shoppingListID));
		return () => {
			//Update the list of item when the componenet disassembles
			dispatch(list_getItems(shoppingListID));
		};
	}, [dispatch]); */

	useEffect(() => {
		dispatch(fetch_store_items());
	}, []);

	const handleEdit = () => {
		const temp = items.map((item) => {
			item.isChecked = false;
			return item;
		});
		dispatch(set_list_to_be_updated(temp));
		history.push("/edit");
	};
	const handleDelete = () => {
		set_onDelete(true);
	};
	return (
		<div className={styles.root}>
			<Delete_List
				onDelete={onDelete}
				set_onDelete={set_onDelete}
				shoppingListID={shoppingListID}
			/>
			<div>
				<div className={styles.top_container}>
					<div>
						<Typography
							style={{
								fontFamily: "Inter",
								fontStyle: "normal",
								fontWeight: 600,
							}}
							className={styles.userName}
						>
							Hi {user.name}
						</Typography>
					</div>

					<div className={styles.buttons}>
						<div>
							<Button
								fontSize="small"
								startIcon={<DeleteForeverIcon />}
								className={styles.topIconButton1}
								onClick={handleDelete}
							>
								Delete
							</Button>
						</div>
						<div>
							<Button
								fontSize="small"
								startIcon={<ShareIcon />}
								className={styles.topIconButton2}
							>
								Share
							</Button>
						</div>
						<div>
							<Button
								fontSize="small"
								startIcon={<EditIcon />}
								className={styles.topIconButton3}
								onClick={handleEdit}
							>
								Edit
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				{items.map((item) => (
					<Regular_Item item={item} />
				))}
			</div>
			<div>
				<Start_Shooping />
			</div>
		</div>
	);
};

export default Regular_Lists;
