import './App.css'

import HomePage from './components/HomePage'
import Header from './components/Header'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br/>
        <Route path='Home' component={HomePage} />
        <HomePage/>
      </div>
    </Router>
  );
}

export default App;
