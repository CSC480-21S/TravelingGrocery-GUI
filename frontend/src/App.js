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
import NavbarUser from "./user/Navbar/Navbar";
import NavigationOfflineUser from "./user/Navigation/NavigationOfflineUser";
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
import HomeEmployee from "./employee/HomeEmployee";
import ProfileEmployee from "./employee/Profile";
import NavigationEmployee from "./employee/NavigationEmployee";
import NavigationOfflineEmployee from "./employee/Navigation/NavigationOfflineEmployee";
import OrdersEmployee from "./employee/ordersEmployee/OrdersEmployee";
// ADMIN components
import NavbarAdmin from "./admin/NavbarAdmin";
import HomeAdmin from "./admin/HomeAdmin";
import Analytics from "./admin/analytics/Analytics";
import ProfileAdmin from "./admin/Profile";
import Employee from "./admin/employee/Employee";
import Manage from "./admin/manageInventory/Manage";
import AddEmployee from "./admin/employee/AddEmployee";
import AddItem from "./admin/manageInventory/AddItem";
import AssignOrders from "./admin/AssignOrders/AssignOrders";
import AssignEmployees from "./admin/AssignOrders/AssignEmployees";

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
		//handleLogin();
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
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>

				{/* EMPLOYEE routing  */}
				<Route exact path="/employee/home">
					<NavbarEmployee />
					<HomeEmployee />
				</Route>
				<Route exact path="/employee/profile">
					<NavbarEmployee />
					<ProfileEmployee />
				</Route>
				<Route exact path="/employee/orders">
					<NavbarEmployee />
					<OrdersEmployee />
				</Route>
				<Route exact path="/employee/navigation">
					<NavbarEmployee />
					<NavigationEmployee />
				</Route>
				<Route exact path="/employee/offline_navigation">
					<NavbarEmployee />
					<NavigationOfflineEmployee />
                </Route>
                <Route exact path="/employee/faq">
                    <NavbarEmployee />
                    <h3>UNDER CONSTRUCTION</h3>
                </Route>
                <Route exact path="/employee/about">
                    <NavbarEmployee />
                    <h3>UNDER CONSTRUCTION</h3>
                </Route>

				{/* ADMIN routing  */}
				<Route exact path="/admin/home">
					<NavbarAdmin />
					<HomeAdmin />
				</Route>
				<Route exact path="/admin/profile">
                    <NavbarAdmin />
					<ProfileAdmin />
				</Route>
				<Route exact path="/admin/employees">
					<NavbarAdmin />
					<Employee />
				</Route>
				<Route exact path="/admin/inventory">
					<NavbarAdmin />
					<Manage />
				</Route>
				<Route exact path="/admin/analytics">
					<NavbarAdmin />
					<Analytics />
				</Route>
				<Route exact path="/admin/inventory/additem">
					<NavbarAdmin />
					<AddItem />
				</Route>
				<Route exact path="/admin/addEmployee">
					<NavbarAdmin />
					<AddEmployee />
				</Route>
				<Route exact path="/admin/assignOrders">
					<NavbarAdmin />
					<AssignOrders />
				</Route>
				<Route exact path="/admin/assignOrders/assignEmployees">
					<NavbarAdmin />
					<AssignEmployees />
                </Route>
                <Route exact path="/admin/faq">
                    <NavbarAdmin />
                    <h3>UNDER CONSTRUCTION</h3>
                </Route>
                <Route exact path="/admin/about">
                    <NavbarAdmin />
                    <h3>UNDER CONSTRUCTION</h3>
                </Route>

				{/* USER routing  */}
				<Route exact path="/user/navigation">
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
                <Route exact path="/faq">
                    <NavbarUser />
                    <h3>UNDER CONSTRUCTION</h3>
                </Route>
                <Route exact path="/about">
                    <NavbarUser />
                    <h3>UNDER CONSTRUCTION</h3>
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
					<h3>Employee Stuff</h3>
					<Link to="/employee/home">
						<p>Employee home</p>
					</Link>
					<h3>Admin Stuff</h3>
					<Link to="/admin/home">
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
