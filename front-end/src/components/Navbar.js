import React, {useState} from 'react'
import '../App.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'

import { Link } from 'react-router-dom';

function Navbar() {
    // Used for showing a button to access nav links when screen size small
    const [showLinks, setShowLinks] = useState(false);
    return ( 
        <div className="Navbar"> 
            <div className="leftSide" id={showLinks ? "hidden" : ""}>
                {/* If showLinks is true, set id to "hidden" else set to "" */}
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/dashboard" onClick={()=> setShowLinks(!showLinks)}>Dashboard</Link>
                    <Link to="/sharelist" onClick={()=> setShowLinks(!showLinks)}>Share List</Link>
                    <Link to="/profile" onClick={()=> setShowLinks(!showLinks)}>Your Profile</Link>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}> <ReorderIcon /> </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..." />
                <button> 
                    <SearchIcon /> 
                </button>
            </div>
        </div>
    );
}

export default Navbar
