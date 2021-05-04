import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	mainContainer: {
		marginTop: "0px",
		position: "relative",
	},
	firstContainer: {
		position: "relative",
		display: "grid",
		gridTemplateColumns: "auto auto",
		alignItems: "center",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
	secondContainer: {
		position: "relative",
	},
	thirdContainer: {
		position: "relative",
		paddingBottom: theme.spacing(6),
	},
	delete: {
		display: "flex",
		justifyContent: "flex-end",
	},
	delete_button: {
		textTransform: "none",
		background: "#222258",
		color: "#FFFFFF",
	},
	confirm: {
		backgroundColor: "white",
		position: "fixed",
		width: "100%",
		bottom: 0,
		zIndex: 20,
	},
	confirm2: {},
}));
