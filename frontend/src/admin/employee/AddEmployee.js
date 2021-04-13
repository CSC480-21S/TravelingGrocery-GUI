import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {Dialog, DialogTitle, TextField} from "@material-ui/core";
import axios from "axios";


const AddEmployee = () => {

    const [email, setEmail] = useState();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const center = {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
    }

    const button_style = {
        background: "#222258",
        borderRadius: "10px",
        fontWeight: "500px",
        color: "#FFFFFF",
        height: "40px",
        width: "100%",

    };

    const onChange = (event) => {
        setEmail(event.target.value);
    };


    const buttonClicked = ()=>{
        console.log(email);
        const employee = {
            "userType": "employee",
            "email": email
    }

        handleClickOpen();
    };

    return (
        <div>
            <h1 style={center}>Employee</h1>
            <h3>Add Employee</h3>
            <h4>Email:</h4>

            <div style = {{paddingBottom: "30px"}}>
                <TextField id="Email" label="Enter Email..." value={email || ""} onChange={onChange} fullWidth={true} variant="outlined" inputProps={{ style: {backgroundColor: '#F6F6F6'}}}/>
            </div>
            <Button
                fontSize="small"
                style={button_style}
                onClick={buttonClicked}
            >
                Add Employee
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Employee Successfully Added"}
                </DialogTitle>
            </Dialog>
        </div>


    )

}

export default AddEmployee;