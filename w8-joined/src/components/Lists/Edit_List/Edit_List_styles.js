import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
}));
