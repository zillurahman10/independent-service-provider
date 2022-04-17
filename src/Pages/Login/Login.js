import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleLogo from '../../../src/images/google-logo.png'
import facebookLogo from '../../../src/images/facebook-logo.webp'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [errorElement, setErrorElement] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger d-flex justify-content-center mt-2'>{error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }

    const passwordReset = () => {
        sendPasswordResetEmail(email)
        if (email === "") {
            toast('Enter your email')
        }
        else {
            toast('Please check your inbox')
        }
    }

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <div className='form-box'>
                <form onSubmit={handleSubmit}>
                    <h2 className=''>Please Login</h2>
                    <div className='input-box'>
                        <FontAwesomeIcon className='me-2' icon={faEnvelope}></FontAwesomeIcon>
                        <input onBlur={handleEmail} className='inputs my-2' type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <br />
                    <div className='input-box'>
                        <FontAwesomeIcon className='me-2' icon={faKey}></FontAwesomeIcon>
                        <input onBlur={handlePassword} className='inputs my-2' type="password" name="password" id="" placeholder='Password' required />
                    </div>
                    <p className='ms-5 mt-3'>Forgot password? <button onClick={passwordReset} className='bg-light text-primary' style={{ border: 'none' }}>Reset password</button></p>
                    <p className='text-danger'>{errorElement}</p>
                    <br />
                    <input className='submit-inputs my-2 d-flex justify-content-center' type="submit" value="Login" />
                </form>
                <p className='mt-2 d-flex justify-content-center'>New in DOC-FINE? <Link className='text-decoration-none ms-2 ' to="/signup">Create a new account</Link></p>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px', width: '200px' }} className="bg-secondary"></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px', width: '200px' }} className="bg-secondary"></div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div>
                        <button className="google-sign-in-btn d-block mb-2">
                            <img className='google-logo' src={googleLogo} alt="" />
                            <p className='d-inline ms-3'>Sign in with google</p>
                        </button>
                        <button className="facebook-sign-in-btn">
                            <img className='google-logo' src={facebookLogo} alt="" />
                            <p className='d-inline ms-3'>Sign in with facebook</p>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;