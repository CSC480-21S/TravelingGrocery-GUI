import axios from 'axios'

const url = 'http://820e65afc98b.ngrok.io/lists'   //first run json server,
                                                    //run ngrok http 5050, 
                                                    //change the url

export const getLists = () => axios.get(url)
export const createList = (newList) => axios.post(url, newList)