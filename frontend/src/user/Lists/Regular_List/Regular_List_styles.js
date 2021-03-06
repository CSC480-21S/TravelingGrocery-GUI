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
		"@media (max-width: 414px)": {
			display: "flex",
			flexDirection: "column",
		},
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
		"@media (max-width: 414px)": {
			marginTop: 15,
			justifyContent: "center",
		},
	},
	topIconButton1: {
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
		"@media (max-width: 414px)": {
			width: "115px",
			height: "35px",
		},
		"@media (max-width: 375px)": {
			width: "100px",
			height: "35px",
		},
		"@media (max-width: 330px)": {
			width: "82px",
			height: "35px",
		},
	},
	topIconButton2: {
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
		"@media (max-width: 414px)": {
			width: "115px",
			height: "35px",
		},
		"@media (max-width: 375px)": {
			width: "100px",
			height: "35px",
		},
		"@media (max-width: 320px)": {
			width: "82px",
			height: "35px",
		},
	},
	topIconButton3: {
		textTransform: "none",
		border: "1px solid #222258",
		borderRadius: "8px",
		fontSize: "10px",
		height: "28px",
		"@media (max-width: 414px)": {
			width: "115px",
			height: "35px",
		},
		"@media (max-width: 375px)": {
			width: "100px",
			height: "35px",
		},
		"@media (max-width: 330px)": {
			width: "82px",
			height: "35px",
		},
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
	searchBar: {
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
		marginBottom: theme.spacing(3),
	},
	startShopping: {
		backgroundColor: "white",
		width: "100%",
		bottom: 0,
		zIndex: 20,
	},
}));
