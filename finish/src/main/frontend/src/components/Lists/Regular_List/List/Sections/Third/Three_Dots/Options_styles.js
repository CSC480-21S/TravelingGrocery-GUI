import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		margin: theme.spacing(0.05),
		color: "white",
		borderRadius: "15px",
		"&:hover": {
			backgroundColor: " #5c6bc0",
		},
	},
	label: {
		flexDirection: "column",
	},
	container: {
		display: "flex",
		backgroundColor: "#222258",
		borderRadius: "15px",
		height: "100%",
		width: "100%",
		justifyContent: "space-evenly",
	},
}));
