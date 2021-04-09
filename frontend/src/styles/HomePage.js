import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		margin: theme.spacing(0),
	},
	superContainer: {
		paddingTop: theme.spacing(1),
	},
	text: {
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: "16px",
		lineHeight: "19px",
		marginLeft: theme.spacing(2),
	},
	iconButton: {
		width: "100px",
		height: "100px",
		left: "23px",
		top: "23px",
		boxSizing: "border-box",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px",
	},
	lists: {
		width: "fit-content",
		display: "flex",
		flexWrap: "wrap",
		gap: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginBottom: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		"@media (max-width: 320px)": {
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
		},
		"@media (max-width: 375px)": {
			marginLeft: theme.spacing(0),
		},
	},
	regularButton: {
		textTransform: "none",
		width: "100px",
		height: "100px",
		left: "23px",
		top: "23px",
		boxSizing: "border-box",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "15px",
	},
}));
