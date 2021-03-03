import axios from 'axios'

const url = 'http://localhost:5050/lists'

export const getLists = () => axios.get(url)
export const createList = (newList) => axios.post(url, newList)