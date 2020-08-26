import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function Adventure() {
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
                        <div className="carousel-item carousel-item-adventure active" style={{ backgroundImage: `url(${image.adventureimg1})` }} >
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h2 class="display-4">First Slide</h2>
                                    <p class="lead">This is a description for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-adventure" style={{ backgroundImage: `url(${image.adventureimg2})` }} >
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h2 class="display-4">Second Slide</h2>
                                    <p class="lead">This is a description for the second slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-adventure" style={{ backgroundImage: `url(${image.adventureimg3})` }} >
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-adventure" style={{ backgroundImage: `url(${image.adventureimg4})` }} >
                            <div className="carousel-caption d-none d-md-block">
                                {/* <h2 class="display-4">Third Slide</h2>
                                    <p class="lead">This is a description for the third slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-adventure" style={{ backgroundImage: `url(${image.adventureimg5})` }} >
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
            <section className="mrt30">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">Ras Al Hamra Recreation Centre (RAHRC): Oh Man! Adventure Section</h2>
                        </div>
                    </div>
                    <div >
                        <p className="text-justify">
                            This section of the Ras Al Hamra Recreation Centre (RAHRC) has been set up primarily,
                            but not exclusively, for men who do not work (male trailing spouses).
                            The section’s activities take place mainly, but not always,
                            during traditional working hours.
                            There is a growing and varied programme of activities that arise from the interests of its members.
                            Our goal is simple. We want to have fun! It proves difficult to obtain employment and appropriate visas in Oman,
                            but as trailing male spouses, we are very fortunate to live in a country with endless opportunities to explore!
                        </p>
                        <h6 className="text-justify"> Sports and Social Recreation facilities at the RAH Club:</h6>
                        <p className="text-justify">
                            Arts & Craft Centre, Boat Club, Book Library, Bulk Store, Cinema/Theatre Hall, Golf Club, Gym, Ladies Association, Snooker Room, Squash Courts, Swimming Pool,  Tennis Courts, Video Shop, Volleyball Court.
                        </p>
                    </div>
                    <div>
                        <h5 className="mrb10">Recent activities include:</h5>
                        <ul>
                            <li>day trips to explore wadis off road and other places of interest.</li>
                            <li>boat excursions to fish around the local waters.</li>
                            <li>guided tour of the gas and oil exhibition.</li>
                            <li>a snorkeling trip to Bandar Kharan by boat.</li>
                            <li>family BBQs on the beach at RAHRC.</li>
                            <li>a guided tour of the new golf complex.</li>
                            <li>a hike across the hills behind Muttrah</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mrb10">Future events are planned to include:</h5>
                        <ul>
                            <li>a day trip to the Daymaniyat Islands</li>
                            <li>a photography workshop</li>
                            <li>quad biking on the hills towards the airport</li>
                            <li>further off road adventures</li>
                            <li>more fishing trips</li>
                            <li>family bbq</li>
                            <li>international themed dinners.</li>
                        </ul>
                        <p className="text-justify">
                            In addition, through our qualified member Robert Velberg,
                            we run courses for those who wish to qualify for power boat licenses.
                            We have other members active in  the diving and sailing sections of the
                            club willing to share their experiences and expertise.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Adventure
