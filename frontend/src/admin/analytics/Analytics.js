import React, {  useState } from "react";
import { TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {list_getAnalytics} from '../../api/api'
import { isCompositeComponent } from "react-dom/test-utils";

const Analytics = () => {
    const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onChangeUser = (event) => {
        setUser(event.target.value);
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

    const buttonClicked = () => {
        if(user === null)
        {
            alert("Make sure you entered all information!")
            return
        }

        const Users = {
            "Users": [user]
        }
        const res = list_getAnalytics(Users, token)
        console.log(res)
        handleClickOpen()
    }

	return (
		<div>
            <h1 style={{textAlign: 'center', fontSize: '120%'}}> Analytics </h1>
            <div style={{padding: '20px'}}>
                <h1 style={{fontSize: '80%'}}> User</h1>
                <TextField
                    id="User"
                    label="Enter user"
                    value={user}
                    onChange={onChangeUser}
                    fullWidth={true}
                    variant="outlined"
                    inputProps={{ style: {backgroundColor: '#F6F6F6'}}}
                />
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

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Display items/hr here"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
		</div>
	);
};

export default Analytics;