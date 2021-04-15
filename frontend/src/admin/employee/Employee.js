import React, { useEffect, useState } from "react";
import EmployeeInfo from "./EmployeeInfo";
import {useHistory} from "react-router-dom";
import {get_employees} from "../../api/api";
import {useSelector} from "react-redux";

const Employee = () => {
	const history = useHistory();
	const token = useState(useSelector((state) => state.user.tk.tk))[0];

	const routeChange = () =>{
		let path = "/admin/addEmployee";

		history.push(path);
	}

	const task = {
		background: "#f4f4f4",
		margin: "5px",
		padding: "10px 20px",
		height: "100px",
		display: "flex",
	};
	const task2 = {
		background: "#f4f4f4",
		margin: "5px",
		padding: "10px 20px",
		height: "100px",
		cursor: "pointer",
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const [employees, setEmployees] = useState([]);

	const axios = require("axios");

	const getCurrentEmployees = async () => {
		try {
			const res = await get_employees(token);
			console.log(res.data.employees)
			setEmployees(res.data.employees);
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
			<h1 style={{fontSize: '120%', zIndex: -1, position: 'relative'}}>Employees</h1>
			{employees.map((employee) => (
				<EmployeeInfo
					key={employee.id}
					task={task}
					bool={employee.userShoppingBool === 1? "on Clock" : "Off Clock"}
					name={employee.email}
				/>
			))}
			<div style={task2} onClick={routeChange}>
				<h3
					style={{
						verticalAlign: "middle",
						fontSize: "130%",
						color: "darkgray",
						position: "absolute",
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
