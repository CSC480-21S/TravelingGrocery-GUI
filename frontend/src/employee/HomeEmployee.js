import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const HomeEmployee = () => {
	//document.title = "Employee - Home";
	const [active, setActive] = useState(false);

	// TODO: Useeffect HTTP request to get state of active or inactiv e

	const toggleActive = () => {
		if (active === true) {
			setActive(false);
			// TODO: Change active status in database as well
		} else {
			setActive(true);
			// TODO: Change active status in database as well
		}
	};

	return (
		<div className="Home">
			<div className="containerTop">
				Employee Home
				{active ? 
					<p style={{color: "green"}}>Active</p> :
					<p style={{color: "red"}}>Not Active</p>
				}
			</div>
			<div className="containerButtons">
				<button className="buttons" onClick={() => toggleActive()}>Toggle Active</button>
				<br></br>
				<Link to="/employee/orders">
					<br></br>
					<button className="buttons">Your Orders</button>
					<br></br>
				</Link>{" "}
			</div>
		</div>
	);
};

export default HomeEmployee;
