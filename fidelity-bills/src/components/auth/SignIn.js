/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/07/2022 - 14:43:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/07/2022
    * - Author          : 
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

const clientId = "43021450945-ijcouc864fl7kdaad1j4mhofrgioahm5.apps.googleusercontent.com";

const SignIn = () => {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [signIn, setSignIn] = useState(true);
    // const onLoginSuccess = (res) => {
    //     console.log('Login Success:', res.profileObj);
    //     setShowloginButton(false);
    //     setShowlogoutButton(true);
    // };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear(); 
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    const navigate = useNavigate();

    const handelGoToLogin = () => {
        navigate('../../Dashboard')
    }
   
    

  return (
    <div className='gbg'>
       { showloginButton ?
                <GoogleLogin
                    className='google'
                    id='googles'
                    clientId={clientId}
                    buttonText="Login with google"
                    // onSuccess={onLoginSuccess}
                    onClick={handelGoToLogin}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                   className='google'
                    clientId={clientId}
                    buttonText="Log Out with google"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
    </div>
  )
}

export default SignIn