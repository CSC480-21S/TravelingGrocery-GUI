import React, {useState} from 'react'
import '../App.css'

import ReorderIcon from '@material-ui/icons/Reorder'
import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

function NavbarEmployee() {
    // Used for showing a button to access nav links when screen size small
    const [showLinks, setShowLinks] = useState(false);
    return ( 
        <div className="Navbar"> 
            <div className="leftSide">
                <img className="logo" alt="Logo" src={logo} />
            </div>
            <div className="rightSide" id={showLinks ? "hidden" : ""}>
                {/* If showLinks is true, set id to "hidden" else set to "" */}
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/employee/home" onClick={()=> setShowLinks(!showLinks)}>Employee Home</Link>
                    <Link to="/employee/profile" onClick={() => setShowLinks(!showLinks)}>
						Profile
					</Link>
                    <Link to="/developer" onClick={()=> setShowLinks(!showLinks)}>Developer</Link>
					{/* NOTE: Put a link to your component here */}
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}> <ReorderIcon /> </button>
            </div>
        </div>
    );
}

export default NavbarEmployee