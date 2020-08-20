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
                            <a class="navbar-brand" href="#"><img class="img-fluid logo-white logo-show" src={logo} alt="" /> <img class="img-fluid logo-blue logo-hide" src={logo} alt="" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbarDropdownLbl"> Solutions </a>
                                        <div class="dropdown-menu membroz-megamenu animate slideIn" id="navbarDropdown" aria-labelledby="navbarDropdownLbl">
                                            <div class="row no-gutters">
                                                <div class="col-md-6"> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div class="flex-shrink-1 text-center px-3"><i class="custom-club-resort-icon"></i></div>
                                                    <div class="pl-0">
                                                        <div class="mb-0 font-bg-nav">Club, Resort &amp; Hotel</div>
                                                        <span class="font-sm-nav"> Membership, Booking, Front-desk, Coupon/Discount, Housekeeping</span> </div>
                                                </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-tour-timeshare-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Tour, Travel &amp; Timeshare</div>
                                                            <span class="font-sm-nav"> Package, CRM, Booking, Payment, RCI, Season calendar</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-gym-yoga-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Gym, Yoga Studio &amp; Fitness Center</div>
                                                            <span class="font-sm-nav"> Membership, CRM, Appointment, Schedule, Diet Plan, Payment, POS</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-spa-salon-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Spa, Salon &amp; Welness Center</div>
                                                            <span class="font-sm-nav"> Package, Service, CRM, Appointment, Payment, POS</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-restaurant-pubs-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Restaurant, Pubs &amp; Bar</div>
                                                            <span class="font-sm-nav"> Membership, CRM, Booking, Payment, Coupon, POS, Kitchen</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-service-maintenance-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Service &amp; Maintenance</div>
                                                            <span class="font-sm-nav"> Customer, CRM, Process automation, Payment, Sales &amp; Purchase</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-dietician-nutritionist-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Dietician &amp; Nutritionist</div>
                                                            <span class="font-sm-nav"> Membership, CRM, Diet Plan, Appointment, Payment, POS</span> </div>
                                                    </a> </div>
                                                <div class="col-md-6 pr-2"> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                    <div class="flex-shrink-1 text-center px-3"><i class="custom-community-education-icon"></i></div>
                                                    <div class="pl-0">
                                                        <div class="mb-0 font-bg-nav">Community &amp; Education</div>
                                                        <span class="font-sm-nav"> Admissions, Programs, CRM, Donation, Event, Holiday Calendar</span> </div>
                                                </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-real-estate-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Real Estate</div>
                                                            <span class="font-sm-nav"> Membership, CRM, Payment, Facility booking, Event, Maintenance</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-doctor-clinic-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Doctor Clinic &amp; Polyclinic</div>
                                                            <span class="font-sm-nav"> Appointment, CRM, Payment, Patient History &amp; Prescription, Holiday Calendar</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-finance-insurance-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Finance, Insurance &amp; Law</div>
                                                            <span class="font-sm-nav"> Membership, CRM, Payment, Claim, Advisory, Holiday Calendar</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-automative-car-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Automative &amp; Car Rental</div>
                                                            <span class="font-sm-nav"> Clients, CRM, Online Booking, Payment, Claim, Maintenance</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-event-ticket-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Event &amp; Ticket Booking</div>
                                                            <span class="font-sm-nav"> CRM, Ticket Booking, Invitation, Payment, POS</span> </div>
                                                    </a> <a class="dropdown-item d-flex align-items-center px-0" href="#">
                                                        <div class="flex-shrink-1 text-center px-3"><i class="custom-consulting-coaching-icon"></i></div>
                                                        <div class="pl-0">
                                                            <div class="mb-0 font-bg-nav">Consulting &amp; Coaching Service</div>
                                                            <span class="font-sm-nav"> Course, Fees, CRM, Student Mobile App, Assessment, Feedback</span> </div>
                                                    </a> </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Venues</a> </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Resources </a>
                                        <div class="dropdown-menu dropdown-menu-right membroz-megamenu animate slideIn" >
                                        <div class="row no-gutters">
                                                <div class="col-md-3"> 
                                                <h6 class="head-drp">Information</h6>
                                            <a class="dropdown-item" href="#">Information Guide</a>
                                            <a class="dropdown-item" href="#">Water Front Procedures</a>
                                            <a class="dropdown-item" href="#">Statues &amp; House Rules</a>
                                            <a class="dropdown-item" href="#">Tennis Information</a>
                                            <a class="dropdown-item" href="#">Brit swim Information</a>
                                            <a class="dropdown-item" href="#">Orange Markers Buoys</a>
                                            <a class="dropdown-item" href="#">AGM Minutes 2018</a>
                                            <a class="dropdown-item" href="#">HSE</a>
                                            <a class="dropdown-item" href="#">Forms</a>
                                            <a class="dropdown-item" href="#">RAHRC Bulletin</a>
                                            <a class="dropdown-item" href="#">Blogs</a>
                                            <a class="dropdown-item" href="#">FAQs</a> 
                                                </div>
                                                <div class="col-md-3"> 
                                                <h6 class="head-drp">Schedules</h6>
                                            <a class="dropdown-item" href="#">RAH Library</a>
                                            <a class="dropdown-item" href="#">Calendar 2020</a>
                                            <a class="dropdown-item" href="#">RAHRC Pool Schedule</a>
                                            <a class="dropdown-item" href="#">MAF Pool Schedule</a>
                                            <a class="dropdown-item" href="#">Sports Hall Booking</a> 
                                            <a class="dropdown-item" href="#">Tennis Court Booking</a> 
                                                </div>
                                                <div class="col-md-3"> 
                                                <h6 class="head-drp">Sport Sections</h6>
                                            <a class="dropdown-item" href="#">Powerboat</a>
                                            <a class="dropdown-item" href="#">Badminton</a>
                                            <a class="dropdown-item" href="#">Dance for children & Pre Teens</a>
                                            <a class="dropdown-item" href="#">Fishing</a>
                                            <a class="dropdown-item" href="#">Golf Club</a> 
                                            <a class="dropdown-item" href="#">Hockey</a> 
                                            <a class="dropdown-item" href="#">Kayak</a> 
                                                </div>
                                                <div class="col-md-3"> 
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
                                    <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li>
                                    <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Support </a>
                                        <div class="dropdown-menu animate slideIn" > 
                                        <a class="dropdown-item" href="#">About Us</a> 
                                        <a class="dropdown-item" href="#">Organisation</a>
                                        <a class="dropdown-item" href="#">Our Team</a> 
                                        <a class="dropdown-item" href="#">Contact Us</a> 
                                        <a class="dropdown-item" href="#">Channel Partner</a> 
                                        <a class="dropdown-item" href="#">Videos</a> 
                                        </div>
                                    </li>
                                    <li class="nav-item"> <a class="nav-link" href="#">Login</a> </li>
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
