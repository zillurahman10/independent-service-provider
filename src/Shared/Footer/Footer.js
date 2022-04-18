import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
    const [email, setEmail] = useState("")
    const today = new Date();
    const year = today.getFullYear()
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        toast("Submited")
    }
    return (
        <div className=' d-flex justify-content-between p-5 mt-5' style={{ position: 'relative', top: '0', backgroundColor: "navy", color: 'white' }}>
            <div>
                <p className=''><small><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Copyright  {year}</small></p>
            </div>
            <form className='align-items-end'>
                <p>Let in your touch</p>
                <input onBlur={handleEmail} type="email" placeholder='Enter your email' required />
                <input onClick={handleSubmit} type="submit" value="Submit" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Footer;