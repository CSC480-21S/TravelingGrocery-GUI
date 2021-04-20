import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
//Local Imports
import makeStyles from "./Search_Bar_styles";

const Search_Bar = () => {
	const styles = makeStyles();
	return (
		<div>
			<TextField
				className={styles.search}
				color="secondary"
				placeholder={"Search Items"}
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
