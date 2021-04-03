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
import Profile from "./Profile/Profile";

const Header = () => {
	const styles = makeStyles();
	const location = useLocation();
	const history = useHistory();

	const title = useSelector((state) => state.active_list.listName); //gets the name of the list clicked
	const profile = useSelector((state) => state.user.profile); //gets profile info from Google login

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
					{location.pathname !== "/home" ? (
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
					) : location.pathname === `/list/${title}` ? (
						<div className={styles.title}>
							<Typography className={styles.main}>{title}</Typography>
							<IconButton onClick={() => setOpen2(true)}>
								<EditOutlinedIcon style={{ fontSize: "20px" }} />
							</IconButton>
							<Set_Title open={open2} onClose={handleTitleOnClose} />
						</div>
					) : location.pathname === `/list/${title}/store` ? (
						<Typography className={styles.main}>Store</Typography>
					) : (
						<>Error</>
					)}
				</div>
				<div className={styles.item_three}>
					{" "}
					{/* Profile Picture */}
					{true ? (
						<IconButton className={styles.item_login} onClick={handleProfile}>
							<Avatar alt="Test" src={profile.imageUrl} variant="circular" />
						</IconButton>
					) : null}
					<Profile open={open} onClose={handleProfileOnClose} />
				</div>
				<div className={styles.item_four}>
					{" "}
					{/* Search Bar */}
					{/* {location.pathname === `/list/${title}` ||
					location.pathname === `/list/${title}/edit` ? (
						<Search_Bar />
					) : null} */}
				</div>
			</div>
		</div>
	);
};

export default Header;
