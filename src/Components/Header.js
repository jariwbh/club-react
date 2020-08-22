import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { logo } from './Image'

function Header() {
    return (
        <React.Fragment>
            {/* <header>
                <Navbar className="navbar-expand-lg navbar-dark p-0" expand="lg">
                    <div id="header" className="header-inner fixed-top">
                        <div className="container">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Link to="/" className="navbar-brand"><img className="img-fluid" style={{ height: "70px", width: "70" }} src={logo} alt="" /></Link>
                                <Nav className="navbar-nav ml-auto">
                                    <li className="nav-item"> <Link className="nav-link" to="/">Mock Tests</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Teachers">Teachers</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Contactus">Contact Us</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Signup">Sign Up</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/Signin">Sign In</Link> </li>
                                    <NavDropdown title="Dashboard" data-hover="dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Dashboard" data-hover="dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/StudentProfile">My Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Item ><Link className="dropdown-item" to="/Logout">Logout</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Navbar>
            </header> */}
            <header>
                <nav class="navbar navbar-expand-lg theclub-menu navbar-light p-0">
                    {/* 
	   <div id="top-bar" class="top-bar">
                        <div class="container">
                            <div class="w-100">
                                <div class="d-flex ">
                                    <span class="ml-auto pr-3"><i class="custom-phone-icon"></i> <a href="tel:+918758363925" class="top-bar-link">+91 87583 63925</a></span>
                                    <span class="pr-3"><i class="custom-envelope-icon"></i> <a href="mailto:contact@membroz.com" class="top-bar-link">contact@membroz.com</a></span>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle p-0 lang-menu" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenuLink"> English </a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">Spanish</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     */}
                    <div id="header" class="header-inner fixed-top">
                        <div class="container">
                            <Link to="/" className="navbar-brand"><img class="img-fluid logo-white logo-show" src={logo} alt="" /> <img class="img-fluid logo-blue logo-hide" src={logo} alt="" /></Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Resources </a>
                                        <div class="dropdown-menu dropdown-menu-center membroz-megamenu animate slideIn" >
                                            <div class="row no-gutters">
                                                <div class="col-md-4">
                                                    <h6 class="head-drp">Information</h6>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/info_guide_27.02.2020.pdf" target="_blank">Information Guide</a>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/rahrc_beach_operations.pdf" target="_blank">Water Front Procedures</a>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/rahrc_statutes_update.pdf" target="_blank">Statues &amp; House Rules</a>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/ats_info.pdf" target="_blank">Tennis Information</a>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/britswim_info.pdf" target="_blank">Brit swim Information</a>
                                                    <a class="dropdown-item" href="#">Orange Markers Buoys</a>
                                                    <a class="dropdown-item" href="https://pdorc.com/uploads/3/5/2/2/35228168/agm_minutes_2018.pdf" target="_blank">AGM Minutes 2018</a>
                                                    <a class="dropdown-item" href="#">HSE Plan 2017</a>
                                                    <a class="dropdown-item" href="#">Forms</a>
                                                    <a class="dropdown-item" href="#">RAHRC Bulletin</a>
                                                    <Link className="dropdown-item" to="/blogs">Blogs</Link>
                                                    <Link className="dropdown-item" to="/faqs">FAQs</Link>
                                                </div>
                                                <div class="col-md-4">
                                                    <h6 class="head-drp">Schedules</h6>
                                                    <a class="dropdown-item" href="#">RAH Library</a>
                                                    <a class="dropdown-item" href="#">Calendar 2020</a>
                                                    <a class="dropdown-item" href="#">RAHRC Pool Schedule</a>
                                                    <a class="dropdown-item" href="#">MAF Pool Schedule</a>
                                                    <a class="dropdown-item" href="#">Sports Hall Booking</a>
                                                    <a class="dropdown-item" href="#">Tennis Court Booking</a>
                                                </div>
                                                <div class="col-md-4">
                                                    <h6 class="head-drp">Social Sections</h6>
                                                    <a class="dropdown-item" href="#">Toastmasters</a>
                                                    <a class="dropdown-item" href="#">Bridge</a>
                                                    <a class="dropdown-item" href="#">Marah Tots</a>
                                                    <a class="dropdown-item" href="#">Canadian</a>
                                                    <a class="dropdown-item" href="#">Hispanic</a>
                                                    <a class="dropdown-item" href="#">Holland</a>
                                                    <a class="dropdown-item" href="#">Pakistan</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item"><Link className="nav-link" to="/bookablevenues">Venues</Link></li>
                                    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sports </a>
                                        <div class="dropdown-menu animate slideIn" >
                                            <a class="dropdown-item" href="#">Powerboat</a>
                                            <a class="dropdown-item" href="#">Badminton</a>
                                            <a class="dropdown-item" href="#">Dance for children &amp; Pre Teens</a>
                                            <a class="dropdown-item" href="#">Fishing</a>
                                            <a class="dropdown-item" href="#">Golf Club</a>
                                            <a class="dropdown-item" href="#">Hockey</a>
                                            <a class="dropdown-item" href="#">Kayak</a>
                                        </div>
                                    </li>
                                    <li class="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                                    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Club </a>
                                        <div class="dropdown-menu animate slideIn" >
                                            <Link className="dropdown-item" to="/aboutus">About Us</Link>
                                            <Link className="dropdown-item" to="/organisation">Organisation</Link>
                                            {/* <Link className="dropdown-item" to="/ourTeam">Our Team</Link> */}
                                            <Link className="dropdown-item" to="/contactus">Contact Us</Link>
                                            {/* <Link className="dropdown-item" to="/channelpartner">Channel Partner</Link> */}
                                            <Link className="dropdown-item" to="/gallery">Gallery</Link>
                                        </div>
                                    </li>
                                    <li class="nav-item"> <Link class="nav-link" to="/login">Login</Link> </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>

        </React.Fragment>
    );
}

export default Header;
