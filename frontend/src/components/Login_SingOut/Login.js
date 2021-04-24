import { React, useState } from "react";

import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
//Local components
import { send_Google_User_info } from "../../actions/actions";

/* import fingerguns from "../../images/fingerguns.png";
import memeber from "../../images/memeber.png";
import barrio from "../../images/barrio.png";
import thinking_monocle from "../../images/thinking_monocle.png"; */
import logo from "../../images/logo.png";

/* import { useSelector } from "react-redux";
import axios from "axios"; */
import "./Login.css";
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	//when Login works
	const onSuccess = (response) => {
		console.log(`Login Success: currentUser ${response.profileObj}`);
		console.log("Response: " + response.isSignedIn());
		dispatch(send_Google_User_info(response));
		history.push("/home");
	};
	//When login is a failute
	const onFailure = (response) => {
		console.log("Error: " + response);
	};

	return (
		<>
			<div>
				<div id="rectangle">
					<img
						src={logo}
						style={{
							alignContent: "center",
							height: "75px",
							paddingTop: "20px",
						}}
					/>
				</div>

				<p>hi</p>

				<div
					class="slideshow-container"
					style={{
						marginTtop: "100px",
						marginBottom: "50px",
					}}
				></div>
				<br />

				<GoogleLogin
					buttonText="Login"
					onSuccess={onSuccess}
					onFailure={onFailure}
					isSignedIn={true}
					uxMode={"redirect"}
				/>
			</div>
		</>
	);
};

export default Login;