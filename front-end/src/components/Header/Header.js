import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
//hooks
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
//Components or local imports
import Search_Bar from "./Search_Bar/Search_Bar";
//Libraries
import makeStyles from "./Header_styles";
import Profile from "./Profile";

const Header = () => {
	const styles = makeStyles();
	const location = useLocation();
	const history = useHistory();

	const title = useSelector((state) => state.homePage.name); //gets the name of the list clicked
	const profile = useSelector((state) => state.login); //gets profile info from Google login

	const [open, setOpen] = useState(false); //Boolean that determines the state of Dialog/Profile component

	const handleProfile = () => {
		setOpen(true);
	};
	const handleProfileOnClose = () => {
		setOpen(false);
	};
	const handleBack = () => {
		history.goBack();
	};

	//Create a separate component for user's lists
	//The name of the component as a prop to List
	//Create a new element in the store that contains the name of the list
	//Once you have the name you can access it from the header

	return (
		<div>
			<Grid container spacing={3} className={styles.root}>
				<Grid item xs={2}>
					{" "}
					{/* Back Button */}
					{location.pathname === "/User/Lists/listName" ||
					location.pathname === "/items" ||
					location.pathname === "/edit" ? (
						<IconButton onClick={handleBack}>
							<ArrowBackIcon />
						</IconButton>
					) : (
						<div></div>
					)}
				</Grid>
				<Grid item xs={7}>
					{" "}
					{/* title */}
					{location.pathname === "/home" ? (
						<Typography className={styles.main}>Dashboard</Typography>
					) : location.pathname === "/User/Lists/listName" ? (
						<Typography className={styles.main}>{title}</Typography>
					) : location.pathname === "/items" ? (
						<Typography className={styles.main}>Items</Typography>
					) : location.pathname === "/edit" ? (
						<Typography className={styles.main}>{title}</Typography>
					) : null}
				</Grid>
				<Grid item xs={3}>
					{" "}
					{/* Profile Picture */}
					{true ? (
						<IconButton className={styles.item_login} onClick={handleProfile}>
							<Avatar
								alt="Test"
								src={profile.profileObj.imageUrl}
								variant="circular"
							/>
						</IconButton>
					) : null}
					<Profile open={open} onClose={handleProfileOnClose} />
				</Grid>
				<Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
					{" "}
					{/* Search Bar */}
					{location.pathname === "/User/Lists/listName" ? <Search_Bar /> : null}
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;
