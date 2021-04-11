import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const HomeAdmin = () => {
	document.title = "Admin - Home";

	return (
		<div className="Home">
			<title>Admin Home</title>
			<div className="containerTop">
				Admin Home
			</div>

			<div className="containerButtons">
				<Link to="/admin/assignOrders">
					<button className="buttons">Assign Orders</button>
					<br></br>
				</Link>{" "}
				<br />
				<Link to="/admin/employees">
					<button className="buttons">Employees</button>
					<br></br>
				</Link>{" "}
				<br />
				<Link to="/admin/inventory">
					<button className="buttons">Manage Inventory</button>
					<br></br>
				</Link>{" "}
				<br />
				<Link to="/admin/analytics">
					<button className="buttons">Analytics</button>
				</Link>
			</div>
		</div>
	);
};

export default HomeAdmin;
