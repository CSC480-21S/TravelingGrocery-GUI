import { SET_FROM_STORE } from "../../actions/actionTypes";

const fromStore = (state = [], action) => {
	switch (action.type) {
		case SET_FROM_STORE:
			//console.log(`from reducer: ${JSON.stringify(action.payload)}`);
			return action.payload;
		default:
			return state;
	}
};
export default fromStore;
