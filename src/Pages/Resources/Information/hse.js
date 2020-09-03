import React from 'react'
import Layout from '../../../Components/Layout'
import * as pdf from '../../../Components/pdf'

function HSE() {
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="mrb30">
                                HSE Plan
                            </h3>
                        </div>
                    </div>
                    <div className="text-text-center" >
                        <h6>Health</h6>
                        <ul>
                            <li>
                                First Aid (ice bag) - First Aid boxes (ice bags) are conveniently placed at the following locations: Swimming Pool / Front Office / Boat Bar / Golf Bar / Arts & Craft / Tennis Pavilion / Gymnasium.
                            </li>
                            <li>
                                Jelly Fish - When the yellow flag is flying jelly fish have been sighted in the past 24 hours.
                            </li>
                        </ul>
                    </div>
                    <div className="text-text-center" >
                        <h6>Safety</h6>
                        <ul>
                            <li>
                                Incident Reporting - Report all incidents to the Manager in the Front Office. Alternatively, contact the President or Vice-President.
                            </li>
                            <li>
                                Driving RAH RC rules
                            </li>
                            <li>
                                Fire alarms / symbol points
                            </li>
                            <li>
                                Tool Box Meeting minutes
                            </li>
                        </ul>
                    </div>
                    <div className="text-text-center" >
                        <h6>Environments</h6>
                        <ul>
                            <li>
                                BBQ area
                            </li>
                            <li>
                                Cleaning of the beach after using
                            </li>
                        </ul>
                    </div>
                    <div className="text-text-center" >
                        <h6>Emergency/ Normal numbers</h6>
                        <p className="text-justify">
                            RAH emergency number 246 75555<br />
                            RAH RC security gate 246 78436<br />
                            RAH RC Security 246 76666
                        </p>
                        <h6 className="mrb10">Safety focal point on RAHRC Main Committee</h6>
                        <p className="text-justify">
                            Saleh Al Sharji - Club Manager - 24673188
                        </p>
                        <p className="text-justify">
                            Safety is a high priority at RAHRC and it is the responsibility of all members to make themselves aware of relevant safety procedures and regulations covering the premises. Safety information is displayed on notice boards and any specific requirements for the boat users and golfers is available from the respective Sections Committee members. RAHRC also follows a Safety Management System and a Yearly HSE Plan.
                        </p>
                        <p className="text-justify">
                            We rely on the goodwill of the membership and, in particular those of you with children, on "parental responsibility".
                        </p>
                        <p className="text-justify">
                            Given the potential dangers around the pool and in the sea, Parents must supervise their children at all times on the Club premises.
                        </p>
                        <p className="text-justify">
                            Please read the House Rules, discuss safety and behavioral rules with your children. Help us to maintain safety standards at the RAH RC and help the staff to keep a safe, clean and well maintained Centre for the good of all the members.
                        </p>
                        <p className="text-justify">
                            Please note that when the red flag is flying no one must enter the sea.
                        </p>
                        <h6 className="mrb30">
                            <a href={pdf.rah_plan_2017} target="_blank">Click to More</a>
                        </h6>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HSE
