import React, { useEffect, useState } from "react";
import Order from "./Order";
import Button from "@material-ui/core/Button";
import makeStyles from "../../user/Lists/Edit_List/Edit_List_styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//API
import { list_getItems } from "../../api/api";
//ACTIONS
import { store_navigation } from "../../actions/actions";

const OrdersEmployee = () => {
	const [orders, setOrders] = useState([]);
	const final = { lists: [] };
	const styles = makeStyles;
	const dispatch = useDispatch();
	const history = useHistory();

	const button1 = {
		background: "#FFFFFF",
		border: "1px solid #000000",
		borderRadius: "15px",
		width: "90%",
	};

	const axios = require("axios");

	const getCurrentEmployees = async () => {
		try {
			const res = await axios.get("http://localhost:5051/Orders");
			//console.log(res.data[0].shoppingLists)
			/*loop thru order*/
			{
				res.data[0].shoppingLists.map((order) => (order.bool = false));
			}
			setOrders(res.data[0].shoppingLists);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getCurrentEmployees().then((r) => console.log(orders));
	}, []);

	const routeChange = () => {
		let path = "/admin/addEmployee";
		history.push({
			pathname: "/admin/assignOrders/assignEmployees",
			state: { orders: final },
		});
	};

	const buttonClicked = () => {
		const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId; //token from google login

		// loop trough orders to get shoppingListID
		// If order is selected:
		//      Create shoppingListID, itemNameArray and itemQuantityArray
		//      Store shoppingListID
		//      Get the items of the lists using the shoppingListID
		//      loop trough the list's items and push the itemName and itemQuantity
		// Repeat for the rest of the lists

		/* if order is selected add to final array? */
		let lists = { lists: [] };
		orders.map(async (order) => {
			// If order is selected
			if (order.bool) {
				// Store shoppingListID
				const temp = {
					shoppingListID: order.shoppingListID,
					itemNameArray: [],
					itemQuantityArray: [],
				};
				const { item } = await list_getItems(order.shoppingListID, token);
				item.forEach((obj) => {
					temp.itemNameArray.push(obj.itemName);
					temp.itemQuantityArray.push(obj.itemQuantity);
				});
				lists.lists.push(temp);
			}
		});

		dispatch(store_navigation(lists, token));
		//console.log(final)
		//console.log(finalOrder)
		/*if the admin didnt select any order and then pressing assign order button*/
		if (final.length === 0) {
			alert("Need to select atleast one order!");
			return;
		}

		/*redirect to assign employees page*/
		routeChange();
	};

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
						listName={order.listName}
						numItems={order.items.length}
						shoppingListID={order.shoppingListID}
						dateCreated={order.listDateCreated}
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
