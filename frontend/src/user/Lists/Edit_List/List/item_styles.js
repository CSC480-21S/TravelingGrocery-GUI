import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "flex",
		background: "#F6F6F6",
		justifyContent: "space-between",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		"&:hover": {
			cursor: "pointer",
		},
	},
	container2: {
		display: "flex",
		background: "#DADADA",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		"&:hover": {
			cursor: "pointer",
		},
	},
	item_Image_Container: {
		width: "33%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(1.5),
		marginLeft: theme.spacing(2),
	},
	item_details_Container: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},

	third_section_list_Container: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		width: "fit-content",
		paddingRight: "5%",
		paddingLeft: "5%",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},
}));
