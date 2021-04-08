// Package/module imports
import React, { useState } from "react";
import { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link,
} from "react-router-dom";

// USER components
import NavigationUser from "./user/Navigation/NavigationUser";
import NavigationOfflineUser from "./user/Navigation/NavigationOfflineUser"

import NavbarUser from "./user/Navbar/Navbar";
import HomePage from "./user/HomePage/HomePage";
import Header from "./user/Header/Header";
import Lists from "./user/Lists/Lists";
import Login from "./user/Login_SingOut/Login";
import Items from "./user/Items/Items";
import EditList from "./user/Lists/Edit_List/Edit_List";
import Profile from "./user/Profile/Profile";
import ShareList from "./user/ShareList/ShareList";

// EMPLOYEE components
import NavbarEmployee from "./employee/NavbarEmployee";

// ADMIN components
import NavbarAdmin from "./admin/navbarAdmin/NavbarAdmin";
import Home from "./admin/homeAdmin/home";
import Employee from "./admin/employee/Employee";


const App = () => {
	const [bol, set_bol] = useState(null);

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
					<Home />
				</Route>
				<Route exact path="/admin/employees">
					<NavbarAdmin />
					<Employee />
				</Route>

				{/* USER routing  */}
				<Route exact path="/user/navigation">
					<NavbarUser />
					<NavigationUser />
				</Route>
				<Route exact path="/user/offline_navigation">
					<NavbarUser />
					<NavigationOfflineUser />
				</Route>
				<Route exact path="/profile">
					<NavbarUser />
					<Profile />
				</Route>
                <Route exact path="/shareList">
                    <NavbarUser />
                    <ShareList />
                </Route>

				{/* TEST/DEBUGGING routing  */}
				<Route exact path="/developer">
					<h3>User Stuff</h3>
					<Link to="/home">
						<p>User home</p>
					</Link>
					<Link to="/user/navigation">
						<p>User navigation</p>
					</Link>
					<Link to="/user/offline_navigation">
						<p>Offline user navigation</p>
                    </Link>
                    <Link to="/sharelist">
                        <p>List sharing</p>
                    </Link>
					<h3>Employee Stuff</h3>
					<Link to="/employee/dashboard">
						<p>Employee home</p>
					</Link>
					<h3>Admin Stuff</h3>
					<Link to="/admin/dashboard">
						<p>Admin home</p>
					</Link>
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
							<EditList />
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
