// Name: Jeff Cho
import "../../styles/Navigation.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import img_blank from "../../images/blank.png";
import img_out_of_stock from "../../images/out_of_stock.jpg";

const NavigationUser = () => {
	// I have to set a default placeholder state until the get request finishes?
	// TODO:  This is a weird fix, Find a better way?
	const directions = useSelector((state) => state.storeNav);

	const [index, setIndex] = useState(0);
	const [finished, setFinished] = useState(false);

	const history = useHistory();
	const saveToLocalStorage = (state) => {
		try {
			const serializedState = JSON.stringify(state);
			localStorage.setItem("directions", serializedState);
		} catch (e) {
			console.log(e);
		}
	};

	const increment = () => {
		if (index !== directions.length - 1) {
			setIndex(index + 1);
		} else {
			setFinished(true);
			//console.log("You attempted to increment out of bounds")
		}
	};

	const decrement = () => {
		if (index !== 0) {
			setFinished(false);
			setIndex(index - 1);
		} else {
			//console.log("You attempted to decrement out of bounds")
		}
	};
	const onExit = (e) => {
		e.preventDefault();
		history.push("/home");
	};
	return (
		<div className="navigation">
			<div className="header">
				<div className="percent">
					{index + 1}/{directions.length}
				</div>
				<div className="title">Navigation</div>
				<div className="exit" onClick={onExit}>
					Exit
				</div>
			</div>
			<div className="itemContainer">
				{/* Conditonal statement bool ? ifTrue : ifFalse */}
				{directions[index].itemStockBool ? (
					<img className="itemImage" src={img_blank} alt="itemImage" />
				) : (
					<img className="itemImage" src={img_out_of_stock} alt="itemImage" />
				)}
				<div className="itemDetails">
					<div className="itemName"> {directions[index].itemName} </div>
					<div className="itemDepartment">
						{directions[index].department} Department
					</div>
					<div className="stock">
						{!directions[index].itemStockBool ? "OUT OF STOCK" : ""}
					</div>
					<div className="itemCount">
						Quantity: {directions[index].itemQuantity}
					</div>
				</div>
			</div>
			<div className="containerDirections">
				{/* Conditonal statement bool ? ifTrue : ifFalse */}
				{/* {directions[index].itemStockBool ? (
					<img className="itemImage" src={img_blank} alt="itemImage" />
				) : (
					<img className="itemImage" src={img_out_of_stock} alt="itemImage" />
				)} */}
				<h3>Directions</h3>

				<p className="hugLeft">Aisle: {directions[index].aisle}</p>
				<p className="hugLeft">{directions[index].side} side </p>
				<p className="hugLeft">Rack: {directions[index].rack}</p>
				<p className="hugLeft">Shelf: {directions[index].shelf}</p>
			</div>

			<div className="containerStatus">
				{directions[index].itemStockBool ? (
					""
				) : (
					<button className="outOfStockButton">Move item</button>
				)}
				{/* {index + 1}/{directions.length} {finished ? "Finished!" : ""} */}
			</div>

			<div className="containerBackNext">
				<button className="backButton" onClick={() => decrement()}>
					Back
				</button>
				<button className="nextButton" onClick={() => increment()}>
					Next
				</button>
			</div>
		</div>
	);
};

export default NavigationUser;
