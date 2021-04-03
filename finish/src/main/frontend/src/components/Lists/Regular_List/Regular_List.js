import React, { useState, useEffect } from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
//Import Local Components
import Regular_Item from "./List/Regular_Item";
import Start_Shooping from "./Start_Shooping/Start_Shooping";
import makeStyles from "./Regular_List_styles";
import Delete_List from "./Delete_List/Delete_List";
import Share_List from "./Share_List/Share_List";
import Search_Bar from "./Search_Bar/Search_Bar";
//Actions
import { set_list_to_be_updated } from "../../../actions/actions";
import { sendList } from "../../../actions/actions";

const Regular_Lists = ({ items, set_isEdit }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const [onDelete, set_onDelete] = useState(false);
	const [onShare, set_onShare] = useState(false);
	const [filteredList, set_fliteredList] = useState([]);

	const user = useSelector((state) => state.user.profile); //gets user information from reducer
	const shoppingListID = useSelector(
		(state) => state.active_list.shoppingListID
	);

	const handleEdit = () => {
		const temp = items.map((item) => {
			delete item.shoppingListID;
			delete item.itemMissedFlag;
			item.isChecked = false;
			item.delete = false;
			item.create = false;
			item.update = false;
			item.fromStore = false;
			return item;
		});
		dispatch(set_list_to_be_updated(temp));
		set_isEdit(true);
	};
	const handleDelete = () => {
		set_onDelete(true);
	};
	const handleShare = () => {
		set_onShare(true);
	};

	useEffect(() => {}, []);
	return (
		<div className={styles.root}>
			<Delete_List
				onDelete={onDelete}
				set_onDelete={set_onDelete}
				shoppingListID={shoppingListID}
			/>
			<Share_List
				onShare={onShare}
				set_onShare={set_onShare}
				shoppingListID={shoppingListID}
			/>
			<div>
				<div className={styles.searchBar}>
					<Search_Bar items={items} set_fliteredList={set_fliteredList} />
				</div>
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
								onClick={handleShare}
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
			{items.length < 1 ? (
				<div style={{ paddingLeft: 20, paddingRight: 20 }}>
					<Button className={styles.button} onClick={handleEdit}>
						<AddIcon fontSize="inherit" /> Add Item
					</Button>
				</div>
			) : (
				<>
					<div>
						{filteredList.length === 0
							? items.map((item) => <Regular_Item item={item} />)
							: filteredList.map((item) => <Regular_Item item={item} />)}
					</div>

					<div>
						<Start_Shooping />
					</div>
				</>
			)}
		</div>
	);
};

export default Regular_Lists;
