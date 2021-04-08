import React, { useEffect, useState } from "react";
import EmployeeInfo from "./EmployeeInfo";

const Employee = () => {
    document.title = "Employee - Admin";

	const task = {
		background: "#f4f4f4",
		margin: "5px",
		padding: "10px 20px",
		height: "100px",
	};
	const task2 = {
		background: "#f4f4f4",
		margin: "5px",
		padding: "10px 20px",
		height: "100px",
		cursor: "pointer",
	};

	const [employees, setEmployees] = useState([]);

	const axios = require("axios");

	const getCurrentEmployees = async () => {
		try {
			const res = await axios.get("http://localhost:5000/users");
			setEmployees(res.data);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		getCurrentEmployees().then((r) => console.log(employees));
	}, []);
    return (
		<div
			style={{
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				position: "relative",
			}}
        >
            <title>Employee</title>
			<h1>Employees</h1>
			{employees.map((employee) => (
				<EmployeeInfo
					key={employee.id}
					task={task}
					num={employee.num}
					bool={employee.userShoppingBool ? "on Clock" : "Off Clock"}
					name={employee.email}
				/>
			))}
			<div style={task2}>
				<h3
					style={{
						verticalAlign: "middle",
						fontSize: "170%",
						color: "darkgray",
						position: "absolute",
						bottom: 0,
					}}
				>
					{" "}
					+ Add Employee
				</h3>
			</div>
		</div>
	);
};

export default Employee;
