import React, {  useState } from "react";
import { TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {list_getAnalytics} from '../../api/api'
import { isCompositeComponent } from "react-dom/test-utils";
import Select from "react-select";
import {useHistory} from "react-router-dom";

const Analytics = () => {

    const [user, setUser] = useState(null);
    const history = useHistory();

    const routeChange = () => {
        history.push({
            pathname: "/admin/analytics/show",
            state: { orders: user },
        });
    };


    const button_style = {
        background: "#222258",
        borderRadius: "10px",
        fontFamily: "Inter",
        fontWeight: "500px",
        color: "#FFFFFF",
        height: "40px",
        width: "100%",
    };

    const options = [
        { value: "Employee", label: 'Employee' },
        { value: "Shopper", label: 'Shopper' },
    ]

    const buttonClicked = () => {
        if(user === null)
        {
            alert("Make sure you entered all information!")
            return
        }

        routeChange()

    }

    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '120%'}}> Analytics </h1>
            <div style={{padding: '20px'}}>

                <Select
                    id="Side"
                    onChange={setUser}
                    value={user}
                    options={options}
                    placeholder="Select"/>
            </div>

            <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <Button
                    fontSize="small"
                    style={button_style}
                    onClick={buttonClicked}
                >
                    Get Analytics
                </Button>
            </div>

        </div>
    );
};

export default Analytics;