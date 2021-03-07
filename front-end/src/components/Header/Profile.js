//Libraries
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
//Google Stuff
import {useGoogleLogout} from 'react-google-login'
//Components or Local imports

//Styles
const Profile = ({open, onClose}) => {

    const client_id ='534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com'
    const history = useHistory()
    const handleClose = () => {
        onClose()
    }
    const handleSignOut = () =>{
        console.log('clicled')
        signOut()
        onClose()
    }

    const responseGoogle = (response) => {
        console.log("Response from Google AUTH: " + response)
        history.push('/login')
      }

    const {signOut } = useGoogleLogout({
        cliendId: client_id,
        onLogoutSuccess: responseGoogle,
        onFailure: responseGoogle,
    })


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContentText>
                Test
            </DialogContentText>
            <Button onClick={handleSignOut}>Sign out</Button>
        </Dialog>
    )
}

export default Profile
