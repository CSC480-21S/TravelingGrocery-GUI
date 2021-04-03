//Style

//Components
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login_SingOut/Login";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Items/Items";
import Edit_List from "./components/Lists/Edit_List/Edit_List";



// Jeff's imports/ components
import { Link } from 'react-router-dom';
import Directions from './components/Jeff_Unfinished/Directions'
import OfflineDirections from './components/Jeff_Unfinished/OfflineDirections'
import OldNavigation from './components/Jeff_Unfinished/OldNavigation'
import OfflineOldNavigation from './components/Jeff_Unfinished/OfflineOldNavigation'
import Navigation from './components/Navigation/Navigation'
import OfflineNavigation from './components/Navigation/OfflineNavigation'

//Libraries
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

//Nazar
import Profile from "./components/Profile/Profile";
import HeaderWithout from "./components/Header/HeaderWithout";
import EmployeeAdd from "./components/Hello/employeeAdd";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
					<Header />
					<Lists />
				</Route>
				<Route path="/home">
					<Navbar />
					<Header />
					<HomePage />
				</Route>
				<Route path="/profile">
					<Navbar />
					<HeaderWithout />
					<Profile />
				</Route>
				<Route path="/EmployeeAdd">
					<Navbar />
					<HeaderWithout />
					<EmployeeAdd />
				</Route>
				<Route path="/User/Lists/listName">
					<Navbar />
					<Header />
					<Lists />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/items">
					<Navbar />
					<Header />
					<Items />
				</Route>
				<Route path="/edit">
					<Navbar />
					<Header />
					<Edit_List />
				</Route>

				{/* Jeff's routes are here */}
				<Route exact path="/developer">
						<Navbar />
						<Link to="/directions"><p>Directions</p></Link>
						<Link to="/offline_directions"><p>Offline Directions</p></Link>
						<Link to="/old_navigation"><p>Old navigation</p></Link>
						<Link to="/offline_old_navigation"><p>Offline Old navigation</p></Link>
						<Link to="/navigation"><p>New Navigation</p></Link>
						<Link to="/offline_navigation"><p>Offline New Navigation</p></Link>
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
		</Router>
	);
};

export default App;
