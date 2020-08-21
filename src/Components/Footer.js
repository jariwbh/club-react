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
                                <h3 className="footer-head">Solutions</h3>
                                <ul className="list-unstyled footer-links">
                                    <li> <a href="#" >Club, Resort &amp; Hotel</a> </li>
                                    <li> <a href="#" >Tour, Travel &amp; Timeshare</a> </li>
                                    <li> <a href="#" >Gym, Health &amp; Fitness Center</a> </li>
                                    <li> <a href="#" >Beauty &amp; Fashion center</a> </li>
                                    <li> <a href="#" >Restaurant, Pubs &amp; Bar</a> </li>
                                    <li> <a href="#" > Service &amp; Maintenance</a> </li>
                                    <li> <a href="#" >Dietician &amp; Nutritionist</a> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer-head">&nbsp;</h3>
                                <ul className="list-unstyled footer-links">
                                    <li> <a href="#" >Community &amp; Education</a> </li>
                                    <li> <a href="#" >Real Estate</a> </li>
                                    <li> <a href="#" >Doctor Clinic &amp; Polyclinic</a> </li>
                                    <li> <a href="#" >Finance, Insurance &amp; Law</a> </li>
                                    <li> <a href="#" >Automative &amp; Car Rental</a> </li>
                                    <li> <a href="#" > Event</a> </li>
                                    <li> <a href="#" >Consulting &amp; Coaching Service </a> </li>
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
                                    <p><i className="custom-envelope-icon"></i> <a href="mailto:contact@membroz.com">rahrc@pdo.co.om</a></p>
                                </div>
                                <div className="social-icons-main mrt15">
                                    <a href="https://www.facebook.com/Ras-Al-Hamra-The-Club-342801119710857/" className="social-link" target="_blank">
                                        <i className="custom-facebook-icon"></i></a>
                                    <a href="https://twitter.com/membroz" className="social-link" target="_blank">
                                        <i className="custom-twitter-icon"></i></a>
                                    <a href="https://plus.google.com/u/0/111329599158279368554" className="social-link" target="_blank">
                                        <i className="custom-google-plus-icon"></i></a>
                                    <a href="https://www.instagram.com/rahtheclub/" className="social-link" target="_blank">
                                        <i className="custom-instagram-icon"></i></a>
                                    <a href="https://www.linkedin.com/company/membroz-managemembership/" className="social-link" target="_blank">
                                        <i className="custom-linkedin-icon"></i></a> </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer-head">Telephone</h3>
                                <div className="faddres">
                                    <p><i className="custom-phone-icon" ></i> 
                                    General Enquiries: 24677321<br />
                                    Accounts: 24678157 /24671086/ 24673260<br />
                                    Bar Administration: 24675436<br />
                                    Bulk Store: 24675815<br/>
                                    General Manager: 24673188
                                    </p>
                                    <p><i className="custom-envelope-icon"></i> <a href="mailto:contact@membroz.com">rahrc@pdo.co.om</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-12 text-center text-xl-right">
                            <div className="col-xl-6 d-flex justify-content-center justify-content-xl-start order-2 order-xl-1">
                                <div className="text-center text-xl-right">
                                    © Copyright RAS AL HAMRA
                                </div>
                            </div>
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