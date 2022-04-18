import React from 'react';
import './Header.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ borderBottom: match ? "2px solid red" : "none", paddingBottom: "5px" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    return (
        <Navbar bg="light" expand="lg" sticky='top' className='navbar-dark mb-3' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <CustomLink to="/blogs" className='links'>Blogs</CustomLink>
                        <CustomLink to='/about' className='links'>About</CustomLink>
                        {
                            user ? <button onClick={logOut} className='sign-out'>Sign Out</button> :
                                <div>
                                    <CustomLink className='links' to="/login">Login</CustomLink>
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