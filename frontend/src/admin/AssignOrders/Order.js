import React, { useEffect, useState } from "react";

const Order = ({task, orderNum, numItems, name, time, orders, setOrders}) =>
{
    const[color, setColor] = useState('#f4f4f4')
    const[clicked, setclicked] = useState(false)

    const changeColor = () => {
        if(color === '#f4f4f4')
        {
            setColor('#DADADA')
            setclicked(true)

            orders.map((order) => {
                if(order.OrderNumber === orderNum)
                {

                    order.bool = true
                }
            }
            )
            console.log(JSON.stringify(orders))
            setOrders(orders)

        }
        else
        {
            setColor('#f4f4f4')
            orders.map((order) => {
                    if(order.OrderNumber === orderNum)
                    {
                        order.bool = false
                    }
                }
            )
            console.log(JSON.stringify(orders))
            setOrders(orders)
        }
    }
    const leftelement = {
        display: "inline-block",
        float: "left",
        width: "130px",
        textAlign: "left",

    };

    const rightelement = {
        display: "inline-block",
        float: "left",
        textAlign: "left",

    };

    const container = {
        background: color,
        margin: "5px",
        padding: "10px 20px",
        height: "130px",
        borderRadius: '15px',
        display: 'flex',
        cursor: 'pointer'
    };

    return (
        <div style={container} onClick={changeColor}>
            <div style={leftelement}>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Order Number:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Number of Items:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Customer:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Time:</p>
            </div>

            <div style={rightelement}>
                <p style={{ fontSize: "50%" }}>{orderNum}</p>
                <p style={{ fontSize: "50%" }}>{numItems}</p>
                <p style={{ fontSize: "50%" }}>{name}</p>
                <p style={{ fontSize: "50%" }}>{time}</p>
            </div>
        </div>
    );
}

export default Order;