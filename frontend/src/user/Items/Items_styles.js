import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "auto auto",
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
	switch: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingLeft: theme.spacing(2),
	},
}));
