import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const Header = () => {
  const { users, logOut } = useAuth();
    return (
        <>
    <Navbar bg="primary" collapseOnSelect expand="lg" sticky="top"  variant="dark">
    <Container>
    <Navbar.Brand href="#home">Fitness Club</Navbar.Brand>
    <Nav className="">
              <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
              <Navbar.Toggle/>
    <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
    <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
    <Nav.Link as={Link} to="/about">About us</Nav.Link>
              {
                users?.email ?
                <Button variant="success" onClick={logOut}>LogOut</Button> :
                  <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            }  
    <Navbar.Collapse className="justify-content-end ms-auto">
    <Navbar.Text>
      Sign in as <a className="text-warning" href="#login">{users?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>

    </Nav>
    </Container>
  </Navbar>

        </>
    );
};

export default Header;