import React from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
//Local components
import { send_Google_User_info } from '../../actions/actions'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const client_id = '534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com'

    const onSuccess = (response) => {
        console.log(`Login Success: currentUser ${response.profileObj}`)
        console.log('Loaded: ' + loaded)

        dispatch(send_Google_User_info(response))
        history.push('/home')
    }
    const onFailure = (response) => {
        console.log('Error: ' + response)
    }

    const { signIn, loaded } = useGoogleLogin({ 
        onSuccess: onSuccess,
        clientId: client_id,
        isSignedIn: true,
        onFailure: onFailure,
    })

    return (
        <div>
            <Button onClick={signIn} className='login_button'>
                Login
            </Button>
        </div>
    )
}

export default Login
