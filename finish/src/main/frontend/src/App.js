//Style

//Components
import React, { useState } from "react";
import { useEffect } from "react";
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
	const [bol, set_bol] = useState(null);
	const token = useSelector((state) => state.user.tk);

	const handleLogin = () => {
		try {
			window.gapi.load("auth2", () => {
				window.gapi.auth2
					.init({
						ux_mode: "redirect",
						client_id:
							"534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
					})
					.then(async () => {
						const auth = window.gapi.auth2.getAuthInstance();
						set_bol(auth.isSignedIn.get());
						auth.isSignedIn.listen((isSignedIn) => set_bol(isSignedIn));
					});
			});
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		handleLogin();
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				{bol ? (
					<>
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

						<Route path="/list/:id/store">
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
