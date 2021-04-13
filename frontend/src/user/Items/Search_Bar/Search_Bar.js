import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
//Local Imports
import makeStyles from "./Search_Bar_styles";
//API
import { store_searchItems } from "../../../api/api";

const SearchBar = ({
	set_items,
	setIsFetching,
	setIsEmpty,
	isChecked,
	setIsError,
}) => {
	const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
	const styles = makeStyles();
	const [input_value, set_input_value] = useState({ searchTerm: "" });
	const onChange = (event) => {
		set_input_value({
			searchTerm: event.target.value,
			checkInStock: isChecked,
		});
	};
	const onEnter = async (e) => {
		e.preventDefault();
		setIsFetching(true);
		setIsEmpty(false);
		setIsError(false);
		let data;
		console.log(token);
		await store_searchItems(input_value, token)
			.then((res) => {
				data = res.data;
				if (data.length > 0) set_items(data);
				if (data.length < 1) {
					setIsEmpty(true);
					set_items(data);
				}
				setIsFetching(false);
			})
			.catch((error) => {
				setIsFetching(false);
				setIsError(true);
			});
	};

	return (
		<div>
			<TextField
				autoFocus
				onKeyPress={(e) => {
					/* console.log(`Pressed keyCode ${e.key}`); */
					if (e.key === "Enter") {
						// Do code here
						onEnter(e);
					}
				}}
				className={styles.search}
				color="secondary"
				placeholder={"Search Items"}
				value={input_value.searchTerm}
				onChange={onChange}
				InputProps={{
					disableUnderline: true,
					startAdornment: (
						<InputAdornment position="start">
							<IconButton onClick={(e) => onEnter(e)}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default SearchBar;
