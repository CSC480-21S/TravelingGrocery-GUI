import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//Material UI
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
//API
import { list_update } from "../../../../api/api";
//ACTIONS
import { store_navigation } from "../../../../actions/actions";
//Styles
import makeStyles from "./ShoppingDialogStyles";

const ShoopingDialog = ({ open, setOpen, items }) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const currentList = useSelector((state) => state.active_list);
	const dispatch = useDispatch();
	const history = useHistory();
	const styles = makeStyles();

	const handleClose = () => {
		setOpen(false);
	};
	const requestShooper = async () => {
		currentList.listPublicStatus = "1";
		console.log(JSON.stringify(currentList));
		await list_update(currentList.shoppingListID, currentList, token);
		setOpen(false);
	};
	const startShooping = () => {
		let lists = { lists: [] };
		let list = {
			shoppingListID: "",
			itemNameArray: [],
			itemQuantityArray: [],
		};
		items.map((item) => {
			list.shoppingListID = item.shoppingListID;
			list.itemNameArray.push(item.itemName);
			list.itemQuantityArray.push(item.quantityItem);
		});
		lists.lists.push(list);
		dispatch(store_navigation(lists, token));
		history.push("/user/navigation");
	};
	return (
		<div>
			<Dialog fullScreen open={open} onClose={handleClose}>
				<div className={styles.container}>
					<div className={styles.closeIconContainer}>
						<IconButton onClick={handleClose} className={styles.closeIcon}>
							<CloseIcon />
						</IconButton>
					</div>
					<div className={styles.btnContainer}>
						<div className={styles.btn}>
							<Button
								onClick={requestShooper}
								className={styles.requestShopper}
							>
								Request a Shopper
							</Button>
						</div>
						<div className={styles.btn}>
							<Button onClick={startShooping} className={styles.startShopping}>
								Start Shopping
							</Button>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default ShoopingDialog;
