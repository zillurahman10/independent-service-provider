import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jpg'

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='my-3 mx-5'>
                    <Link to="Login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;