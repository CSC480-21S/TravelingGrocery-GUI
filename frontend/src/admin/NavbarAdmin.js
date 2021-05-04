import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const NavbarAdmin = () => {
	// Used for showing a button to access nav links when screen size small
	const [showLinks, setShowLinks] = useState(false);

    const onClick = () => {
        setShowLinks(!showLinks);
        if (!showLinks) {
            document.body.style.overflow = "hidden";
        }
        else {
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
                    <Link to="/admin/home" onClick={() => onClick()}>
						Home
					</Link>
                    <Link to="/admin/profile" onClick={() => onClick()}>
						Profile
					</Link>
                    <Link to="/admin/faq" onClick={() => onClick()}>
                        FAQ
					</Link>
                    <Link to="/admin/about" onClick={() => onClick()}>
                        About
                    </Link>
					{/* NOTE: Put a link to your component here */}
				</div>
                <button onClick={() => onClick()}>
					{" "}
					<ReorderIcon />{" "}
				</button>
			</div>
		</div>
	);
};

export default NavbarAdmin;
