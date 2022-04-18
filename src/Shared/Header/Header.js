import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jfif'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <Navbar bg="light" expand="lg" sticky='top' className='navbar-dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/blogs" className='links'>Blogs</Link>
                        <Link to='/about' className='links'>About</Link>
                        {
                            user ? <button onClick={logOut} className='sign-out'>Sign Out</button> :
                                <div>
                                    <Link className='links' to="/login">Login</Link>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand as={Link} to="/">
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
            </Container>
        </Navbar >
    );
};

export default Header;