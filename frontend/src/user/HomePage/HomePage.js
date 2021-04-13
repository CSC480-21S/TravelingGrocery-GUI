//Libraries
import { React, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//Styles
import makeStyles from "../../styles/HomePage";
//Components
import CreateList from "./CreateList";
//Actions
import { sendList } from "../../actions/actions";
import { list_get } from "../../actions/actions";
import { list_getItems } from "../../actions/actions";

const HomePage = () => {
	const dispatch = useDispatch();
	const styles = makeStyles();
	const history = useHistory();

	const profile = useSelector((state) => state.user.profile); //gets profile info from Google login
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //token from google login
	const lists = useSelector((state) => state.list_users); // gets the lists from server
	const [list_share, setListShare] = useState([]);
	const [list_finished, setListFinish] = useState([]);
	const [open, setOpen] = useState(false);

	//-------------------  Testing  -------------------
	console.log(JSON.stringify(lists));
	//-------------------  HANDLE DIALOG BOXES  -------------------
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	//-------------------  Handle list onCLick -------------------
	const handleList = (list) => {
		dispatch(sendList(list));
		dispatch(list_getItems(list.shoppingListID, token));
		history.push(`/list/${list.listName}`);
	};

	//------------------- USE EFFECTS --------------------
	useEffect(async () => {
		//fetch lists on Mount
		dispatch(list_get(token));
	}, [dispatch]);

	useEffect(() => {
		const finishedList = [];
		lists.forEach((list) => {
			if (list.listShoppedFlag === 1) {
				finishedList.push(list);
			}
		});

		setListFinish(finishedList);
	}, [lists]);

	useEffect(() => {
		const auth = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
		//console.log(JSON.stringify(auth));
	}, []);
	return (
		<div className={styles.superContainer}>
			{/* User Regular Lists */}
			{/* <p>{profile.tokenObj.id_token}</p> */}
			<Typography className={styles.text}>Hi {profile.name}</Typography>
			<div className={styles.lists}>
				{lists.map((list) =>
					list != null ? (
						<div item key={list.id}>
							<Button
								className={styles.regularButton}
								onClick={() => handleList(list)}
							>
								{list.listName}
							</Button>
						</div>
					) : (
						<></>
					)
				)}
				<div>
					{" "}
					{/* Add List Button */}
					<IconButton className={styles.iconButton} onClick={handleClickOpen}>
						{" "}
						{/*This is the PopUp menu*/}
						<AddIcon />
					</IconButton>
					<CreateList open={open} onClose={handleClose} />
				</div>
			</div>
			{/* Shared Item List */}
			{list_share.length > 0 ? (
				<>
					<Typography className={styles.text}>
						{list_share.length < 2 ? "Shared List" : "Shared Lists"}
					</Typography>
					<div className={styles.lists}>
						<div>
							<Button className={styles.regularButton}>Shared List</Button>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
			{list_finished.length > 0 ? (
				<>
					<Typography className={styles.text}>
						{list_finished.length < 2 ? "Finished List" : "Finished Lists"}
					</Typography>
					<div item className={styles.lists}>
						{lists.map((obj) =>
							obj.listShoppedFlag === 1 ? (
								<div key={obj.id}>
									<Button className={styles.finishedButton}>
										{obj.listName}
									</Button>
								</div>
							) : null
						)}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default HomePage;
