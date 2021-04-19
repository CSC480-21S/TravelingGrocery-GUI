import { SEND_GOOGLE_INFO, UPDATE_ACTIVE } from "../../actions/actionTypes";
//profile = initial state
const user = (state = [], action) => {
	switch (action.type) {
		case SEND_GOOGLE_INFO: {
			let data = {};
			const profile = action.payload.response.profileObj;
			console.log(JSON.stringify(action.payload.res.data));
			if (!action.payload.response.tokenId) {
				data["tk"] = null;
			} else {
				data["tk"] = { tk: action.payload.response.tokenId };
				data["active"] = action.payload.res.data.userShoppingBool;
			}
			data["profile"] = profile;
			return data;
		}
		case UPDATE_ACTIVE:
			return { ...state, active: action.payload };
		default:
			return state;
	}
};
export default user;
