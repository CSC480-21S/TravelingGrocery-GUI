import * as api from '../api/api'
import { CREATE, FETCH_ALL, SEND_LIST, SEND_GOOGLE_INFO } from './actionTypes'

//Create a new List
export const create_List = (list) => async (dispatch) => {
    try {
        const { data } = await api.createList(list)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
//Get all Lists
export const fetchLists = () => async (dispatch) => {
    try {
        const { data } = await api.getLists()
        console.log(data)
        
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
//Send a List to a Component
export const sendList = (list) => (dispatch) => {
    try{
        dispatch({type: SEND_LIST, payload: list})
    }catch (error) {
        console.log(error.message)
    }
}
//Send Google Info to a Component
export const send_Google_User_info = (profile) => (dispatch) => {
    try {
        console.log('From Actions: ' + profile)
        dispatch({type:SEND_GOOGLE_INFO, payload: profile})
    } catch (error) {
        console.log(error)
    }
}