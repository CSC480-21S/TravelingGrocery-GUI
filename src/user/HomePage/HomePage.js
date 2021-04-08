//Libraries
import { React, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
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
    document.title = "Dashboard";

	const dispatch = useDispatch();
	const styles = makeStyles();
	const history = useHistory();

	const lists = useSelector((state) => state.list_users); // gets the lists from server
	const profile = useSelector((state) => state.user.profile); //gets profile info from Google login
	//console.log("Profile from HomePage:" + profile);
	//console.log("Lists From HomePage: " + JSON.stringify(lists));

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleList = (list) => {
		dispatch(sendList(list));
		dispatch(list_getItems(list.shoppingListID));
		history.push(`/list/${list.listName}`);
	};

	useEffect(() => {
		//fetch lists on Mount
		dispatch(list_get());
	}, [dispatch]);

	useEffect(() => {
		const auth = window.gapi.auth2.getAuthInstance();
		const user = auth.currentUser.get();
		console.log("GAPI FROM HOME: " + JSON.stringify(user.getBasicProfile()));
	});
	return (
		<Grid
			container
			className={styles.superContainer}
			direction="column"
			spacing={4}
		>
			{/* User Regular Lists */}
			{/* <p>{profile.tokenObj.id_token}</p> */}
			<Grid item className={styles.test}>
				<Typography className={styles.userName}>Hi {profile.name}</Typography>
				<Grid container spacing={2}>
					{lists.map((list) =>
						list != null ? (
							<Grid item key={list.id}>
								<Button
									className={styles.regularButton}
									onClick={() => handleList(list)}
								>
									{list.listName}
								</Button>
							</Grid>
						) : (
							<></>
						)
					)}
					<Grid item>
						{" "}
						{/* Add List Button */}
						<IconButton className={styles.iconButton} onClick={handleClickOpen}>
							{" "}
							{/*This is the PopUp menu*/}
							<AddIcon />
						</IconButton>
						<CreateList open={open} onClose={handleClose} />
					</Grid>
				</Grid>
			</Grid>
			{/* Shared Item List */}
			<Grid item className={styles.test}>
				<Typography className={styles.sharedList}>Shared List</Typography>
				<Grid container spacing={2}>
					<Grid item>
						<Button className={styles.regularButton}>Shared List</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item className={styles.test}>
				<Typography className={styles.sharedList}>Finished List</Typography>
				<Grid container spacing={2}>
					<Grid item>
						<Button className={styles.regularButton}>Finished List</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HomePage;
