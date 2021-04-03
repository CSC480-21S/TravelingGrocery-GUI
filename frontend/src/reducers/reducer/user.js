import { compose } from "redux";
import { SEND_GOOGLE_INFO } from "../../actions/actionTypes";
//profile = initial state
export default (state = [], action) => {
	switch (action.type) {
		case SEND_GOOGLE_INFO: {
			let data = {};
			var token;
			const profile = action.payload.profileObj;
			if (!action.payload.tokenId) {
				data["tk"] = null;
			} else {
				token = { tk: action.payload.tokenId };
				data["tk"] = token;
			}
			data["profile"] = profile;
			return data;
		}
		default:
			return state;
	}
};
