import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import ShareList from './components/ShareList'
import SearchBar from './components/SearchBar'
import Directions from './components/Directions'
import OfflineDirections from './components/OfflineDirections'
import Navigation from './components/Navigation'

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
						<Link to="/directions"><p>Get directions</p></Link>
						<Link to="/offline"><p>View offline directions</p></Link>
						<Link to="/navigation"><p>Start Shopping</p></Link>
					</Route>
					<Route exact path="/directions">
						<Navbar />
						<Directions />
					</Route>
					<Route exact path="/offline">
						<Navbar />
						<OfflineDirections />
					</Route>
					<Route exact path="/navigation">
						<Navbar />
						<Navigation />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;