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
                <section className="banner-main">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active" style={{ backgroundImage: `url(${pic4})` }} >
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">First Slide</h2>
                                    <p class="lead">This is a description for the first slide.</p> */}
                                </div>
                            </div>
                            <div className="carousel-item " style={{ backgroundImage: `url(${pic3})` }} >
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Second Slide</h2>
                                    <p class="lead">This is a description for the second slide.</p> */}
                                </div>
                            </div>
                            <div className="carousel-item " style={{ backgroundImage: `url(${pic5})` }} >
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                            <div className="carousel-item " style={{ backgroundImage: `url(${pic6})` }} >
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                            <div className="carousel-item " style={{ backgroundImage: `url(${pic7})` }} >
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section className="mrt0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-2 order-md-1">
                                <div className="feature-text-main">
                                    <h2 className="feature-space">RAS AL HAMRA CLUB </h2>
                                    <p className="page-feature-intro feature-space">Welcome to RAS AL HAMRA CLUB, a perfect natural beauty within the Ras al Hamra residential area. The RAHRC provides opportunities for social, recreational and sporting activities for the benefit of RAH staff and their families. Membership requires the payment of a modest monthly fee, which is automatically charged to the members’ account.</p>
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-6 offset-lg-1 col-lg-6 offset-xl-1 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-end justify-content-sm-center order-1 order-md-2">
                                <div className="d-flex justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end"> <img className="img-fluid" src={pic7} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mrt0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-start justify-content-sm-center">
                                <div className="d-flex justify-content-start justify-content-sm-center justify-content-md-start justify-content-lg-start"> <img className="img-fluid" src={pic11} alt="" /> </div>
                            </div>
                            <div className="offset-md-1 col-md-5 offset-lg-1 col-lg-5 offset-xl-1 col-xl-5 d-flex align-items-center">
                                <div className="feature-text-main">
                                    <h2 className="feature-space">CLUB Facilities </h2>
                                    <p className="page-feature-intro feature-space">The Ras al Hamra  (RAH) Club boasts a number of facilities for both social and recreational activities. It has coffee shop and restaurant as well as swimming pools for  adults and children, private beaches, gymnasiums and nine-hole golf course which  are under construction. All payments, whether for food, or sports instruction, are made through an electronic membership card and recovered from the member’s salary.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mrt0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-5 d-flex align-items-center order-2 order-md-1">
                                <div className="feature-text-main">
                                    <h2 className="feature-space">CLUB Activities </h2>
                                    <p className="page-feature-intro feature-space">Most activities at the Club are run by volunteer members who form "sections", such as the Ras al Hamra Amateur Dramatic Society, the Astronomy section, and so on. The sections can not only make full use of RAHRC facilities but also receive some financial support from the club. And if there is no section that covers your particular interest, you can start one up yourself!</p>
                                </div>
                            </div>
                            <div className="offset-md-1 col-md-6 offset-lg-1 col-lg-6 offset-xl-1 col-xl-6 position-relative strip-height d-flex align-items-center justify-content-xl-end justify-content-sm-center order-1 order-md-2">
                                <div className="d-flex justify-content-end justify-content-sm-center justify-content-md-end justify-content-lg-end"> <img className="img-fluid" src={pic10} alt="" /> </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blue-block text-center" style={{ padding: '40px 0 0px', position: 'relative', paddingBottom: '30px' }}>
                    <div className="container">
                        <h2 className="promote-head">Register for member Functionality </h2>
                        <p className="promote-intro">Email us on rahrc@pdo.co.om</p>
                        <Link className="btn btn-primary btn-lg" to="/register">Register</Link>
                    </div>
                </section>
                <Cards />
            </Layout>
        )
    }
}

export default Home
