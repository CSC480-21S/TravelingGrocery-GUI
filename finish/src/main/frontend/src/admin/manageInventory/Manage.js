import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {Redirect, useHistory} from "react-router-dom";

const Manage = () =>
{
    const history = useHistory();

    const container = {
        background: "#f4f4f4",
        margin: "5px",
        padding: "10px 20px",
        height: "100px",
        cursor: "pointer",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const routeChange = () =>{
       let path = `/admin/inventory/additem`;
        history.push(path);
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '120%'}}> Manage Inventory </h1>
            <div style={{textAlign: 'right', padding: '10px'}}>
                <button style={{backgroundColor: 'white', height: '30px'}}>VIEW OUT-OF-STOCK ITEMS</button>
            </div>

            <div style={container} onClick={routeChange}>
                <h3
                    style={{
                        verticalAlign: "middle",
                        fontSize: "170%",
                        color: "darkgray",
                        position: "absolute",
                    }}
                >
                    {" "}
                    + Add Item
                </h3>
            </div>

        </div>
    )
}

export default Manage;