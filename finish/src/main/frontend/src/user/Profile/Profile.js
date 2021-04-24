import "../../styles/Profile.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Avatar from "@material-ui/core/Avatar";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const Profile = () => {
	document.title = "Profile";
	const email = useSelector((state) => state.user.profile.email);
	const name = useSelector((state) => state.user.profile.givenName);
	const lastName = useSelector((state) => state.user.profile.familyName);

	const imageURL = useSelector((state) => state.user.profile.imageUrl);

	const history = useHistory();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [openEnd, setOpenEnd] = useState(false);

	const handleClickOpenEnd = () => {
		setOpenEnd(true);
	};

	const handleCloseEnd = () => {
		setOpenEnd(false);
	};

	const onLogoutSuccess = () => {
		console.log("logout");
		history.push("/login");
	};
	const onFailure = () => {
		console.log("logout fail");
	};
	const { signOut } = useGoogleLogout({
		clientId:
			"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
		onLogoutSuccess: onLogoutSuccess,
		onFailure: onFailure,
	});

	const handleClick = () => {
		handleClose();
		handleClickOpenEnd();
	};

	return (
		<div className="Profile">
			<div className="containerTop">User Profile</div>

			<div className="containerImage">
				<img className="imgProfile" src={imageURL} alt="profileImg" />
			</div>

			<div className="containerUserInfo">
				<p>Email: {email}</p>
				<p>
					Name: {name} {lastName}
				</p>
			</div>

			<div className="containerButtons">
				<button className="logoutButton" onClick={signOut}>
					Logout
				</button>
				<p></p>
				<button className="deleteButton" onClick={handleClickOpen}>
					Delete Account
				</button>
			</div>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure you want to delete your profile?"}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						No
					</Button>
					<Button onClick={handleClick} color="primary" autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={openEnd}
				onClose={handleCloseEnd}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Profile Successfully deleted"}
				</DialogTitle>
				<DialogActions>
					<Button onClick={signOut} color="primary" autoFocus>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Profile;
