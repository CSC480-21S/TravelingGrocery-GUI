import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	text: {
		marginTop: theme.spacing(3),
		paddingLeft: theme.spacing(1),
	},
	add: {
		textTransform: "none",
		background: "#222258",
		color: "white",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: "95%",
	},
}));
