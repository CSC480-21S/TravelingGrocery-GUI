import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Dashboard = () => {
    document.title = "Dashboard - Admin";

    const buttons = {
        textAlign: "center",
        fontSize: "x-large",
        backgroundColor: "white",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "25px",
        paddingRight: "25px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "1px solid black",
        width: "-webkit-fill-available"
    }

    const butDiv = {
        display: "inline-grid",
        position: "relative",
        left: "50%",
        marginLeft: "-120px"
    }

    return (
        <div className="Admin">
            <title>Dashboard</title>
            <h1 style={{ textAlign: "center" }}>Dashboard</h1>

            <div className="Buttons" style = {butDiv}>
                <Link to="/assignOrders"><button style={buttons}>Assign Orders</button></Link> <br/>
                <Link to="/employees"><button style={buttons}>Employees</button></Link> <br/>
                <Link to="/manageInventory"><button style={buttons}>Manage Inventory</button></Link> <br/>
                <Link to="/analytics"><button style={buttons}>Analytics</button></Link>
            </div>

        </div>
    );
}

export default Dashboard