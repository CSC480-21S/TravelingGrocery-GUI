import React from "react";

const EmployeeInfo = ({ task, name, bool }) => {
	const leftelement = {
		display: "inline-block",
		float: "left",
		width: "50px",
		textAlign: "left",

	};

	const rightelement = {
		display: "inline-block",
		float: "left",
		textAlign: "left",
	};

	return (
		<div style={task}>
			<div style={leftelement}>
				<p style={{ fontSize: "50%", fontWeight: "bold" }}>Name:</p>
				<p style={{ fontSize: "50%", fontWeight: "bold" }}>Status:</p>
			</div>

			<div style={rightelement}>
				<p style={{ fontSize: "50%" }}>{name}</p>
				<p style={{ fontSize: "50%" }}>{bool}</p>
			</div>
		</div>
	);
};

export default EmployeeInfo;
