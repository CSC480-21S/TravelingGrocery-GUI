import React, {  useState } from "react";
import {useLocation} from "react-router-dom";

const Analytic = ({name, totalTime, totalItems, stat}) => {

    const container = {
        background: '#f4f4f4',
        margin: "5px",
        padding: "10px 20px",
        height: "130px",
        borderRadius: "15px",
        cursor: "pointer",
        outline: "none",
        display: "flex",
    };

    const leftelement = {
        display: "inline-block",
        float: "left",
        width: "100px",
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
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Total Items:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Total Time:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Items/Minutes:</p>
            </div>

            <div style={rightelement}>
                <p style={{ fontSize: "50%" }}>{name}</p>
                <p style={{ fontSize: "50%" }}>{totalItems} items</p>
                <p style={{ fontSize: "50%" }}>{totalTime} minutes</p>
                <p style={{ fontSize: "50%" }}>{stat} item/min</p>
            </div>
        </div>
    )
}

export default Analytic;