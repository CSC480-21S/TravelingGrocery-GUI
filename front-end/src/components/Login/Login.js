import React from 'react'
import { useGoogleLogin } from 'react-google-login'

const Login = () => {
    const client_id ='534704394140-vgqdcmbmel4gn1bfa7g3hd6h70qm5c6m.apps.googleusercontent.com'
    
    const responseGoogle = (response) => {
        console.log(response);
      }
    const { signIn, loaded } = useGoogleLogin({
        onSuccess: responseGoogle,
        clientId: client_id,
        isSignedIn: true,
        onFailure: responseGoogle,
      })


    const refreshTokenSetup = (res) => {
        let refrechTiming = (res.tokenObj.expires_in )
    }

    const onSucess = (res) => {
        console.log(`Login Success: currentUser ${res.profileObj}`)
        
    }

    return (
        <div>
            <button onClick={signIn} className='login_button'>
                <span>Sign in with Google</span>
            </button>
        </div>
    )
}

export default Login
