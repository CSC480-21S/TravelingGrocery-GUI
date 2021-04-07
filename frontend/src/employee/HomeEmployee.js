import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const HomeEmployee = () => {
	document.title = "Employee - Home";

	return (
		<div className="HomeEmployee">
			<div className="containerTop">
				Employee Home
			</div>

			<div className="containerButtons">
				<Link to="/employee/orders">
					<button className="buttons">Your Orders</button>
					<br></br>
				</Link>{" "}
			</div>
		</div>
	);
};

export default HomeEmployee;
