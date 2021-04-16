// Name: Jeff Cho
import "../../styles/Navigation.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import img_blank from "../../images/blank.png";
import img_out_of_stock from "../../images/out_of_stock.jpg";

const NavigationEmployee = () => {
	// I have to set a default placeholder state until the get request finishes?
	// TODO:  This is a weird fix, Find a better way?
    const directions = useSelector((state) => state.storeNav);

    document.title = "Navigation";

	const [index, setIndex] = useState(0);
	const [finished, setFinished] = useState(false);

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

	return (
		<div className="Navigation">
			<div className="containerTop">Navigation</div>

			<div className="containerDirections">
				{/* Conditonal statement bool ? ifTrue : ifFalse */}
				{directions[index].itemStockBool ? (
					<img className="itemImage" src={img_blank} alt="itemImage" />
				) : (
					<img className="itemImage" src={img_out_of_stock} alt="itemImage" />
				)}

				<p className="hugLeft"> {directions[index].itemName} </p>
				<p className="hugLeft"> {directions[index].department} Department </p>
				<p className="hugLeft"> Aisle {directions[index].aisle} </p>
				<p className="hugLeft">
					{" "}
					Rack {directions[index].rack} | {directions[index].side} side |{" "}
					{directions[index].shelf} shelf{" "}
				</p>
			</div>

			<div className="containerStatus">
				{directions[index].itemStockBool ? (
					""
				) : (
					<button className="outOfStockButton">Move item</button>
				)}
				<br></br>
				{index + 1}/{directions.length} {finished ? "Finished!" : ""}
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

export default NavigationEmployee;
