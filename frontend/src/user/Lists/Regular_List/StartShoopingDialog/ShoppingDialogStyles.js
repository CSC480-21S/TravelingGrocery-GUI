import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		backgroundColor: "#222258",
		color: "#222258",
		height: "100%",
	},
	closeIconContainer: {
		display: "flex",
		justifyContent: "flex-end",
		color: "white",
	},
	closeIcon: {
		color: "white",
	},
	btnContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "80%",
		gap: "5%",
	},
	requestShopper: {
		background: "#FFFFFF",
		textTransform: "none",
		color: "#0D0D0D",
		borderRadius: "100px",

		fontFamily: "Inter",
		fontWeight: "600",

		width: "200px",
	},
	startShopping: {
		background: "#FFFFFF",
		textTransform: "none",
		color: "#0D0D0D",
		borderRadius: "100px",

		fontFamily: "Inter",
		fontWeight: "600",

		width: "200px",
	},
	btn: {
		alignSelf: "center",
	},
}));
