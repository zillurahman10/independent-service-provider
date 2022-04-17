import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'


const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorElement, setErrorElement] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
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
    console.log('name : ', name, 'Email : ', email, 'Password : ', password);

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    if (error) {
        setErrorElement(error.message)
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
                <p className='mt-2 d-flex justify-content-center'>Already have an accaount? <Link className='text-decoration-none ms-2 ' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;