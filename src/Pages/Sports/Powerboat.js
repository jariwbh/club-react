import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function Powerboat() {
    return (
        <Layout>
            <section class="common-block">
                <div className="container">
                    <div className="row">
                        <div class="col-12 animate-top text-center">
                            <h2 className="mrb30">Powerboat</h2>
                        </div>
                    </div>
                </div>
                <section class="mrt0">
                    <div class="container">
                        <div class="row" >
                            <div class="col-md-8">
                                <h3 >RAS AL HAMRA CLUB </h3>
                                <p class="text-justify">RAHRC owns a number of powerboats that are used for various activities, these include diving,sailing support, fishing and safety afloat.
                                There is also the opportunity to hire one of the fishing boats for short trips along the coast once you have also completed a familiarisation session on the boats.
                                RAHRC is now a Royal Yachting Association Recognised Training Centre and can deliver a number of different powerboat courses.
                                The RYA is the UK’s national body for dinghy, yacht and motor cruising, all forms of sail racing, RIBs and sports boats, windsurfing and personal watercraft and a leading representative for inland waterways cruising.
                                The RYA is the world’s leading training programme for leisure and professional boaters.Their internationally renowned training schemes steer 250,000 yacht sailors, powerboaters, small craft leisure boaters,
                                    windsurfers and canal boaters towards confident and successful boating every year. The RYA are proud of the fact that over 1 million people have completed an RYA course in the last 10 years.</p>
                            </div>
                            <div class="col-md-4">
                                <div class="text-justify mt4 "> <img class="img-fluid mt-5" src={image.powerboatimg1} srcset={image.powerboatimg1} alt="" /> </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="mrt0  pt-5">
                    <div class="container">
                        <div class="row" >
                            <div class="col-md-4">
                                <div class="text-justify mt4 "> <img class="img-fluid" src={image.powerboatimg2} srcset={image.powerboatimg2} alt="" /> </div>
                            </div>
                            <div class="col-md-8">
                                <h3 >RYA Level 1 (Start Powerboating) Course</h3>
                                <p class="justify-content-lg-end">
                                    This course is a 1 day introduction to boating techniques including launching and recovering a boat from a road trailer, everyday boat handling and the use of safety equipment. Assumed prior knowledge is not required.
                                    <br />
                                    The course syllabus contains:
                                    <br />
                                    Launch and recovery
                                    <br />
                                    Preparation of boat and crew
                                    <br />
                                    Boat handling
                                    <br />
                                    Picking up and securing to a mooring buoy
                                    <br />
                                    Leaving and coming alongside
                                    <br />
                                    Being towed
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mrt0 pt-5">
                    <div class="container">
                        <div class="row" >
                            <div class="col-md-8">
                                <h3 >RYA Level 2 (Powerboat Handling) Course</h3>
                                <p class="text-justify">
                                    This is a two-day entry level course which provides the skills and background knowledge needed to drive a powerboat and is the basis of the International Certificate of Competence (ICC).
                                    Although prior knowledge is not required it can be beneficial to have completed the RYA Powerboat Level 1 course first.
                                    <br />
                                    The course syllabus contains:
                                    <br />
                                    Launching and recovery,
                                    <br />
                                    Boat handling, both slow speed and planing speed.
                                    <br />
                                    Securing to a buoy
                                    <br />
                                    Anchoring,
                                    <br />
                                    Leaving and coming alongside
                                    <br />
                                    Man overboard
                                    <br />
                                    Turning in own length
                                    <br />
                                    Managing a disabled craft
                                    <br />
                                    Basic navigation and collision regulations
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="text-justify mt4 "> <img class="img-fluid mt-5" src={image.powerboatimg3} srcset={image.powerboatimg3} alt="" /> </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="mrt0 pt-5">
                    <div class="container">
                        <div class="row" >
                            <h3 >RYA Safety Boat Course</h3>
                            <p class="text-justify">
                                This two-day course provides the skills required when acting as an escort craft, safety boat or coach boat for a fleet of dinghies, windsurfers or canoes, or for racing or training activities.
                                It includes rescue techniques and elements of race management and mark laying.
                                <br />
                                Prior knowledge is RYA Powerboat Level 2
                                    <br />
                                    The course syllabus contains:
                                    <br />
                                    Recovery of a number of different craft, eg kayaks, sailing dinghies, catamarans, windsurfers, powerboats.
                                    <br />
                                    Towing and being towed
                                    <br />
                                    Dealing with a disabled craft
                                    <br />
                                    Mark laying
                                    <br />
                                    Fleet safety and management
                                </p>
                        </div>
                    </div>

                </section>
            </section>
        </Layout>
    )
}

export default Powerboat
