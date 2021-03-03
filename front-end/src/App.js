import './App.css'

import HomePage from './components/HomePage'
import Header from './components/Header'
import { fetchLists } from './actions/actions'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Hello useEffect App")
    dispatch(fetchLists())
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='Home' component={HomePage} />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
