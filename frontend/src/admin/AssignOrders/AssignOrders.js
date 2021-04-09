import React, { useEffect, useState } from "react";
import Order from "./Order";
import Button from "@material-ui/core/Button";
import AssignOrders_styles from "../../styles/AssignOrders_styles";
import makeStyles from "../../user/Lists/Edit_List/Edit_List_styles";
import EmployeeInfo from "../employee/EmployeeInfo";
import {useHistory} from "react-router-dom";

const AssignOrders = () => {

    const [orders, setOrders] = useState([]);
    const final = []
    const styles = makeStyles;

    const history = useHistory();


    const button1 = {
        background: '#FFFFFF',
            border: '1px solid #000000',
            borderRadius: '15px',
            width: '90%'
        }



    const axios = require("axios");

    const getCurrentEmployees = async () => {
        try {
            const res = await axios.get("http://localhost:5050/Orders");

            /*loop thru order*/
            {res.data.map((order) => (
                order.bool = false
            ))}
            setOrders(res.data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getCurrentEmployees().then((r) => console.log(orders));
    }, []);

    const routeChange = () =>{
        let path = "/admin/addEmployee";
        history.push({
            pathname: '/admin/assignOrders/assignEmployees',
            state: {orders: final}
        });
    }

    const buttonClicked = () => {
        let count = 0;
        orders.map((order) => {
            if(order.bool)
            {
                final.push(order)
            }
        })
        console.log(final)
        //console.log(finalOrder)
        /*if the admin didnt select any order and then pressing assign order button*/
        if(final.length === 0)
        {
            alert("Need to select atleast one order!")
            return
        }

        /*redirect to assign employees page*/
        routeChange()
    }

    return (

        <div style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
        }}>
            <h1 style={{fontSize: '120%'}}>Assign Orders</h1>
            <div>
                <h5 style={{textAlign: 'left', paddingLeft: '20px'}}> Available Orders:</h5>

                {orders.map((order) => (
                    <Order
                        key={order.id}
                        orderNum={order.OrderNumber}
                        numItems={order.NumOfItems}
                        name={order.Customer}
                        time={order.Time}
                        orders={orders}
                        setOrders={setOrders}
                    />
                ))}
            </div>

            <div style={{paddingTop: '60px', paddingBottom: '20px'}}>
                <Button
                    fontSize="small"
                    style={button1}
                    onClick={buttonClicked}
                >
                    Assign Orders
                </Button>

            </div>



        </div>
    )
}
export default AssignOrders;
