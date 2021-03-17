import React from "react";
import { useEffect, useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Material UI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
//Components
import makeStyles from "./Lists_styles";
import List from "./List/List";
import Add_item from "./Add_item/Add_item";
import Start_Shooping from "./Start_Shooping/Start_Shooping";
//Actions
import { fecth_list_items } from "../../actions/actions";
import { fetch_store_items } from "../../actions/actions";

const Lists = () => {
	const styles = makeStyles();
	const items = useSelector((state) => state.lists); //get items
	const list_Name = useSelector((state) => state.homePage.name); //gets name of the list
	const user_email = useSelector((state) => state.login.profileObj.email); // gets the email of the user
	const user_name = useSelector((state) => state.login.profileObj.name);
	const [bol, setBol] = useState(false);
	const dispatch = useDispatch(); //Dispatch an action to the reducers

	//Do not use setState when dealing with useSelector

	//console.log(`List from Lists Component: \n ${JSON.stringify(list_Name)}`);
	//console.log("Selector: " + JSON.stringify(selector));
	//console.log(`Items from Lists Component: \n ${JSON.stringify(items)}`);

	useEffect(() => {
		dispatch(fecth_list_items(user_email, list_Name));
		/* 	return function cleanup() {
			setItems("");
		}; */
		return () => {
			//Update the list of item when the componenet disassembles
			dispatch(fecth_list_items(user_email, list_Name));
		};
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetch_store_items());
	}, []);
	//======================================================================

	return (
		<>
			<div>
				<Grid container className={styles.top_container}>
					<Grid item xs={3}>
						<Typography className={styles.userName}> Hi {user_name}</Typography>
					</Grid>

					<Grid item xs={9} className={styles.buttons}>
						<Button
							fontSize="small"
							startIcon={<ShareIcon />}
							className={styles.topIconButton1}
						>
							Share
						</Button>
						<Button
							fontSize="small"
							startIcon={<AddIcon />}
							className={styles.topIconButton2}
						>
							Delete List
						</Button>
					</Grid>
				</Grid>
			</div>
			<div>
				<Add_item setbol={setBol} />
			</div>
			<div>
				{items.map((item) => (
					<List item={item} />
				))}
			</div>
			<div>
				<Start_Shooping />
			</div>
		</>
	);
};

export default Lists;
