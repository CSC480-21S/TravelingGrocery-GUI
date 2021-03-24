import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ShareList from "./components/ShareList";
import SearchBar from "./components/SearchBar";

import Directions from "./components/Jeff_Unfinished/Directions";
import OfflineDirections from "./components/Jeff_Unfinished/OfflineDirections";
import OldNavigation from "./components/Jeff_Unfinished/OldNavigation";
import OfflineOldNavigation from "./components/Jeff_Unfinished/OfflineOldNavigation";
import Navigation from "./components/Navigation/Navigation";
import OfflineNavigation from "./components/Navigation/OfflineNavigation";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/dashboard">
						<Navbar />
						<SearchBar />
						<Dashboard />
					</Route>
					<Route exact path="/sharelist">
						<Navbar />
						<SearchBar />
						<ShareList />
					</Route>
					<Route exact path="/profile">
						<Navbar />
						<Profile />
					</Route>
					<Route exact path="/developer">
						<Navbar />
						<Link to="/directions">
							<p>Directions</p>
						</Link>
						<Link to="/offline_directions">
							<p>Offline Directions</p>
						</Link>
						<Link to="/old_navigation">
							<p>Old navigation</p>
						</Link>
						<Link to="/offline_old_navigation">
							<p>Offline Old navigation</p>
						</Link>
						<Link to="/navigation">
							<p>New Navigation</p>
						</Link>
						<Link to="/offline_navigation">
							<p>Offline New Navigation</p>
						</Link>
					</Route>
					<Route exact path="/directions">
						<Navbar />
						<Directions />
					</Route>
					<Route exact path="/offline_directions">
						<Navbar />
						<OfflineDirections />
					</Route>
					<Route exact path="/old_navigation">
						<Navbar />
						<OldNavigation />
					</Route>
					<Route exact path="/offline_old_navigation">
						<Navbar />
						<OfflineOldNavigation />
					</Route>
					<Route exact path="/navigation">
						<Navbar />
						<Navigation />
					</Route>
					<Route exact path="/offline_navigation">
						<Navbar />
						<OfflineNavigation />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
