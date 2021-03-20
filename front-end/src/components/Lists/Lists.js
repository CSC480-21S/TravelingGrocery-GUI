import React from "react";
//Redux
import { useSelector } from "react-redux";
//Components
import Regular_List from "./Regular_List/Regular_List";

const Lists = () => {
	const items = useSelector((state) => state.lists); //get items

	return (
		<>
			<div>
				<Regular_List items={items} />
			</div>
		</>
	);
};

export default Lists;
