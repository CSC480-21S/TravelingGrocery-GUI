//Libraries
import React from "react";
import { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
//Google Stuff
import { useGoogleLogout } from "react-google-login";
import { send_Google_User_info } from "../../actions/actions";
import { useDispatch } from "react-redux";
//Components or Local imports

//Styles
const Profile = ({ open, onClose }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleClose = () => {
		onClose();
	};
	const handleSignOut = () => {
		signOut();
		onClose();
	};

	const onLogoutSuccess = (response) => {
		console.log("Response from Google AUTH: " + response);
		//dispatch(send_Google_User_info(null));
		history.push("/login");
	};
	const onFailure = (error) => {
		console.log(error.message);
	};
	const { signOut } = useGoogleLogout({
		cliendId:
			"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
		onLogoutSuccess: onLogoutSuccess,
		onFailure: onFailure,
	});
	///=================================

	const handleLogin = () => {
		window.gapi.load("auth2", () => {
			/* console.log(
				"GET INSTANCE FORM PROFILE: " + window.gapi.auth2.getAuthInstance()
			); */
		});
	};

	useEffect(() => {
		handleLogin();
	}, []);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContentText>Test</DialogContentText>
			<Button onClick={handleSignOut}>Sign out</Button>
		</Dialog>
	);
};

export default Profile;