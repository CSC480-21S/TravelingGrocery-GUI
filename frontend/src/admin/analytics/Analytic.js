import React, {  useState } from "react";
import {useLocation} from "react-router-dom";

const Analytic = ({name, stat}) => {

    const container = {
        background: color,
        margin: "5px",
        padding: "10px 20px",
        height: "100px",
        borderRadius: "15px",
        cursor: "pointer",
        outline: "none",
        display: "flex",
    };

    const leftelement = {
        display: "inline-block",
        float: "left",
        width: "50px",
        textAlign: "left",
    };

    const rightelement = {
        display: "inline-block",
        float: "left",
        textAlign: "left",
    };

    return (

        <div style={container}>
            <div style={leftelement}>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Name:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Average Items Shopped Per List:</p>
            </div>

            <div style={rightelement}>
                <p style={{ fontSize: "50%" }}>{name}</p>
                <p style={{ fontSize: "50%" }}>{stat}</p>
            </div>
        </div>
    )
}

export default Analytic;