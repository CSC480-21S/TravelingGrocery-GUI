import React, { useState } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
	// Used for showing a button to access nav links when screen size small
    const [showLinks, setShowLinks] = useState(false);

    const onClick = () => {
        setShowLinks(!showLinks);
        if(!showLinks) {
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "auto";
        }
    }

	return (
		<div className="Navbar">
			<div className="leftSide">
				<img className="logo" alt="Logo" src={logo} />
			</div>
			<div className="rightSide" id={showLinks ? "hidden" : ""}>
				{/* If showLinks is true, set id to "hidden" else set to "" */}
				<div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/home" onClick={() => onClick()}>
						Home
					</Link>
                    <Link to="/user/offline_navigation" onClick={() => onClick()}>
                        Offline Navigation
					</Link>
                    <Link to="/profile" onClick={() => onClick()}>
						Profile
					</Link>
                    <Link to="/faq" onClick={() => onClick()}>
                        FAQ
					</Link>
                    <Link to="/about" onClick={() => onClick()}>
                        About
                    </Link>
				</div>
                <button onClick={() => onClick()}>
					{" "}
					<ReorderIcon />{" "}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
