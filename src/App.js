import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import ShareList from './components/ShareList'

// Note from Jeff:
// The only things I touched when making the navbar was
// 1) made everything in components folder
//         Dashboard.js, Home.js, Navbar.js, Profile.js, ShareList.js
// 2) App.css, wrote everything there from scratch
// 3) App.js

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
