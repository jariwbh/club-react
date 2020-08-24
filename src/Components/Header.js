import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { logo } from './Image'

function Header() {
    return (
        <React.Fragment>
            <header>
                <nav class="navbar navbar-expand-lg theclub-menu navbar-light p-0">
                    <div id="header" class="header-inner fixed-top">
                        <div class="container">
                            <Link to="/" className="navbar-brand"><img class="img-fluid logo-white logo-show" src={logo} alt="" /> <img class="img-fluid logo-blue logo-hide" src={logo} alt="" /></Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li class="nav-item"><Link className="nav-link" to="/bookablevenues">Venues</Link></li>
                                    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sports </a>
                                        <div class="dropdown-menu dropdown-menu-16rem animate slideIn" >
                                            <Link className="dropdown-item" to="/powerboat">Powerboat</Link>
                                            <Link className="dropdown-item" to="/badminton">Badminton</Link>
                                            <Link className="dropdown-item" to="/dance">Dance for children &amp; Pre Teens</Link>
                                            <a class="dropdown-item" href="#">Fishing</a>
                                            <a class="dropdown-item" href="#">Golf Club</a>
                                            <Link className="dropdown-item" to="/hockey">Hockey</Link>
                                            <Link className="dropdown-item" to="/kayak">Kayak</Link>
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
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Resources </a>
                                        <div class="dropdown-menu dropdown-menu-right membroz-megamenu animate slideIn" >
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
                                                    <Link className="dropdown-item" to="/toastmasters">Toastmasters</Link>
                                                    <Link className="dropdown-item" to="/bridge">Bridge</Link>
                                                    <a class="dropdown-item" href="#">Marah Tots</a>
                                                    <a class="dropdown-item" href="#">Canadian</a>
                                                    <a class="dropdown-item" href="#">Hispanic</a>
                                                    <a class="dropdown-item" href="#">Holland</a>
                                                    <a class="dropdown-item" href="#">Pakistan</a>
                                                </div>
                                            </div>
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
