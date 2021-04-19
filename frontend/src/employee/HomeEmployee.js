import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Home.css";
//API
import { update_status, userAccount_login } from "../api/api";
//ACTIONS
import { update_active } from "../actions/actions";

const HomeEmployee = () => {
	document.title = "Employee - Home";
	const dispatch = useDispatch();
	const [active, setActive] = useState(
		useSelector((state) => (state.user.active === 1 ? true : false))
	); //useState(false); //
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;

	// TODO: Useeffect HTTP request to get state of active or inactive
	/* useEffect(async () => {
		await userAccount_login({ token: token })
			.then((r) => setActive(r.userShoppingBool))
			.catch((e) => console.log(e));
	}, [setActive]); */

	const toggleActive = async () => {
		if (active === true) {
			setActive(false);
			let item = {
				token: token,
				isActive: 0,
			};
			await update_status(item, token);
			dispatch(update_active(0));
			// TODO: Change active status in database as well
		} else {
			setActive(true);
			let item = {
				token: token,
				isActive: 1,
			};
			await update_status(item, token);
			dispatch(update_active(1));
			// TODO: Change active status in database as well
		}
	};

	return (
		<div className="Home">
			<div className="containerTop">
				Employee Home
				{active ? (
					<p style={{ color: "green" }}>Active</p>
				) : (
					<p style={{ color: "red" }}>Not Active</p>
				)}
			</div>
			<div className="containerButtons">
				<button className="buttons" onClick={() => toggleActive()}>
					Toggle Active
				</button>
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
