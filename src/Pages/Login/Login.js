import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorElement, setErrorElement] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

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
    if (error) {
        setErrorElement(error.message)
    }
    if (user) {
        navigate('/')
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
                        <FontAwesomeIcon></FontAwesomeIcon>
                    </div>
                    <p className='text-danger'>{errorElement}</p>
                    <br />
                    <input className='submit-inputs my-2 d-flex justify-content-center' type="submit" value="Login" />
                </form>
                <p className='mt-2 d-flex justify-content-center'>New in DOC-FINE? <Link className='text-decoration-none ms-2 ' to="/signup">Create a new account</Link></p>
            </div>
        </div>
    );
};

export default Login;