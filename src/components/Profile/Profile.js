import { React, useEffect, useState } from "react";
import {useSelector} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {useGoogleLogout} from "react-google-login";
import {useHistory} from "react-router-dom";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

const Profile = () => {
    const email = useState(useSelector(state => state.login.profileObj.email));
    const name = useState(useSelector(state=>state.login.profileObj.givenName));
    const lastName = useState(useSelector(state=>state.login.profileObj.familyName));
    const imageURL = useState(useSelector(state=>state.login.profileObj.imageUrl));
    const id = useState(useSelector(state=>state.login.profileObj.googleId));
    const history = useHistory();
    const astext = {
        background:'none',
        border:'none',
        margin:0,
        padding:0,
        cursor: 'pointer'
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openEnd, setOpenEnd] = useState(false);

    const handleClickOpenEnd = () => {
        setOpenEnd(true);
    };

    const handleCloseEnd = () => {
        setOpenEnd(false);
    };

    const onLogoutSuccess = () => {
        console.log('logout');
        history.push('/login');
    };
    const onFailure = () => {
        console.log('logout fail');
    };
    const { signOut } = useGoogleLogout({
        clientId: "534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com",
        onLogoutSuccess: onLogoutSuccess,
        onFailure: onFailure,
    });


    const handleClick = () => {
        handleClose();
        handleClickOpenEnd();
    }

    return (
        <div style={{justifyContent:'center', alignItems:'center'}}>
            <h1 style={{textAlign:'center'}}> Profile </h1>

            <Avatar src={imageURL} style={{position: 'relative',height: 'auto', width: '150px', marginBottom: '50px', marginLeft:'10%'}}>

            </Avatar>

            <h2 style={{marginLeft:'10%', marginBottom: '40px', fontSize: '100%'}}> Email: {email[0]} </h2>
            <h2 style={{marginLeft:'10%', marginBottom: '200px', fontSize: '100%'}}> Name: {name[0]} {lastName[0]}</h2>

            <button class = {astext} style={{color:'red',marginLeft:'10%', fontSize: '110%'}} onClick={signOut}> Logout </button>
            <p></p>
            <button class = {astext} style={{color:'red',marginLeft:'10%', fontSize: '110%'}} onClick={handleClickOpen}> Delete Account</button>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your profile?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleClick} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openEnd}
                onClose={handleCloseEnd}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Profile Successfully deleted"}</DialogTitle>
                <DialogActions>
                    <Button onClick={signOut} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
};

export default Profile;
