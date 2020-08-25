import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { logo } from './Image'
import * as pdf from '../Components/pdf'

function Header() {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-lg theclub-menu navbar-light p-0">
                    <div id="header" className="header-inner fixed-top">
                        <div className="container">
                            <Link to="/" className="navbar-brand"><img className="img-fluid logo-white logo-show" src={logo} alt="" /> <img className="img-fluid logo-blue logo-hide" src={logo} alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/bookablevenues">Venues</Link></li>
                                    <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sports </a>
                                        <div className="dropdown-menu dropdown-menu-16rem animate slideIn" >
                                            <Link className="dropdown-item" to="/powerboat">Powerboat</Link>
                                            <Link className="dropdown-item" to="/badminton">Badminton</Link>
                                            <Link className="dropdown-item" to="/dance">Dance for children &amp; Pre Teens</Link>
                                            <Link className="dropdown-item" to="/fish">Fishing</Link>
                                            <Link className="dropdown-item" to="/golfclub">Golf Club</Link>
                                            <Link className="dropdown-item" to="/hockey">Hockey</Link>
                                            <Link className="dropdown-item" to="/kayak">Kayak</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
                                    <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Club </a>
                                        <div className="dropdown-menu animate slideIn" >
                                            <Link className="dropdown-item" to="/aboutus">About Us</Link>
                                            <Link className="dropdown-item" to="/organisation">Organisation</Link>
                                            {/* <Link className="dropdown-item" to="/ourTeam">Our Team</Link> */}
                                            <Link className="dropdown-item" to="/contactus">Contact Us</Link>
                                            {/* <Link className="dropdown-item" to="/channelpartner">Channel Partner</Link> */}
                                            <Link className="dropdown-item" to="/gallery">Gallery</Link>
                                            <Link className="dropdown-item" to="/security">Security</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Resources </a>
                                        <div className="dropdown-menu dropdown-menu-right membroz-megamenu animate slideIn" >
                                            <div className="row no-gutters">
                                                <div className="col-md-4">
                                                    <h6 className="head-drp">Information</h6>
                                                    <a className="dropdown-item" href={pdf.InformationGuide} target="_blank">Information Guide</a>
                                                    <a className="dropdown-item" href={pdf.WaterfrontProcedures} target="_blank">Water Front Procedures</a>
                                                    <a className="dropdown-item" href={pdf.StatusAndHouseRule} target="_blank">Statues &amp; House Rules</a>
                                                    <a className="dropdown-item" href={pdf.TennisInformation} target="_blank">Tennis Information</a>
                                                    <a className="dropdown-item" href={pdf.BritswimInformation} target="_blank">Brit swim Information</a>
                                                    <Link className="dropdown-item" to="/orangemarkersbuoys">Orange Markers Buoys</Link>
                                                    <a className="dropdown-item" href={pdf.AGMMinutes2018} target="_blank">AGM Minutes 2018</a>
                                                    <Link className="dropdown-item" to="/hse">HSE Plan 2017</Link>
                                                    <Link className="dropdown-item" to="/register">Forms</Link>
                                                    <Link className="dropdown-item" to="/rahrcbulletin">RAHRC Bulletin</Link>
                                                    <Link className="dropdown-item" to="/blogs">Blogs</Link>
                                                    <Link className="dropdown-item" to="/faqs">FAQs</Link>
                                                </div>
                                                <div className="col-md-4">
                                                    <h6 className="head-drp">Schedules</h6>
                                                    <Link className="dropdown-item" to="/rahlibrary">RAH Library</Link>
                                                    <a className="dropdown-item" href={pdf.calendar2020} target="_blank">Calendar 2020</a>
                                                    <a className="dropdown-item" href={pdf.RAHRCPoolSchedule} target="_blank">RAHRC Pool Schedule</a>
                                                    <a className="dropdown-item" href={pdf.swimmingpool} target="_blank">MAF Pool Schedule</a>
                                                    <Link className="dropdown-item" to="/sportshallbooking">Sports Hall Booking</Link>
                                                    <Link className="dropdown-item" to="/tenniscourtbooking">Tennis Court Booking</Link>
                                                </div>
                                                <div className="col-md-4">
                                                    <h6 className="head-drp">Social Sections</h6>
                                                    <Link className="dropdown-item" to="/toastmasters">Toastmasters</Link>
                                                    <Link className="dropdown-item" to="/bridge">Bridge</Link>
                                                    <Link className="dropdown-item" to="/marahtots">Marah Tots</Link>
                                                    <Link className="dropdown-item" to="/canadian">Canadian</Link>
                                                    <Link className="dropdown-item" to="/hispanic">Hispanic</Link>
                                                    <Link className="dropdown-item" to="/holland">Holland</Link>
                                                    <Link className="dropdown-item" to="/pakistan">Pakistan</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link> </li>
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
