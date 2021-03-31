import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "flex",
		/* gridTemplateColumns: "auto auto auto", */
		justifyContent: "space-between",
		background: "#F6F6F6",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	item_Image_Container: {
		width: "33%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(1),
	},
	item_details_Container: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},

	third_section_list_Container: {
		width: "fit-content%",
		display: "flex",
		justifyContent: "flex-end",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},
	setting_details: {
		width: "100%",
	},
}));
