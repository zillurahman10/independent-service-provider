import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignUp.css'
import googleLogo from '../../../src/images/google-logo.png'
import facebookLogo from '../../../src/images/facebook-logo.webp'


const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [errorElement, setErrorElement] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleeError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()

    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }



    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
        toast('An email verifiaction mail sent in your email')
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger d-flex justify-content-center mt-2'>{error?.message}</p>
    }
    if (user) {
        navigate('/login')
    }

    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <div className='form-box'>
                <form onSubmit={handleSubmit}>
                    <h2 className=''>Please Sign Up</h2>
                    <div className='input-box'>
                        <FontAwesomeIcon className='me-2' icon={faFont} />
                        <input onBlur={handleName} className='inputs my-2' type="text" placeholder='Name' required />
                    </div>
                    <br />
                    <div className='input-box'>
                        <FontAwesomeIcon className='me-2' icon={faEnvelope}></FontAwesomeIcon>
                        <input onBlur={handleEmail} className='inputs my-2' type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <br />
                    <div className='input-box'>
                        <FontAwesomeIcon className='me-2' icon={faKey}></FontAwesomeIcon>
                        <input onBlur={handlePassword} className='inputs my-2' type="password" name="password" id="" placeholder='Password' required />
                        <FontAwesomeIcon></FontAwesomeIcon>
                    </div>
                    <p className='text-danger'>{errorElement}</p>
                    <br />
                    <input className='submit-inputs my-2 d-flex justify-content-center' type="submit" value="Sign Up" />
                </form>
                <p className='mt-2 d-flex justify-content-center'>Already have an account? <Link className='text-decoration-none ms-2 ' to="/login">Login</Link></p>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px', width: '200px' }} className="bg-secondary"></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: '1px', width: '200px' }} className="bg-secondary"></div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div>
                        <button onClick={() => signInWithGoogle()} className="google-sign-in-btn d-block mb-2">
                            <img className='google-logo' src={googleLogo} alt="" />
                            <p className='d-inline ms-3'>Sign in with google</p>
                        </button>
                        <button onClick={() => signInWithFacebook()} className="facebook-sign-in-btn">
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

export default SignUp;