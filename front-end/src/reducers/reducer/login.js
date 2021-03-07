import {SEND_GOOGLE_INFO} from '../../actions/actionTypes'
//profile = initial state
export default (profile=[], action) => {
    switch (action.type){
        case SEND_GOOGLE_INFO:
            return action.payload
        default:
            return profile
    }
}