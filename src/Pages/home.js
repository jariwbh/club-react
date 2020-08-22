import React, { Component } from 'react'
import Layout from '../Components/Layout'
import { logo, demo, pic3, pic5, pic4, pic6, pic7, pic10, pic11 } from '../Components/Image'
import Cards from '../Components/cards'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <Layout>
                <section class="banner-main">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active" style={{ backgroundImage: `url(${pic4})` }} >
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">First Slide</h2>
                                    <p class="lead">This is a description for the first slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item " style={{ backgroundImage: `url(${pic3})` }} >
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Second Slide</h2>
                                    <p class="lead">This is a description for the second slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item " style={{ backgroundImage: `url(${pic5})` }} >
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item " style={{ backgroundImage: `url(${pic6})` }} >
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                            <div class="carousel-item " style={{ backgroundImage: `url(${pic7})` }} >
                                <div class="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section class="mrt0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-2 order-md-1">
                                <div class="feature-text-main">
                                    <h2 class="feature-space">Automation </h2>
                                    <p class="page-feature-intro feature-space">With workflow automation, you have the power to automate tedious and repetitive tasks in simple steps. Membroz can send a response every time a new member is added. It will automatically set the member's privileges based on membership rules. It will send a message when membership is about to expire. Send out offers &amp; promo code with a single click. Auto-generate reports, invoices &amp; other documents.</p>
                                </div>
                            </div>
                            <div class="offset-md-1 col-md-6 offset-lg-1 col-lg-6 offset-xl-1 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-end justify-content-sm-center order-1 order-md-2">
                                <div class="d-flex justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end"> <img class="img-fluid" src={pic10} srcset={pic10} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mrt0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-start justify-content-sm-center">
                                <div class="d-flex justify-content-start justify-content-sm-center justify-content-md-start justify-content-lg-start"> <img class="img-fluid" src={pic11} srcset={pic11} alt="" /> </div>
                            </div>
                            <div class="offset-md-1 col-md-5 offset-lg-1 col-lg-5 offset-xl-1 col-xl-5 d-flex align-items-center">
                                <div class="feature-text-main">
                                    <h2 class="feature-space">3rd party API Integration </h2>
                                    <p class="page-feature-intro feature-space">Membroz can easily integrate with 3rd Party application with click of button. Some popular Payment gateway like Stripe, PayU, RazorPay, PayPal etc integration are provided builtin so you don't need do anything. You can configure your choice of Communication channel for SMS, Email, Whatsapp etc providing API keys and any other security detail. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mrt0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-2 order-md-1">
                                <div class="feature-text-main">
                                    <h2 class="feature-space">Automation </h2>
                                    <p class="page-feature-intro feature-space">With workflow automation, you have the power to automate tedious and repetitive tasks in simple steps. Membroz can send a response every time a new member is added. It will automatically set the member's privileges based on membership rules. It will send a message when membership is about to expire. Send out offers &amp; promo code with a single click. Auto-generate reports, invoices &amp; other documents.</p>
                                </div>
                            </div>
                            <div class="offset-md-1 col-md-6 offset-lg-1 col-lg-6 offset-xl-1 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-end justify-content-sm-center order-1 order-md-2">
                                <div class="d-flex justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end"> <img class="img-fluid" src={pic10} srcset={pic10} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mrt0">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-start justify-content-sm-center">
                                <div class="d-flex justify-content-start justify-content-sm-center justify-content-md-start justify-content-lg-start"> <img class="img-fluid" src={pic11} srcset={pic11} alt="" /> </div>
                            </div>
                            <div class="offset-md-1 col-md-5 offset-lg-1 col-lg-5 offset-xl-1 col-xl-5 d-flex align-items-center">
                                <div class="feature-text-main">
                                    <h2 class="feature-space">3rd party API Integration </h2>
                                    <p class="page-feature-intro feature-space">Membroz can easily integrate with 3rd Party application with click of button. Some popular Payment gateway like Stripe, PayU, RazorPay, PayPal etc integration are provided builtin so you don't need do anything. You can configure your choice of Communication channel for SMS, Email, Whatsapp etc providing API keys and any other security detail. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="blue-block text-center" style={{ padding: '40px 0 0px', position: 'relative', paddingBottom: '30px' }}>
                    <div class="container">
                        <h2 class="promote-head">Register for member Functionality </h2>
                        <p class="promote-intro">Email us on rahrc@pdo.co.om</p>
                        <Link class="btn btn-primary btn-lg" to="/register">Register</Link>
                    </div>
                </section>
                <Cards />
            </Layout>
        )
    }
}

export default Home
