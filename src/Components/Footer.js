import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 400) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible, details } = this.state;
        return (
            <React.Fragment>
                <footer className="footer-main mt-auto">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-unstyled footer-links">
                                    <li> <Link to="/bookablevenues">Venues</Link></li>
                                    <li> <Link to="/powerboat">Powerboat</Link> </li>
                                    <li> <Link to="/badminton">Badminton</Link> </li>
                                    <li> <Link to="/golfclub">Golf Club</Link> </li>
                                    <li> <Link to="/pricing">Pricing</Link> </li>
                                    <li> <Link to="/rahlibrary">RAH Library</Link> </li>
                                    <li> <Link to="/toastmasters">Toastmasters</Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled footer-links">
                                    <li> <Link to="/blogs">Blogs</Link> </li>
                                    <li> <Link to="/security">Security</Link> </li>
                                    <li> <Link to="/gallery">Gallery</Link> </li>
                                    <li> <Link to="/contactus">Contact Us</Link> </li>
                                    <li> <Link to="/faqs">FAQs</Link> </li>
                                    <li> <Link to="/organisation">Organisation</Link> </li>
                                    <li> <Link to="/aboutus">About Us</Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer-head">Address</h3>
                                <div className="faddres">
                                    <p><i className="custom-map-marker-icon" ></i>Ras Al Hamra Recreation Centre.<br />
                                    PO Box 81 Muscat,<br />
                                    Postal Code 100<br />
                                    Sultanate of Oman,</p>
                                    <p><i className="custom-phone-icon"></i> <a href="tel:+918758363925">Fax:24564089 / 24675380</a> </p>
                                    <p><i className="custom-envelope-icon"></i> <a href="mailto:rahrc@pdo.co.om">rahrc@pdo.co.om</a></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer-head">Telephone</h3>
                                <div className="faddres">
                                    <p><i className="custom-phone-icon" ></i>
                                    General Enquiries: 24677321<br />
                                    Accounts: 24678157 /<br /> 24671086 / 24673260<br />
                                    Bar Administration: 24675436<br />
                                    Bulk Store: 24675815<br />
                                    General Manager: 24673188
                                    </p>
                                    <div className="pt-2">
                                        <p ><i className="custom-envelope-icon"></i> <a href="mailto:rahrc@pdo.co.om">rahrc@pdo.co.om</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-xl-right" >
                                <div className="social-icons-main mrt15">
                                    <a href="https://www.facebook.com/Ras-Al-Hamra-The-Club-342801119710857/" className="social-link" target="_blank">
                                        <i className="custom-facebook-icon"></i></a>
                                    <a href="https://twitter.com/" className="social-link" target="_blank">
                                        <i className="custom-twitter-icon"></i></a>
                                    <a href="https://plus.google.com/u/0/111329599158279368554" className="social-link" target="_blank">
                                        <i className="custom-google-plus-icon"></i></a>
                                    <a href="https://www.instagram.com/rahtheclub/" className="social-link" target="_blank">
                                        <i className="custom-instagram-icon"></i></a>
                                    <a href="https://www.linkedin.com/" className="social-link" target="_blank">
                                        <i className="custom-linkedin-icon"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            Copyright © 2020 RAS AL HAMRA
                        </div>
                    </div>
                </footer>
                <div className="scroll-to-top">
                    {is_visible && (
                        <a href="#" onClick={() => this.scrollToTop()} id="back-to-top" title="Scroll to Top" className="btn btn-primary backtotop active"><i className="customicons-backtotop-icon "></i></a>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;