import {CREATE, FETCH_ALL} from '../actions/actionTypes'

export default (lists = [], action) => { //where action constains the payload/data thats going to the Store
    switch (action.type){
        case CREATE:
            return [...lists, action.payload]
        case FETCH_ALL:
            return action.payload
        default:
            return lists
    }       
}