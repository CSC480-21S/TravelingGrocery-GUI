import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
	},
	second: {
		margin: theme.spacing(3),
	},
	third: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: theme.spacing(3),
		gap: theme.spacing(5),
	},
	cancelBtn: {
		color: "#222258",
		border: "1.09009px solid #222258",
	},
	acceptBtn: {
		color: "#222258",
		border: "1.09009px solid #222258",
	},
}));
