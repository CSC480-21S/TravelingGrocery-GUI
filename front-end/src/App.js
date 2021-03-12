//Style

//Components
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Login from "./components/Login_SingOut/Login";
import Navbar from "./components/Navbar/Navbar";
//Libraries
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

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
				<Route path="/User/Lists/listName">
					<Navbar />
					<Header />
					<Lists />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
