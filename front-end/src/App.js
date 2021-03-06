//Style
import './App.css'
//Components
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header'
import Lists from './components/User/Lists'
import { fetchLists } from './actions/actions'
import Login from './components/Login/Login'
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
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' component={HomePage} />
      <Route path='/User/Lists/listName' component={Lists}/>
      <Route path='/LogIn' component={Login}/>
    </Router>
  );
}

export default App;
