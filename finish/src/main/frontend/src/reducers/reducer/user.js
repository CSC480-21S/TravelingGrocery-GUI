import { compose } from "redux";
import { SEND_GOOGLE_INFO } from "../../actions/actionTypes";
//profile = initial state
export default (state = [], action) => {
	switch (action.type) {
		case SEND_GOOGLE_INFO: {
			const user = action.payload.profileObj;
			return user;
		}
		default:
			return state;
	}
};
