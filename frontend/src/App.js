// Package/module imports
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

// USER components
import NavigationUser from "./user/Navigation/NavigationUser"

import NavbarUser from "./user/Navbar/Navbar";
import HomePage from "./user/HomePage/HomePage";
import Header from "./user/Header/Header";
import Lists from "./user/Lists/Lists";
import Login from "./user/Login_SingOut/Login";
import Items from "./user/Items/Items";
import Edit_List from "./user/Lists/Edit_List/Edit_List";

// EMPLOYEE components
import NavbarEmployee from "./employee/NavbarEmployee"

// ADMIN components
import NavbarAdmin from "./admin/NavbarAdmin"

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
				<Route path="/login">
					<Login />
				</Route>

				{/* EMPLOYEE routing  */}
				<Route exact path="/employee/dashboard">
					<NavbarEmployee />
				</Route>

				{/* ADMIN routing  */}
				<Route exact path="/admin/dashboard">
					<NavbarAdmin />
				</Route>

				{/* USER routing  */}
				<Route exact path="/user/navigation">
					<NavbarUser />
					<NavigationUser />
				</Route>

				{/* TEST/DEBUGGING routing  */}
				<Route exact path="/developer">
					<h3>User Stuff</h3>
					<Link to="/home"><p>User home</p></Link>
					<Link to="/user/navigation"><p>User navigation</p></Link>
					<h3>Employee Stuff</h3>
					<Link to="/employee/dashboard"><p>Employee home</p></Link>
					<h3>Admin Stuff</h3>
					<Link to="/admin/dashboard"><p>Admin home</p></Link>
				</Route>

				{/* Justin gotta fix this crazy bool stuff */}
				{bol ? (
					<>
						<Route path="/home">
							<NavbarUser />
							<Header />
							<HomePage />
						</Route>

						<Route exact path="/list/:id">
							<NavbarUser />
							<Header />
							<Lists />
						</Route>

						<Route path="/list/:id/store">
							<NavbarUser />
							<Header />
							<Items />
						</Route>

						<Route path="/list/:id/edit">
							<NavbarUser />
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
