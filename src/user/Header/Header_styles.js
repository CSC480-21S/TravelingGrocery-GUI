import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		display: "grid",
		gridTemplateAreas: `
		"first first2 first3 "
		"second second second"`,
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		alignItems: "center",
		justifyItems: "center",
	},
	item_one: {
		gridArea: "first",
	},
	item_two: {
		gridArea: "first2",
	},
	item_three: {
		gridArea: "first3",
	},
	item_four: {
		gridArea: "second",
		width: "100%",
	},
	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
	},
	item_first: {
		//fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: 500,
		fontSize: "16px",
		lineHeight: "19px",
	},
	main: {
		fontWeight: 600,
		fontStyle: "normal",
		//fontFamily: "Inter",
		fontSize: "xxx-large",
		lineHeight: "36px",
		textAlign: "center",
	},
	title: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	item_login: {},
}));
