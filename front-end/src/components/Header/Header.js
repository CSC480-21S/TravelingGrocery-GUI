import Avatar from "@material-ui/core/Avatar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

//hooks
import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
//Components or local imports
import Search_Bar from "./Search_Bar/Search_Bar";
import Set_Title from "./Set_Title/Set_Title";
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
	const [open2, setOpen2] = useState(false); //Boolean that determines the state of Dialog/Set_Title component
	//Profile
	const handleProfile = () => {
		setOpen(true);
	};
	const handleProfileOnClose = () => {
		setOpen(false);
	};
	const handleBack = () => {
		history.goBack();
	};
	//Title
	const handleTitleOnClose = () => {
		setOpen2(false);
	};

	//Create a separate component for user's lists
	//The name of the component as a prop to List
	//Create a new element in the store that contains the name of the list
	//Once you have the name you can access it from the header

	return (
		<div>
			<div className={styles.root}>
				<div className={styles.item_one}>
					{" "}
					{/* Back Button */}
					{location.pathname === "/User/Lists/listName" ||
					location.pathname === "/items" ||
					location.pathname === "/edit" ? (
						<IconButton onClick={handleBack}>
							<ArrowBackIcon />
						</IconButton>
					) : null}
				</div>
				<div className={styles.item_two}>
					{" "}
					{/* title */}
					{location.pathname === "/home" ? (
						<Typography className={styles.main}>Dashboard</Typography>
					) : location.pathname === "/User/Lists/listName" ? (
						<div className={styles.title}>
							<Typography className={styles.main}>{title}</Typography>
							<IconButton onClick={() => setOpen2(true)}>
								<EditOutlinedIcon style={{ fontSize: "20px" }} />
							</IconButton>
							<Set_Title open={open2} onClose={handleTitleOnClose} />
						</div>
					) : location.pathname === "/items" ? (
						<Typography className={styles.main}>Items</Typography>
					) : location.pathname === "/edit" ? (
						<Typography className={styles.main}>{title}</Typography>
					) : null}
				</div>
				<div className={styles.item_three}>
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
				</div>
				<div className={styles.item_four}>
					{" "}
					{/* Search Bar */}
					{location.pathname === "/User/Lists/listName" ||
					location.pathname === "/edit" ? (
						<Search_Bar />
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Header;
