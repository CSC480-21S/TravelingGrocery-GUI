import * as api from '../api/api'
import { CREATE, FETCH_ALL, SEND_LIST } from './actionTypes'

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
