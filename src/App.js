import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import AdminDash from './components/AdminDash';

// To create new links you need to add the link in Navbar.js
// and add Route to it in App.js

function App() {
    document.title = "Aisles";
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
                        <Link to="/navigation"><p>Navigation component</p></Link>
                        <Link to="/adminDashboard"><p>Admin Dashboard</p></Link>
						{/* NOTE: Put a link to your component here */}
					</Route>
					<Route exact path="/navigation">
						<Navbar />
						<Navigation />
                    </Route>
                    <Route exact path="/adminDashboard">
                        {/* I want to add a check here to make sure only a user account is attempting to access this page. */}
                        <Navbar />
                        <AdminDash />
                    </Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;