// Name: Jeff Cho
import "../styles/Navigation.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import img_blank from "../images/blank.png";
import img_out_of_stock from "../images/out_of_stock.jpg";
//Local Import
import Confirm from "./Confirm";

const NavigationEmployee = () => {
	document.title = "Navigation";
	// I have to set a default placeholder state until the get request finishes?
	// TODO:  This is a weird fix, Find a better way?
	const [onConfirm, set_onConfirm] = useState(false);
	const directions = useSelector((state) => state.storeNav);
	const [index, setIndex] = useState(0);
	const [finished, setFinished] = useState(false);
	const [itemQuantity, set_itemQuantity] = useState(0);
	const history = useHistory();
	const [init, set_init] = useState(new Date());

	//	REGULAR METHODS 	=============================================
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
		}
		if (finished) {
			setIndex(directions.length - 1);
			setFinished(false);
		}
	};
	const onFinish = () => {
		let count = 0;
		directions.forEach((item) => (count += item.itemQuantity));
		set_itemQuantity(count);
		set_onConfirm(true);
	};

	const onExit = (e) => {
		e.preventDefault();
		history.push("/login");
	};

	return (
		<div className="Navigation">
			<Confirm
				onConfirm={onConfirm}
				set_onConfirm={set_onConfirm}
				itemQuantity={itemQuantity}
				init={init}
			/>
			<div className="header">
				{!finished ? (
					<div className="percent">
						{directions.length === 0 ? 0 : index + 1}/{directions.length}
					</div>
				) : (
					<div></div>
				)}
				<div className="title">Navigation</div>
				<div className="exit" onClick={onExit}>
					Exit
				</div>
			</div>
			{/* item container */}
			<div className={!finished ? "itemContainer" : "itemContainer2"}>
				{/* Conditonal statement bool ? ifTrue : ifFalse */}
				{!finished && directions.length > 0 ? (
					<>
						{directions[index].itemStockBool ? (
							<img className="itemImage" src={img_blank} alt="itemImage" />
						) : (
							<img
								className="itemImage"
								src={img_out_of_stock}
								alt="itemImage"
							/>
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
							<div className="itemDepartment">
								ShoppingID: {directions[index].shoppingListID}{" "}
							</div>
						</div>
					</>
				) : (
					<p className="endListText">No more items</p>
				)}
				{/* end of list */}
			</div>

			{!finished && directions.length > 0 ? (
				<>
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
				</>
			) : (
				<div className="congratsContainer">
					<p className="congratsText">Congratulations!</p>
					<p className="congratsDescriptionTest">
						Go to checkout and press finish
					</p>
				</div>
			)}

			<div className="containerBackNext">
				<button className="backButton" onClick={() => decrement()}>
					Back
				</button>
				{!finished && directions.length > 0 ? (
					<button className="nextButton" onClick={() => increment()}>
						Next
					</button>
				) : (
					<button className="nextButton" onClick={() => onFinish()}>
						Finish
					</button>
				)}
			</div>
		</div>
	);
};

export default NavigationEmployee;
