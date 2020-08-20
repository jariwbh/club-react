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
                <footer className="footer-main">
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
                                <h3 className="footer-head">Surat, India</h3>
                                <div className="faddres">
                                    <p><i className="custom-map-marker-icon" ></i> Krtya Technologies Pvt. Ltd.<br />
                                        A1 – 03, Milestone Habitat,<br />
                                            Kailash Nagar, Sagrampura<br />
                                                Surat – 395002 India</p>
                                    <p><i className="custom-envelope-icon"></i> <a href="mailto:contact@membroz.com">contact@membroz.com</a></p>
                                    <p><i className="custom-phone-icon"></i> <a href="tel:+918758363925">+91 87583 63925</a> </p>
                                </div>
                                <div className="social-icons-main mrt15">
                                    <a href="https://www.facebook.com/Membroz.Managemembership/" className="social-link" target="_blank">
                                        <i className="custom-facebook-icon"></i></a>
                                    <a href="https://twitter.com/membroz" className="social-link" target="_blank">
                                        <i className="custom-twitter-icon"></i></a>
                                    <a href="https://plus.google.com/u/0/111329599158279368554" className="social-link" target="_blank">
                                        <i className="custom-google-plus-icon"></i></a>
                                    <a href="https://www.instagram.com/membroz.software/" className="social-link" target="_blank">
                                        <i className="custom-instagram-icon"></i></a>
                                    <a href="https://www.linkedin.com/company/membroz-managemembership/" className="social-link" target="_blank">
                                        <i className="custom-linkedin-icon"></i></a> </div>
                            </div>
                            <div className="col-md-3">
                                <h3 className="footer-head">Mumbai, India</h3>
                                <div className="faddres">
                                    <p><i className="custom-map-marker-icon" ></i> Krtya Technologies Pvt. Ltd.<br />
                                                    106, Bldg No.2, Sector 3,<br />
                                                        Millenium Business Park (MBP),
                                                            Mahape,<br />
                                                            Navi Mumbai – 400710 India</p>
                                    <p><i className="custom-envelope-icon"></i> <a href="mailto:contact@membroz.com">contact@membroz.com</a></p>
                                    <p><i className="custom-phone-icon"></i> <a href="tel:+917778822666">+91 77788 22666</a>, <br />
                                        <a href="tel:+919372025882">+91 93720 25882</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xl-6 d-flex justify-content-center justify-content-xl-start order-2 order-xl-1">
                                <div className="text-center text-xl-left">
                                    © Copyright Membroz. Power by <a className="copy-link" href="http://www.krtya.com/" target="_blank">Krtya Technologies Pvt. Ltd.</a>
                                </div>
                            </div>
                            <div className="col-xl-6 xs-lg-mrb30 d-flex justify-content-center justify-content-xl-end order-1 order-xl-2" >
                                <div className="ie-dflex text-center text-xl-right">
                                    <i className="custom-paypal-icon mr-3"></i><i className="custom-stripe-icon mr-3"></i><i className="custom-razorpay-icon mr-3"></i><i className="custom-payu-icon mr-3"></i><i className="custom-paytm-icon"></i>
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