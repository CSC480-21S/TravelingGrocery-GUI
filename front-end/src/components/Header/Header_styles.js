import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1),
		justify: "space-between",
		alignItems: "center",
		alignContent: "center",
	},
	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
	},
	item_first: {
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "19px",

		width: "38px",
		height: "19px",
		left: "0px",
	},
	main: {
		fontWeight: 600,
		fontStyle: "normal",
		fontFamily: "Inter",
		fontSize: "30px",
		lineHeight: "36px",
		textAlign: "center",
	},
	item_login: {},
}));