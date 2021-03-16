import React, {useState} from 'react'
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

function Navbar() {
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
                    <Link to="/dashboard" onClick={()=> setShowLinks(!showLinks)}>Dashboard</Link>
                    <Link to="/sharelist" onClick={()=> setShowLinks(!showLinks)}>Share</Link>
                    <Link to="/profile" onClick={()=> setShowLinks(!showLinks)}>Profile</Link>
                    <Link to="/developer" onClick={()=> setShowLinks(!showLinks)}>Developer</Link>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}> <ReorderIcon /> </button>
            </div>
        </div>
    );
}

export default Navbar