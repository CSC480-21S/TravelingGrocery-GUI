//Style
import './App.css'
//Components
import Header from './components/Header'
import { fetchLists } from './actions/actions'
//Libraries
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Hello useEffect App")
    dispatch(fetchLists())
  }, [dispatch])

  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
