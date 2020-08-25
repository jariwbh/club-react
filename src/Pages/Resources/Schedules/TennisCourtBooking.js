import React from 'react'
import Layout from '../../../Components/Layout'
import * as image from '../../../Components/Image'

function TennisCourtBooking() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mrb30">Ras Al Hamra Recreation Center Tennis Club</h2>
                        </div>
                    </div>
                </div>
                <section className="mrt0">
                    <div className="container">
                        <div className="row" >
                            <div className="col-md-4">
                                <div className="text-justify mt4 "> <img className="img-fluid" src={image.tennisimg1} alt="" /> </div>
                            </div>
                            <div className="col-md-8">
                                <p className="text-justify">
                                    RAHRC Tennis Club is a membership based club situated in Muscat.
                                    We are arguably the largest tennis  club in the Muscat area with over 800 active members.
                                    Despite our size, we are a friendly and inclusive club with plenty on offer for everyone,
                                    no matter what your age or ability.
                                    Our facilities are welcoming and comfortable all complemented with a beautiful ocean view few meters away..
                                    Our six hard courts and one indoor facility is perhaps one of the most picturesque facilities in the Middle East.
                                    We run a wide range of programs which includes: Coaching for all levels, Junior Camp, Ladies Morning, Social Round Robin Tennis, Tots Camp (Mini Tennis), Ball Machine Rental, Racquets Stringing, Club Tournaments for Juniors & Adults, Holiday Tennis Camps & Clinic, free online court bookings.
                                    However, life isn't just about the tennis! RAHRC Tennis Club  has a thriving social scene, you can always find a friendly face while enjoying the calm and relaxing atmosphere be it meeting up with old friends and make new ones.
                                </p>
                            </div>
                            <p className="text-justify pl-3">
                                Email: rahrctenniscoach@gmail.com
                                <br />
                                Phone: 24675490 <br /> Head Coach: 95344398
                            </p>
                            <img className="img-fluid" src={image.tennisimg2} alt="" />
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default TennisCourtBooking
