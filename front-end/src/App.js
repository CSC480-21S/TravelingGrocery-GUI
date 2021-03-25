//Style

//Components
import React from "react";
import { useEffect, useState, useRef } from "react";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login_SingOut/Login";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Items/Items";
import Edit_List from "./components/Lists/Edit_List/Edit_List";
//Libraries
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	useLocation,
} from "react-router-dom";

const App = () => {
	const is_Signin = useRef(true);

	const handleLogin = () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({
					ux_mode: "redirect",

					client_id:
						"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
				})
				.then(() => {
					const authInstance = window.gapi.auth2.getAuthInstance();
					const isSignedIn = authInstance.isSignedIn.get();
					console.log(isSignedIn);
					is_Signin.current = isSignedIn;
					authInstance.isSignedIn.listen((isSignedIn) => {
						is_Signin.current = isSignedIn;
					});
				});
		});
	};
	const login2 = () => {};

	useEffect(() => {
		/* const script = document.createElement("script");
		script.src = "https://apis.google.com/js/api.js";
		script.onload = () => handleLogin();
		document.body.appendChild(script); */

		/* 	window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({
					ux_mode: "redirect",

					client_id:
						"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
				})
				.then(() => {
					const authInstance = window.gapi.auth2.getAuthInstance();
					const isSignedIn = authInstance.isSignedIn.get();
					console.log(isSignedIn);
					is_Signin.current = isSignedIn;
					authInstance.isSignedIn.listen((isSignedIn) => {
						is_Signin.current = isSignedIn;
					});
				});
		}); */
		handleLogin();
		console.log(window.gapi);
	}, []);

	useEffect(() => {
		console.log(window.gapi.auth2.getAuthInstance());
		console.log(`FROM APP: ${is_Signin}`);
		console.log(`FROM APP: ${JSON.stringify(is_Signin.current)}`);
	}, [handleLogin]);
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>

				{is_Signin.current ? (
					<Route exact path="/">
						<Redirect to="/home" />
						<Header />
						<Lists />
					</Route>
				) : (
					<Redirect to="/login" />
				)}
				{is_Signin.current ? (
					<Route path="/home">
						<Navbar />
						<Header />
						<HomePage />
					</Route>
				) : (
					<Redirect to="/login" />
				)}
				{is_Signin.current ? (
					<Route path="/User/Lists/listName">
						<Navbar />
						<Header />
						<Lists />
					</Route>
				) : (
					<Redirect to="/login" />
				)}
				{is_Signin.current ? (
					<Route path="/items">
						<Navbar />
						<Header />
						<Items />
					</Route>
				) : (
					<Redirect to="/login" />
				)}
				{is_Signin.current ? (
					<Route path="/edit">
						<Navbar />
						<Header />
						<Edit_List />
					</Route>
				) : (
					<Redirect to="/login" />
				)}
			</Switch>
		</Router>
	);
};

export default App;
