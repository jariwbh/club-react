import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function Fish() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">RAHRC Fishing Section</h2>
                        </div>
                        <div className="col-md-4">
                            <div className="text-justify"> <img className="img-fluid" src={image.fishimg4} alt="" /> </div>
                        </div>
                        <div className="col-md-8 mt-2">
                            <p className="text-justify">
                                RAHRC Fishing Section, we would like to welcome you to a year of fishing excitement.  Each monthly we hold fishing competitions that inspire keen fishermen to hit the waters in pursue of the biggest fish and the grand prize.
                                <br /><br />
                                The 10th round of ‘The 2012 Angler of the Year PDO Recreation Club’ fishing for charity was
                                held Thursday, 20th Dec 2012. This competition was geared to fish for charity “Change for Life”
                                <br /> <br />
                                The competition was generously sponsored by VEC Oil and Gas Consultants.
                                The fishing for charity program
                                The program of the day was to fish for 6 hours, weigh in and auction the fish, lunch and trips to
                                the Fahal Island.
                                </p>
                        </div>
                        <div>
                            <h4 className="mrb30 pl-3 mt-3">Fishing Event</h4>
                            <p className="text-justify pl-3">
                                An incredible fishing condition at this time of the year was offered to the fishermen. A total of
                                12 eager fishermen joined the event, hoping for a good catch for the auction and the Charity
                                fisherman of the year title.
                                <br /> <br />
                                The launching of the boats started at dawn 0630. The sea conditions were perfect. Just like a
                                bath tub! Light west breeze with a wave height of 0.3 meters.
                                <br /> <br />
                                During this time of the year, Mahi Mahi are expected to overwhelm the sea, groupers and red
                                snappers are expected to be at the shallow reef together with barracudas.
                                <br /> <br />
                                Many of the anglers , Dr Abdul Hakeem, Frans Kohler concentrated in surface fish. Others
                                including the captain, Faisal Riyami and partner Salmi Al Khatri ventured to the bottom
                                category.
                                <br /> <br />
                                At the weigh-in, only one Mahi Mahi was caught by Dr Hakim, a beautiful cockpito caught by
                                Salim Al Khatri. But, majority of the bottom catch was caught by captain Suleiman and son Tariq
                                Al hajri weighing a handsome 21 kg. The day anglers were:
                                <br /> <br />
                                Faisal Riyami and Salim Al Khatri for the overall catch 15 points each
                                Tariq and Capt. Suleiman Al hajri bottom catch with 10 and 9 points
                                Dr Hakeem and Van Dijk, Frederik trolling category 10 and 9 points
                            </p>
                            <h4 className="mrb30 pl-3 mt-3">Change for Life support </h4>
                            <p className="text-justify pl-3">
                                Finally the event had a family atmosphere, fish auctioning and trip to the Island flavors. A
                                beautiful way to start the celebration of end of the year, beginning of the New Year and X mass
                                break. A total amount of 300 omr was generated for the charity organization “CHNGE FOR LIFE”
                                <br /> <br />
                                Sincere Thanks to the organizers including Andria Wenke, Norman Robin, Ray Petersen, Jamila
                                Al Mahorouqi Captain Suleiman Al hajri , Mohammed Al Said for VEC, Faisal Riyami, Frans
                                Kohler and all the fishermen and guests. The day ended peacefully with lots of success .
                            </p>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <h2 className="mrb30 ">Gallery</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 mb-3">
                            <div>
                                <img src={image.fishimg1} className="zoom img-fluid" />
                            </div>
                            <br />
                            <div>
                                <img src={image.fishimg2} className="zoom img-fluid" />
                            </div>
                            <br />
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3">
                            <div>
                                <img src={image.fishimg3} className="zoom img-fluid" />
                            </div>
                            <br />
                            <div>
                                <img src={image.fishimg4} className="zoom img-fluid" />
                            </div>
                            <br />
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3">
                            <div>
                                <img src={image.fishimg5} className="zoom img-fluid" />
                            </div>
                            <br />
                            <div>
                                <img src={image.fishimg6} className="zoom img-fluid" />
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Fish
