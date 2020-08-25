import React from 'react'
import Layout from '../../../Components/Layout'
import * as image from '../../../Components/Image'

function Holland() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">Holland-Hispanic-RAHRC Toastmasters and Gavel Club</h2>
                        </div>
                    </div>
                    {/* <img className="img-fluid mb-3" src={image.kayakimg1} /> */}
                    <p className="text-justify">
                        RAHRC Toastmasters and Gavel Section” is functioning within Ras Al Hamra Recreation Club that helps its members to develop public speaking and leadership skills.
                    </p>
                    <h6>That brings in following benefits :</h6>
                    <ul>
                        <li> Develop communication and language skills</li>
                        <li> Learn to think quickly and clearly</li>
                        <li> Become an effective listener</li>
                        <li>Evaluate effectively</li>
                        <li>Use body language and visual aids</li>
                        <li>Advance social skills</li>
                        <li>Improve job or promotion prospects</li>
                        <li>Experience benefits of a toastmasters club without having to initially join</li>
                        <li>Problem-solving</li>
                        <li>Impromptu Speaking</li>
                        <li>Managing Nervousness</li>
                        <li> Introducing a Speaker</li>
                        <li>Preparation &amp; Practice</li>
                        <li>Speech Structure &amp; Organization</li>
                        <li>Beginning &amp; Concluding a Speech</li>
                        <li>Body Language / Vocal Variety</li>
                        <li>Meeting in larger groups</li>
                        <li> Motivating people</li>
                        <li>Conducting business meetings</li>
                        <li>Knowing an Audience</li>
                        <li>Improve your public speaking skills.</li>
                        <li>Build leadership skills.</li>
                        <li>Maximize your potential.</li>
                        <li>Enjoy unlimited personal growth.</li>
                        <li> Work on networking in a small and supportive environment.</li>
                        <li> Gain support and practice writing speeches and presenting in a group setting.</li>
                        <li>Gain a competitive advantage in the workplace.</li>
                        <li>Build greater self-confidence and self-awareness</li>
                    </ul>
                    <h4 className="mrb10">We have followimng two categories of the members :</h4>
                    <p className="text-justify">
                        Toastmasters Club: for people of age group above 18 Years .
                    </p>
                    <p className="text-justify">
                        Gavel Club: for people of age group between 11 years and 18 Years .
                    </p>
                    <p className="text-justify">
                        Objective of the section: To improve communication and build leadership skills.
                    </p>
                    <h4 className="mrb10">Main activities (and when):</h4>
                    <p className="text-justify">
                        Toastmasters Club: Meeting every Monday from 6 PM to 7 PM (mostly in Falcon meeting room at Ras Al Hamra Recreation Club)
                    </p>
                    <p className="text-justify">
                        Gavel Club: Meeting every Tuesday from 5 PM to 6:30 PM (mostly in Falcon meeting room at Ras Al Hamra Recreation Club)
                    </p>
                    <h6>In both the above clubs (for the respective age categories) meet weekly and follow basic agenda as below:</h6>
                    <ul>
                        <li>Prepared speeches – Members are given opportunities to prepare, rehearse, and then deliver presentations in front of their fellow members.</li>
                        <li>Speech evaluations – Whenever you speak in Toastmasters, you receive helpful and supportive evaluations from your peers.</li>
                        <li>Impromptu speaking – Members practice speaking “off the cuff” for one or two minutes by responding to general topics of interest (table topics).</li>
                    </ul>
                    <p className="text-justify">
                        Come and visiting our club and experience the sessions with us. Although it is recommended to inform us that you are are coming, you could as well just walk in. Attending a meeting as a guest is free and there’s no obligation to participate. You decide when you are comfortable and ready to take up a role.
                    <br /><br />
                        Toastmasters International is for people of all backgrounds who would like to explore or build their speaking and leadership skills. RAHRC toastmasters is run under the umbrella of Toastmaster International within the RAHRC concession area.
                    </p>
                    <div className="mt-3">
                        <h5>Contact Us</h5>

                        <p className="text-justify">
                            Contact details (e-mail, phone-number):
                            <br />
                            Email : r_nayakam@yahoo.com    GSM : +968-9295 6887 (Ram Nayakam)
                            <br />
                            Email : daniel.appiah@gmx.de     GSM : +968 97201228 (Daniel Appiah)
                            <br />
                            Social media accounts: Facebook group, WhatsApp etc. (how to join?)
                            <br />
                            Facebook : @rahrctoastmasters
                            <br />
                            Whatsapp : +968-9295 6887
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.toastmasterimg1} className="zoom img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.toastmasterimg2} className="zoom img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div>
                                    <img src={image.toastmasterimg3} className="zoom img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Holland
