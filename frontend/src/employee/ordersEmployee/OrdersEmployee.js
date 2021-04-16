import React, { useEffect, useState } from "react";
import Order from "./Order";
import Button from "@material-ui/core/Button";
import makeStyles from "../../user/Lists/Edit_List/Edit_List_styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//API
import { list_getItems } from "../../api/api";
import { list_get } from "../../api/api";
//ACTIONS
import { store_navigation } from "../../actions/actions";

const OrdersEmployee = () => {
	const [orders, setOrders] = useState([]);
	const styles = makeStyles;
	const dispatch = useDispatch();
	const history = useHistory();
	const token = useState(useSelector((state) => state.user.tk.tk))[0];

	const button1 = {
		background: "#FFFFFF",
		border: "1px solid #000000",
		borderRadius: "15px",
		width: "90%",
	};

	//Get users lists to be shooped
	useEffect(() => {
		//getCurrentEmployees().then((r) => console.log(orders));
		list_get(token)
			.then((res) => {
				console.log(JSON.stringify(res.data));
				setOrders(res.data.shoppingLists);
			})
			.catch((err) => console.log(err));
	}, []);
	//====================================================
	const routeChange = () => {
		let path = "/admin/addEmployee";
		history.push({
			pathname: "/admin/assignOrders/assignEmployees",
			//state: { orders: final },
		});
	};
	//====================================================
	const buttonClicked = () => {
		//const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //token from google login

		// loop trough orders to get shoppingListID
		// If order is selected:
		//      Create shoppingListID, itemNameArray and itemQuantityArray
		//      Store shoppingListID
		//      Get the items of the lists using the shoppingListID
		//      loop trough the list's items and push the itemName and itemQuantity
		// Repeat for the rest of the lists

		/* if order is selected add to final array? */
		let lists = { lists: [] };
		orders.forEach(async (order) => {
			// If order is selected
			if (order.bool) {
				// Store shoppingListID
				const items = { listItems: null };
				const temp = {
					shoppingListID: order.shoppingListID,
					itemNameArray: [],
					itemQuantityArray: [],
				};
				await list_getItems(order.shoppingListID, token).then((res) => {
					console.log("response: \n" + JSON.stringify(res.data));
					items.listItems = res.data.listItems;
				});
				//console.log("ITEMS: \n" + JSON.stringify(items));

				items.listItems.forEach((obj) => {
					temp.itemNameArray.push(obj.itemName);
					temp.itemQuantityArray.push(obj.quantityItem);
				});
				lists.lists.push(temp);
				/* 	console.log("TEMP: \n" + JSON.stringify(temp));
				console.log("FINAL LIST:" + JSON.stringify(lists)); */

				/*if the admin didnt select any order and then pressing assign order button*/
				if (lists.lists.length < 1) {
					alert("Need to select atleast one order!");
					console.log("hello");
					return;
				}
				dispatch(store_navigation(lists, token));
				/*redirect to assign employees page*/
				history.push("/employee/navigation");
			}
		});
	};

	//====================================================
	return (
		<div
			style={{
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				position: "relative",
			}}
		>
			<h1 style={{ fontSize: "120%" }}>Orders</h1>
			<div>
				<h5 style={{ textAlign: "left", paddingLeft: "20px" }}>
					{" "}
					Available Orders:
				</h5>

				{orders.map((order) => (
					<Order
						key={order.shoppingListID}
						shoppingListID={order.shoppingListID}
						order={order}
						orders={orders}
						setOrders={setOrders}
					/>
				))}
			</div>

			<div style={{ paddingTop: "60px", paddingBottom: "20px" }}>
				<Button fontSize="small" style={button1} onClick={buttonClicked}>
					Start Shopping
				</Button>
			</div>
		</div>
	);
};
export default OrdersEmployee;
