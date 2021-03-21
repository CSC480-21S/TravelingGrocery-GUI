import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "auto auto auto auto",
		background: "#F6F6F6",
		alignItems: "center",
		justifyItems: "center",
		borderRadius: "15px",
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		paddingTop: theme.spacing(1),
		paddingBottom: "10px",
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
