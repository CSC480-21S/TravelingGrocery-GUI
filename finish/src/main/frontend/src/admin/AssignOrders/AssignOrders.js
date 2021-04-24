import React, { useEffect, useState } from "react";
import Order from "./Order";
import Button from "@material-ui/core/Button";
import AssignOrders_styles from "../../styles/AssignOrders_styles";
import makeStyles from "../../user/Lists/Edit_List/Edit_List_styles";
import EmployeeInfo from "../employee/EmployeeInfo";
import { useHistory } from "react-router-dom";
import { unassignedList, list_getItems } from "../../api/api";
import { useSelector } from "react-redux";

const AssignOrders = () => {
	document.title = "Assign Orders";

	const styles = makeStyles;
	//const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const token = useState(useSelector((state) => state.user.tk.tk))[0];
	const history = useHistory();
	const [orders, setOrders] = useState([]);
	const final = [];

	const button1 = {
		background: "#FFFFFF",
		border: "1px solid #000000",
		borderRadius: "15px",
		width: "90%",
	};

	//======================================================================
	//			This works
	const getItems = async (shoppingListID) => {
		let count = 0;
		const { data } = await list_getItems(shoppingListID, token).catch(e=>{return []});
		data.listItems.forEach((obj) => {
			count = count + parseInt(obj.quantityItem);
		});
		//console.log(count);
		return count;
	};
	const setList = async (list) => {
		let tempList = list;
		let count = 0;
		tempList.forEach(async (obj) => {
			obj.TOTAL_NUMBER_iTEMS = await getItems(obj.shoppingListID);
			obj.bool = false
			count++;
			//console.log(JSON.stringify(obj));
			//console.log("temp LIST: " + JSON.stringify(tempList));
			if (count === tempList.length) {
				//console.log("temp FINAL LIST: " + JSON.stringify(tempList));
				setOrders(tempList);
			}
		});
	};
	useEffect(async () => {
		const { data } = await unassignedList(token);

		data.shoppingLists.forEach((obj) => {
			obj.bool = false
		})
		console.log(data.shoppingLists)
		setOrders(data.shoppingLists)
	}, []);

	//======================================================================
	/*   useEffect(() => {
        getCurrentEmployees().then((r) => console.log(orders));
    }, []); */

	const routeChange = () => {
		let path = "/admin/addEmployee";
		history.push({
			pathname: "/admin/assignOrders/assignEmployees",
			state: { orders: final },
		});
	};
	const buttonClicked = () => {
		let count = 0;
		orders.map((order) => {
			if (order.bool) {
				final.push(order);
			}
		});
		console.log(final);
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
			<h1 style={{ fontSize: "120%" }}>Assign Orders</h1>
			<div>
				<h5 style={{ textAlign: "left", paddingLeft: "20px" }}>
					{" "}
					Available Orders:
				</h5>

				{orders.map((order) => (
					<Order
						key={order.id}
						orderNum={order.shoppingListID}
						numItems={order.itemCount}
						name={order.email}
						time={order.listDateCreated}
						bool={order.userShoppingBool}
						orders={orders}
						setOrders={setOrders}
					/>
				))}
			</div>

			<div style={{ paddingTop: "60px", paddingBottom: "20px" }}>
				<Button fontSize="small" style={button1} onClick={buttonClicked}>
					Assign Orders
				</Button>
			</div>
		</div>
	);
};
export default AssignOrders;
