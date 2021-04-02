import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	top_container: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		marginLeft: 15,
		marginRight: 15,
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	topIconButton1: {
		textTransform: "none",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
	},
	topIconButton2: {
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
	},
}));
