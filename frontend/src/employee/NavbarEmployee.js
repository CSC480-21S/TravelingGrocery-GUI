import React, {useState} from 'react'
import "../styles/Navbar.css";

import ReorderIcon from '@material-ui/icons/Reorder'
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import logo from '../images/logo.png'

function NavbarEmployee() {
	// Used for showing a button to access nav links when screen size small
    const [showLinks, setShowLinks] = useState(false);
	const [width, set_width] = useState(window.innerWidth);

	const handleResize = () => {
        set_width(window.innerWidth);
    };

	const onClick = () => {
        setShowLinks(!showLinks);

    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
		if (showLinks) {
            document.body.style.overflow = "hidden";
        }
        if (!showLinks) {
            document.body.style.overflow = "auto";
        }
		// show scrollbar when hamburger menu not activated
		// protects against bug where scrollbar dissapears forever all across app
        if (width >= 900) document.body.style.overflow = "auto";
    });

    return ( 
        <div className="Navbar"> 
            <div className="leftSide">
                <img className="logo" alt="Logo" src={logo} />
            </div>
            <div className="rightSide" id={showLinks ? "hidden" : ""}>
                {/* If showLinks is true, set id to "hidden" else set to "" */}
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/employee/home" onClick={()=> setShowLinks(!showLinks)}>Home</Link>
                    <Link to="/employee/profile" onClick={() => onClick()}>
						Profile
					</Link>
                    <Link to="/employee/faq" onClick={() => onClick()}>
						FAQ
					</Link>
                    <Link to="/employee/about" onClick={() => onClick()}>
                        About
                    </Link>
					{/* NOTE: Put a link to your component here */}
                </div>
                <button onClick={() => onClick()}> <ReorderIcon /> </button>
            </div>
        </div>
    );
}

export default NavbarEmployee
