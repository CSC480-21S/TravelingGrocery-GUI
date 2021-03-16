import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
//Local imports
import Item from "./Item/Item";
import { fetch_store_items } from "../../actions/actions";
import Search_Bar from "./Search_Bar/Search_Bar";

const Items = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.store_list); //Fecth items of the store
	const userName = useSelector((state) => state.login.profileObj.name);
	const list_Name = useSelector((state) => state.homePage.name);

	useEffect(() => {
		dispatch(fetch_store_items());
	}, [dispatch]);
	return (
		<div>
			<Search_Bar />
			<div>
				<Typography>Adding Items to {list_Name}</Typography>
			</div>
			<div>
				{items.map((item) => (
					<Item item={item} />
				))}
			</div>
		</div>
	);
};

export default Items;
