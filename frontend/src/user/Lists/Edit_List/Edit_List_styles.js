import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	mainContainer: {
		marginTop: "0px",
		position: "relative",
	},
	firstContainer: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		alignItems: "center",
		paddingLeft: "10px",
		paddingRight: "10px",
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
	confirm: {},
}));
