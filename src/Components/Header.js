import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { logo } from './Image'

function Header() {
    return (
        <React.Fragment>
            <header>
                <Navbar className="navbar-expand-lg navbar-dark p-0" expand="lg">
                    <div id="header" className="header-inner fixed-top">
                        <div className="container">

                            <Link to="/" className="navbar-brand"><img className="img-fluid" width="70px" height="70px" src={logo} alt="" /></Link>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <div className="collapse navbar-collapse" id="navbarSupportedContent1"></div>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="navbar-nav ml-auto">
                                    <li className="nav-item"> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Faqs">FAQs</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Signup">Sign Up</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Signin">Sign In</Link> </li>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Navbar>
            </header>
        </React.Fragment>
    );
}

export default Header;
