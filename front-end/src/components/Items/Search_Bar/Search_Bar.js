import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
//Local Imports
import makeStyles from "./Search_Bar_styles";
import item_styles from "../Item/item_styles";

const Search_Bar = ({ items, set_Filtered_storeList }) => {
	const styles = makeStyles();
	const [input_value, set_input_value] = useState();
	const onChange = (event) => {
		set_input_value(event.target.value);
	};
	useEffect(() => {
		console.log(input_value);
		const temp = items.filter(
			(item) => item.name.toLowerCase().indexOf(input_value) >= 0
		);
		set_Filtered_storeList(temp);
	}, [input_value]);
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

export default Search_Bar;
