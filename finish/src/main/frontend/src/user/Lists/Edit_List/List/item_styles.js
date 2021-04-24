import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "flex",
		background: "#F6F6F6",
		justifyContent: "flex-start",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		width: "100%",
		"&:hover": {
			cursor: "pointer",
		},
		"@media (max-width: 320px)": {
			justifyContent: "flex-start",
			gap: theme.spacing(2),
		},
		"@media (max-width: 414px)": {
			justifyContent: "flex-start",
		},
	},
	container2: {
		display: "flex",
		background: "#DADADA",
		alignItems: "center",
		justifyContent: "flex-start",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		"&:hover": {
			cursor: "pointer",
		},
		"@media (max-width: 320px)": {
			justifyContent: "flex-start",
			gap: theme.spacing(2),
		},
		"@media (max-width: 414px)": {
			justifyContent: "flex-start",
		},
	},
	item_Image_Container: {
		/* border: "1px solid", */
		width: "33%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(1.5),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		"@media (max-width: 320px)": {
			width: "20%",
			flexDirection: "column",
		},
		"@media (max-width: 414px)": {
			width: "33%",
			flexDirection: "column",
			marginRight: theme.spacing(1),
		},
		"@media (min-width: 414px)": {
			width: "33%",
			flexDirection: "column",
		},
	},
	test: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		/* border: "1px solid", */
		"@media (min-width: 414px)": {
			flexDirection: "row",
			alignItems: "center",
		},
	},
	item_details_Container: {
		gap: theme.spacing(1),
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},

	third_section_list_Container: {
		width: "fit-content",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",

		paddingBottom: theme.spacing(1.5),
		paddingRight: theme.spacing(3),
	},
}));
