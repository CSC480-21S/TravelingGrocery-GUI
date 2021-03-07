//Style
import './App.css'
//Components
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'
import Lists from './components/Lists/Lists'
import { fetchLists } from './actions/actions'
import Login from './components/Login_SingOut/Login'
//Libraries
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Hello useEffect App")
    dispatch(fetchLists())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Header />
          <HomePage />
        </Route>
        <Route path='/User/Lists/listName' >
          <Header />
          <Lists />
        </Route>
        <Route path='/LogIn'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
