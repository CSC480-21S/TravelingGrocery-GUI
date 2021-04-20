import {
	SET_LIST_TO_BE_UPDATED,
	LIST_TO_BE_UPDATED_ADD_ITEM,
} from "../../actions/actionTypes";

const list_toUpdate = (lists = [], action) => {
	switch (action.type) {
		case SET_LIST_TO_BE_UPDATED:
			return action.payload;
		case LIST_TO_BE_UPDATED_ADD_ITEM: {
			let temp = lists;
			let bool = false;

			temp.map((item) => {
				//if item already exist update item count
				if (item.itemName === action.payload.itemName) {
					item.quantityItem += action.payload.quantityItem;
					item.update = true;
					bool = true;
				}
			});
			console.log("FROM REDUCER\n" + JSON.stringify(temp));
			if (bool) {
				return temp;
			} else {
				return [...lists, action.payload];
			}
		}
		default:
			return lists;
	}
};
export default list_toUpdate;
