import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function GolfClub() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">The Ras Al Hamra Golf Academy</h2>
                        </div>
                        <div>
                            <div className="container">
                                <p className="text-justify">
                                    The Golf Academy offers a range of coaching options with all instruction designed to suit the requirements of each individual. If you are having trouble getting the ball in the fairway or out of a bunker or if you are simply interested in starting to try golf for the first time we have the way to help you get the most out of your experience. Our professional is PGA qualified to ensure your lesson experience is enjoyable, educational and progressive.
                                </p>
                                <h4 className="mrb10">Head Professional:  Darren Chapman</h4>
                                <p className="text-justify">
                                    Darren became a full member of the Australian PGA in 2003 and has spent the last two decades coaching golfers of all ages and abilities. In the last ten years Darren has been based at The Ridge Golf Course in Sydney, Australia and was the Golf Academy Director at Montgomerie Links Vietnam.
                                    With so much experience we know that Darren will find the ways to get the most out of your game.
                                    <br /><br />
                                    ​Email: rahgcpro@gmail.com  <br /> Ph: +968 94278204
                                </p>
                                <h4 className="mrb10">Available coaching options</h4>
                                <p className="text-justify">
                                    - Corporate Clinics and Team Building <br />
                                    - Ladies and Men coaching programs from beginner to experienced <br />
                                    - Junior Programs <br />
                                    - Private instruction, including long term golf <br /> development programs for both individuals and group tuition
                                    - Video swing analysis / Trackman analysis / K - Vest 3D analysis <br />
                                    - Comprehensive grassed practice area <br />
                                    - Callaway Practice balls and Rental Equipment
                                </p>
                                <h4 className="mrb10">Golf Membership at Ras Al Hamra is packed full of amazing benefits</h4>
                                <p className="text-justify">
                                    1. 7-day advance tee time bookings accepted<br />
                                    2. Special rates on Personalized Ras Al Hamra Golf Academy Coaching Packages<br />
                                    3. Unlimited access to the Practice Facility inclusive of practice fairway complete with grassed hitting surface, short game and putting practice areas<br />
                                    4. Members discount on Golf Shop purchases<br />
                                    5. Special green fees for accompanying guests<br />
                                    6. Ability to reserve tee times at Troon Golf facilities worldwide<br />
                                    7. Invitations to exclusive Social and Sporting Events<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-12 text-center">
                            <h2 className="mrb30 ">Gallery</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.golfclubimg1} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg2} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg3} className="zoom img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.golfclubimg4} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg5} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg6} className="zoom img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.golfclubimg7} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg8} className="zoom img-fluid" />
                                </div>
                                <br />
                                <div>
                                    <img src={image.golfclubimg9} className="zoom img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GolfClub
