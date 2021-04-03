import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import OfflineNavigation from './components/OfflineNavigation';
import LocalHostNavigation from './components/localhost/LocalHostNavigation';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<h3>Exact path contains nothing rn go to dashboard pls</h3>
						<Link to="/dashboard"><p>Dashboard component</p></Link>
					</Route>
					<Route exact path="/dashboard">
						<Navbar />
						<Dashboard />
					</Route>
					<Route exact path="/developer">
						<Navbar />
						<Link to="/localhost_navigation"><p>Local Host Navigation component</p></Link>
						<Link to="/navigation"><p>Pi Navigation component</p></Link>
						<Link to="/offline_navigation"><p>Offline Navigation component (Purely looks at LocalStorage)</p></Link>
						{/* NOTE: Put a link to your component here */}
					</Route>
					<Route exact path="/localhost_navigation">
						<Navbar />
						<LocalHostNavigation />
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