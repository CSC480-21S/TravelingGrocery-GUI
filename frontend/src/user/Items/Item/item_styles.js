import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	container: {
		display: "flex",
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
		padding: theme.spacing(1.5),
	},
	item_details_Container: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: theme.spacing(1.5),
		paddingBottom: theme.spacing(1.5),
	},

	third_section_list_Container: {
		display: "flex",
		flexDirection: "column",
		gap: theme.spacing(1.5),
		width: "fit-content",
		alignSelf: "flex-end",
		justifyContent: "flex-end",
		padding: theme.spacing(1.5),
	},
}));
