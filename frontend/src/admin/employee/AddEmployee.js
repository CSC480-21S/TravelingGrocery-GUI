import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {Dialog, DialogTitle, TextField} from "@material-ui/core";
import axios from "axios";
import {useSelector} from "react-redux";
import {add_employee} from "../../api/api";

const AddEmployee = () => {

    const token = useState(useSelector((state) => state.user.tk.tk))[0];

    const [email, setEmail] = useState();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

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


    const buttonClicked = async () => {

        /*check for empty text box*/
        if(email === "")
        {
            alert("Make sure you entered all information!")
            return;
        }

        console.log(email);
        const employee = {
            "token": token,
            "email": email
        }

        const data = await add_employee(employee, token);
        setMessage(data.data)
        console.log(data);

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
                    {message}
                </DialogTitle>
            </Dialog>
        </div>


    )

}

export default AddEmployee;