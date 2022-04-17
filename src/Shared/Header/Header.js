import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jpg'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div className='container '>
            <div className='d-flex justify-content-between'>
                <div>
                    <Link to="/">
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </div>
                <div className='my-3'>
                    {
                        user ? <button onClick={logOut} className='sign-out'>Sign Out</button> : <Link className='text-decoration-none text-dark login' to="Login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;