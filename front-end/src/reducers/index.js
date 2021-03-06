import { combineReducers } from 'redux'
import createList from './createList'
import homePage from './homePage'

export default combineReducers({ createList, homePage })