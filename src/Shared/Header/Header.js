import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jfif'
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
                <div className=''>
                    {
                        user ? <button onClick={logOut} className='sign-out mt-4'>Sign Out</button> :
                            <div className='mt-4'>
                                <Link to="/blogs" className='links'>Blogs</Link>
                                <Link className='links' to="/login">Login</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;