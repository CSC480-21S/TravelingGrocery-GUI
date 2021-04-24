import React from "react";
import Button from "@material-ui/core/Button";
//Redux
import { useDispatch } from "react-redux";
//Local Imports
import makeStyles from "./Start_Shooping_syles";
import { useHistory } from "react-router-dom";
import { store_navigation } from "../../../../actions/actions";

const Start_Shooping = ({ items }) => {
    const dispatch = useDispatch();
    const styles = makeStyles();
    const history = useHistory();
    const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;


    const startShopping = () => {
        let lists = { lists: [] };
        let list = {
            shoppingListID: "",
            itemNameArray: [],
            itemQuantityArray: [],
        };
        items.map((item) => {
            list.shoppingListID = item.shoppingListID;
            list.itemNameArray.push(item.itemName);
            list.itemQuantityArray.push(item.quantityItem);
        });
        lists.lists.push(list);
        dispatch(store_navigation(lists, token));
        history.push("/user/navigation");
    };

	return (
		<div className={styles.container}>
			<Button className={styles.button_root} onClick={startShopping}>
				Start Shopping
			</Button>
		</div>
	);
};

export default Start_Shooping;

