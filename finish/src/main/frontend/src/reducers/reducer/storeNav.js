import { STORE_NAV } from "../../actions/actionTypes";

const storeNav = (lists = [], action) => {
	switch (action.type) {
		case STORE_NAV:
			return action.payload;
		default:
			return lists;
	}
};
export default storeNav;
