import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
//Local Imports
import makeStyles from "./Search_Bar_styles";

const SearchBar = ({ items, set_fliteredList }) => {
	const styles = makeStyles();
	const [input_value, set_input_value] = useState("");
	const onChange = (event) => {
		set_input_value(event.target.value);
	};

	useEffect(() => {
		try {
			const temp = items.filter(
				(item) =>
					item.itemName.toLowerCase().indexOf(input_value.toLowerCase()) >= 0
			);
			set_fliteredList(temp);
		} catch (e) {
			console.log("FROM SEARCH BAR IN REGULAR ITEMS: " + e.message);
		}
	}, [input_value, items, set_fliteredList]);
	return (
		<div>
			<TextField
				className={styles.search}
				color="secondary"
				placeholder={"Search Items"}
				value={input_value}
				onChange={onChange}
				InputProps={{
					disableUnderline: true,
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default SearchBar;
