import { React, useEffect, useState } from "react";

import { useGoogleLogin } from "react-google-login";
import { GoogleLogin } from "react-google-login";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
//Local components
import { send_Google_User_info } from "../../actions/actions";

import fingerguns from "../../images/fingerguns.png";
import memeber from "../../images/memeber.png";
import barrio from "../../images/barrio.png";
import thinking_monocle from "../../images/thinking_monocle.png";
import logo from "../../images/logo.png";

import axios from "axios";
import "./Login.css";
const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [test, setTest] = useState("Empty");
	const [user, setUser] = useState({ name: "Justin" });

	useEffect(async () => {
		console.log("INSIDE USE EFFECT");
		try {
			axios
				.put("http://localhost:9080/LibertyProject/System/properties", {
					user: "hello",
				})
				.then((response) =>
					console.log(`response: ${JSON.stringify(response)}`)
				);
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
		console.log("===============================");
	}, []);

	//when Login works
	const onSuccess = (response) => {
		console.log(`Login Success: currentUser ${response.profileObj}`);
		//console.log('Loaded: ' + loaded)
		dispatch(send_Google_User_info(response));
		setTest(response.profileObj.name);

		//history.push("/home");
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

	//==================================================
	const [slideIndex, setSliceIndex] = useState(1);

	/* 	function plusSlides(n) {
		showSlides((slideIndex += n));
	} */

	/* 	function currentSlide(n) {
		showSlides((slideIndex = n));
	} */

	/* function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			setSliceIndex(1);
		}
		if (n < 1) {
			setSliceIndex(slides.length);
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	} */

	//=================================

	return (
		<div>
			<div id="rectangle">
				<img
					src={logo}
					style={{ alignContent: "center", height: "75px", paddingTop: "20px" }}
				/>
			</div>

			<p>hi</p>

			<div
				class="slideshow-container"
				style={{
					marginTtop: "100px",
					marginBottom: "50px",
				}}
			>
				{/* <div class="mySlides fade">
					<img src={fingerguns} style={{ width: "100%", }} />
					<div class="text">Grocery shopping made easy with AISLES</div>
				</div> */}
			</div>
			<br />

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
		</div>
	);
};

export default Login;
