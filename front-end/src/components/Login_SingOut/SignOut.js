import React from 'react'
import {useGoogleLogout} from 'react-google-login'
import Button from 'material-ui/core/Button'
export const SignOut = () => {
    const client_id ='534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com'
    const onLogoutSuccess = (res) => {
        console.log(`FUCKING SUCESS`)
        alert(res)
    }
    const onFailure = (res) => {
        console.log('Error: ' +  res.message)
    }
    const {signOut} = useGoogleLogout({
        client_id: client_id,
        isSignedIn: true,
        onLogoutSuccess: onLogoutSuccess,
        onFailure: onFailure,
    })
    return (
        <div>
            <Button onClick={signOut}>Sign out</Button>
        </div>
    )
}
