import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
//Local Imports
import makeStyles from "./Search_Bar_styles";
import item_styles from "../Item/item_styles";
//API
import { store_searchItems } from "../../../api/api";

const Search_Bar = ({ items, set_items }) => {
	const styles = makeStyles();
	const [input_value, set_input_value] = useState({ searchTerm: "" });
	const onChange = (event) => {
		set_input_value({ searchTerm: event.target.value });
	};
	const onEnter = async (e) => {
		e.preventDefault();
		const { data } = await store_searchItems(input_value);
		set_items(data);
		console.log(`SEARCH REPSONSE: ${JSON.stringify(data)}`);
	};
	useEffect(() => {}, [input_value]);
	return (
		<div>
			<TextField
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
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default Search_Bar;
