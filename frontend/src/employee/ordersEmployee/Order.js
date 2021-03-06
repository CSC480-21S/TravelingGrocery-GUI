import React, { useState } from "react";

const Order = ({ shoppingListID, order, orders, userID, setOrders }) => {
	const [color, setColor] = useState("#f4f4f4");
	const [clicked, setclicked] = useState(false);

	const changeColor = () => {
		if (color === "#f4f4f4") {
			setColor("#DADADA");
			setclicked(true);

			orders.map((order) => {
				if (order.shoppingListID === shoppingListID) {
					order.bool = true;
				}
			});
			//console.log(JSON.stringify(orders));
			setOrders(orders);
		} else {
			setColor("#f4f4f4");
			orders.map((order) => {
				if (order.shoppingListID === shoppingListID) {
					order.bool = false;
				}
			});
			//console.log(JSON.stringify(orders));
			setOrders(orders);
		}
	};
	const leftelement = {
		display: "inline-block",
		float: "left",
		width: "130px",
		textAlign: "left",
	};

	const rightelement = {
		display: "inline-block",
		float: "left",
		textAlign: "left",
	};

	const container = {
		background: color,
		margin: "5px",
		padding: "10px 20px",
		height: "115px",
		borderRadius: "15px",
		display: "flex",
		cursor: "pointer",
	};

	return (
		<div style={container} onClick={changeColor}>
			<div style={leftelement}>
				<p style={{ fontSize: "50%", fontWeight: "bold" }}>List Name:</p>
				<p style={{ fontSize: "50%", fontWeight: "bold" }}>List ID:</p>
				<p style={{ fontSize: "50%", fontWeight: "bold" }}>Date Created:</p>
			</div>

			<div style={rightelement}>
				<p style={{ fontSize: "50%" }}>{order.listName}</p>
				<p style={{ fontSize: "50%" }}>{shoppingListID}</p>
				<p style={{ fontSize: "50%" }}>{order.listDateCreated}</p>
			</div>
		</div>
	);
};

export default Order;
