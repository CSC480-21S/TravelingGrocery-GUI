import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "auto auto auto auto",
		alignItems: "center",
		justifyItems: "center",
		background: "#F6F6F6",
		borderRadius: "15px",
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	item_Image_Container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: theme.spacing(2),
	},
	item_details_Container: {
		display: "flex",
		justifyContent: "flex-start",
	},

	third_section_list_Container: {
		display: "flex",
		justifyContent: "flex-end",
	},
}));