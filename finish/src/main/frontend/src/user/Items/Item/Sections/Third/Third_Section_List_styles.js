import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	group_button: {
		height: "30px",
		width: "auto",
		"&:hover": {
			backgroundColor: "#cfd8dc",
		},
	},
	minus: {
		backgroundColor: "white",
		width: "fit-content",
		color: "#0880AE",
	},
	count: {
		backgroundColor: "white",
		color: "black",
		width: "auto",
		"&:hover": {
			cursor: "default",
			backgroundColor: "white",
		},
	},
	plus: {
		backgroundColor: "white",
		color: "#0880AE",
	},
}));
