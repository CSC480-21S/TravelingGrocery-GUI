import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	top_container: {
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(3),
		display: "flex",
		alignItems: "center",
	},
	userName: {
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: "16px",
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	topIconButton1: {
		margin: theme.spacing(1),
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontSize: "12px",
		borderRadius: "10px",

		height: "30px",
		width: "fit-content",
		border: "2px solid #C0C0C0",
	},
	topIconButton2: {
		margin: theme.spacing(1),
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontSize: "12px",
		borderRadius: "10px",

		height: "30px",
		width: "fit-content",
		border: "2px solid #C0C0C0",
	},
}));
