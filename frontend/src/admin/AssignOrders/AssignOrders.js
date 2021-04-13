import React, { useEffect, useState } from "react";
import Order from "./Order";
import Button from "@material-ui/core/Button";
import AssignOrders_styles from "../../styles/AssignOrders_styles";
import makeStyles from "../../user/Lists/Edit_List/Edit_List_styles";
import EmployeeInfo from "../employee/EmployeeInfo";
import {useHistory} from "react-router-dom";
import {unassignedList, list_getItems} from "../../api/api"
import {useSelector} from "react-redux";

const AssignOrders = () => {
    document.title = "Assign Orders";
    const token = useState(useSelector((state) => state.user.tk.tk))[0];
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
        let temp2
        const res = await unassignedList(token);
        const temp = res.data.shoppingLists;
        console.log(token)
        //console.log(JSON.stringify(temp))

         await temp.map( async (order)  =>  {
            order.num = getNumofItems(order)

             let temp2
             await list_getItems(order.shoppingListID, token).then(r => temp2 = r.data.listItems)

            let count = 0
            temp2.map((r) => (
                count = count + r.quantityItem
            ))
            order.num = count

             console.log(order)
    })

        console.log(JSON.stringify(temp))
        //setOrders(temp.shoppingLists)
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
    const getNumofItems = async (order) => {
        let temp
        let count = 0
        await list_getItems(order.shoppingListID, token).then(r => temp = r.data.listItems)

        //console.log(JSON.stringify(temp))
        temp.map((r) => (
            count = count + r.quantityItem
        ))

        return count
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
                        orderNum={order.shoppingListID}
                        numItems={order.shoppingListID}
                        name={order.email}
                        time={order.num}
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
