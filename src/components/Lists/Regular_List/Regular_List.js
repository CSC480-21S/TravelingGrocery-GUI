import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Import Local Components
import List from "./List/List";
import Start_Shooping from "./Start_Shooping/Start_Shooping";
import makeStyles from "./Regular_Item_styles";
//Actions
import { fecth_list_items } from "../../../actions/actions";
import { fetch_store_items } from "../../../actions/actions";
import { set_list_to_be_updated } from "../../../actions/actions";

const Regular_List = ({ items, set_isEditable }) => {
	const styles = makeStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector((state) => state.login.profileObj); //gets user information from reducer
	const list_Name = useSelector((state) => state.homePage.name);

	useEffect(() => {
		dispatch(fecth_list_items(user.email, list_Name));

		return () => {
			//Update the list of item when the componenet disassembles
			dispatch(fecth_list_items(user.email, list_Name));
		};
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetch_store_items(items));
		console.log(`REGULAR ITEMS: ${JSON.stringify(items)}`);
	}, []);

	const handleEdit = () => {
		const temp = items.map((item) => {
			item.isChecked = false;
			return item;
		});
		dispatch(set_list_to_be_updated(temp));
		history.push("/edit");
	};
	return (
		<div className={styles.root}>
			<div>
				<div className={styles.top_container}>
					<div>
						<Typography
							style={{
								fontFamily: "Inter",
								fontStyle: "normal",
								fontWeight: 600,
							}}
							className={styles.userName}
						>
							Hi {user.name}
						</Typography>
					</div>

					<div className={styles.buttons}>
						<div>
							<Button
								fontSize="small"
								startIcon={<ShareIcon />}
								className={styles.topIconButton1}
							>
								Share
							</Button>
						</div>
						<div>
							<Button
								fontSize="small"
								startIcon={<EditIcon />}
								className={styles.topIconButton2}
								onClick={handleEdit}
							>
								Edit
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				{items.map((item) => (
					<List item={item} />
				))}
			</div>
			<div>
				<Start_Shooping />
			</div>
		</div>
	);
};

export default Regular_List;