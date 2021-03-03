import * as api from '../api/api'
import { CREATE, FETCH_ALL } from './actionTypes'

export const create_List = (list) => async (dispatch) => {
    try {
        const { data } = await api.createList(list)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchLists = () => async (dispatch) => {
    try {
        const { data } = await api.getLists()
        console.log(data)
        
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}