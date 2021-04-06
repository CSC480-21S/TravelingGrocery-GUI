//Regular imports
import React, { useState, useEffect, useRef } from "react";
//Components
import FirstSectionList from "./Sections/First/First_Section_List";
import SecondSectionList from "./Sections/Second/Second_Section_List";
import ThirdSectionList from "./Sections/Third/Third_Section_List";
//Styles
import makeStyles from "./item_styles";

const Item = ({ item }) => {
	const styles = makeStyles();
	//Edit List Content
	const [item_count, set_Item_count] = useState(item.quantityItem);
	const [isChecked, set_isChecked] = useState(item.isChecked);
	const [container, setContainer] = useState(true);
	//Use ref does not build on re-renders
	const isMounted = useRef(false);
	const isMounted2 = useRef(false);

	const handleTap = () => {
		setContainer(!container);
		set_isChecked(!isChecked);
	};
	//UPDATE CHECK OF CURENT ITEM
	useEffect(() => {
		//Prevent rendering on mount
		if (isMounted.current) {
			item.isChecked = isChecked;
		} else {
			isMounted.current = true;
		}
	}, [isChecked, item]);

	//UPDATE COUNT OF CURRENT ITEM
	useEffect(() => {
		//Prevent rendering on mount
		if (isMounted2.current) {
			item.quantityItem = item_count;
			item.update = true;
		} else {
			isMounted2.current = true;
		}
	}, [item_count, item]);

	return (
		<div style={{ paddingLeft: 20, paddingRight: 20 }}>
			<div
				className={container ? styles.container : styles.container2}
				onClick={handleTap}
			>
				{/* Item image */}
				<div className={styles.item_Image_Container}>
					<FirstSectionList />
				</div>

				<div className={styles.item_details_Container}>
					<SecondSectionList item={item} />
				</div>
				<div className={styles.third_section_list_Container}>
					<ThirdSectionList
						item_count={item_count}
						set_Item_count={set_Item_count}
					/>
				</div>
			</div>
		</div>
	);
};

export default Item;
