import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AllEmployees from "./AllEmployees";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { get_employees, list_update } from "../../api/api";
import { useSelector } from "react-redux";

const AssignEmployees = () => {
	const location = useLocation();
	const token = useState(useSelector((state) => state.user.tk.tk))[0];
	const history = useHistory();
	const [employees, setEmployees] = useState([]);
	const axios = require("axios");
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getCurrentEmployees = async () => {
		try {
			const res = await get_employees(token, "employee");

			/*loop thru employees*/

			res.data.users.map((employee) => (employee.selected = false));
			console.log(JSON.stringify(res.data.users));
			setEmployees(res.data.users);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getCurrentEmployees().then((r) => console.log(employees));
	}, []);

	const buttonClicked = () => {
		/*get the one employee*/
		const temp = [];
		employees.map((employee) => {
			if (employee.selected === true) {
				temp.push(employee);
			}
		});

		if (temp.length === 0) {
			alert("You must select atleast one employee!");
			return;
		}

		handleClickOpen();
		//console.log("FINAL");

		/*do some requests here
		 * location.state.orders is the orders that we selected
		 * temp is the one employee that we are assigning the order to*/

		/*endpoint to update the list*/
		//console.log(temp[0]);
		{
			location.state.orders.map(async (order) => {
				delete order.bool;
				order.shopperUserID = temp[0].userID;
				await list_update(order.shoppingListID, order, token);
			});
		}

		//console.log(JSON.stringify(location.state.orders));
		//console.log(JSON.stringify(temp));
	};

	const routeChange = () => {
		let path = "/admin/assignOrders";
		history.push(path);
	};

	const button1 = {
		background: "#FFFFFF",
		border: "1px solid #000000",
		borderRadius: "15px",
		width: "90%",
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
			<h1 style={{ fontSize: "120%" }}>Employees</h1>

			{employees.map((employee) => (
				<AllEmployees
					key={employee.id}
					bool={employee.userShoppingBool == 1 ? "On Clock" : "Off Clock"}
					email={employee.email}
					employees={employees}
					setEmployees={setEmployees}
					checkEmployee={employee.userShoppingBool}
				/>
			))}

			<div>
				<h5>Assign Order</h5>
				<Button fontSize="small" style={button1} onClick={buttonClicked}>
					Confirm
				</Button>
			</div>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"The Order has been assigned!"}
				</DialogTitle>
				<DialogActions>
					<Button onClick={routeChange} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AssignEmployees;
