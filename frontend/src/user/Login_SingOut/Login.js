import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//Actions
import { send_Google_User_info } from "../../actions/actions";

import logo from "../../images/logo.png";

import "./Login.css";
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	//when Login works
	const onSuccess = (response) => {
		dispatch(send_Google_User_info(response));
		try {
			/* axios
				.post("http://pi.cs.oswego.edu:7808/user/records", {
					token: response.tc.id_token,
				})
				.then((response) =>
					console.log(`response: ${JSON.stringify(response)}`)
				); */
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
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
						alt=""
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
