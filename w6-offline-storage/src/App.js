import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import ShareList from './components/ShareList'
import Directions from './components/Directions'
import OfflineDirections from './components/OfflineDirections'

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
            <Dashboard />
          </Route>
          <Route exact path="/sharelist">
            <Navbar />
            <ShareList />
          </Route>
          <Route exact path="/profile">
            <Navbar />
            <Profile />
          </Route>
          <Route exact path="/directions">
            <Navbar />
            <Directions />
          </Route>
          <Route exact path="/offline">
            <Navbar />
            <OfflineDirections />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
