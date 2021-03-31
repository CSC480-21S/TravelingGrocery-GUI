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
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
	},
	topIconButton2: {
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
	},
	topIconButton3: {
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
	},
	button: {
		background: "#FAF9F9",
		borderRadius: "15px",
		marginTop: theme.spacing(2),
		justifyContent: "left",
		width: "100%",
		height: "70px",
		color: "#D2D2D2",
		fontSize: "27px",
	},
	fontSizeInherit: {
		fontSize: "27px",
	},
}));
