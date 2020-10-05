import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Resource/logos/lg.png'
import './MainNav.css'

const MainNav = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light">
                <Navbar.Brand to="/">
                    <img src={logo} width="150" height="50" alt="" />
                </Navbar.Brand>
                <Nav className="ml-auto font-weight-bold m-3">
                    <Link to="/home">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/addEvent">Add Event</Link>
                    <Link to="/login">
                        <Button className=" mr-3">Register</Button>
                    </Link>
                    <Link to="/admin">
                        <Button variant="secondary" className=" mr-3" type="submit">Admin</Button>
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    );
};

export default MainNav;