//Style

//Components
import React from "react";
import { useEffect, useRef } from "react";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login_SingOut/Login";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Items/Items";
import Edit_List from "./components/Lists/Edit_List/Edit_List";
import { useSelector } from "react-redux";
//Libraries

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

const App = () => {
	const is_Signin = useRef(true);

	const handleLogin = async () => {
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
					//is_Signin.current = isSignedIn;
					/* authInstance.isSignedIn.listen((isSignedIn) => {
						is_Signin.current = isSignedIn;
					}); */
				});
		});
	};

	useEffect(async () => {
		handleLogin();
		//console.log("SELECTOR: " + JSON.stringify(selector));
		console.log(JSON.stringify(is_Signin.current));
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>

				{is_Signin.current ? (
					<>
						<Route exact path="/">
							<Redirect to="/home" />
							<Header />
							<Lists />
						</Route>

						<Route path="/home">
							<Navbar />
							<Header />
							<HomePage />
						</Route>

						<Route exact path="/list/:id">
							<Navbar />
							<Header />
							<Lists />
						</Route>

						<Route path="/items">
							<Navbar />
							<Header />
							<Items />
						</Route>

						<Route path="/list/:id/edit">
							<Navbar />
							<Header />
							<Edit_List />
						</Route>
					</>
				) : (
					<Redirect to="/login" />
				)}
			</Switch>
		</Router>
	);
};

export default App;
