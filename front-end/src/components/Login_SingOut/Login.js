import { React, useEffect, useState } from "react";

import { useGoogleLogin } from "react-google-login";
import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
//Local components
import { send_Google_User_info } from "../../actions/actions";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [test, setTest] = useState("Empty");

	//when Login works
	const onSuccess = (response) => {
		console.log(`Login Success: currentUser ${response.profileObj}`);
		//console.log('Loaded: ' + loaded)
		dispatch(send_Google_User_info(response));
		setTest(response.profileObj.name);
		history.push("/home");
	};
	//When login is a failute
	const onFailure = (response) => {
		//console.log("Error: " + response);
	};

	const { signIn, loaded } = useGoogleLogin({
		onSuccess: onSuccess,
		clientId:
			"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
		isSignedIn: true,
		onFailure: onFailure,
		cookiePolicy: "single_host_origin",
		uxMode: "redirect",
	});
	//=================================

	return (
		<>
			<GoogleLogin
				clientId={
					"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com"
				}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				isSignedIn={true}
				cookiePolicy={"single_host_origin"}
				uxMode={"redirect"}
				redirectUri={"http://localhost:3000/login"}
			/>
			{/* <Button onClick={signIn} className="login_button">
				Login
			</Button> */}

			<p>THIS IS A TEST: {test}</p>
		</>
	);
};

export default Login;
