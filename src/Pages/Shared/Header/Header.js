import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand><Link className='title-logo' to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex flex-row align-items-center'>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='user-name'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Link className='login-logout-link' to='/login'>Login</Link>
                                        <Link className='login-logout-link' to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image
                                        src={user?.photoURL}
                                        roundedCircle
                                        style={{ height: '40px' }}></Image>
                                    :
                                    <FaUserAlt></FaUserAlt>
                            }
                        </Link>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant='danger'>Logout</Button>
                                    </>
                                    :
                                    <></>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;