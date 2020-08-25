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
                            <h2 className="mrb30">Ras Al Hamra Holland Section News Update</h2>
                        </div>
                    </div>
                    {/* <img className="img-fluid mb-3" src={image.kayakimg1} /> */}
                    <p className="text-justify">
                        Hello! Bonjour!<br/>
                        In case you haven't heard of us yet, the Holland Section is a registered section of the RAHRC. Its mandate is to promote Holland culture, and organize activities and events with a Holland flavor for RAHRC members and their guests. 
                    </p>
                    <h6>The Holland Section committee is made up of:</h6>
                    <ul>
                        <li>Murray Mulrooney, our Chairman, is from Innisfail, Alberta and is a Senior OR engineer at PDO in Central Project Delivery. He has been in Muscat since 2014.</li>
                        <li>Richard Winkel, our Treasurer, is from Fort McMurray, Alberta and has been in Oman since August 2015. He works as a Technical Integrity Engineer in the South Sour Operations Group in PDO.</li>
                        <li>Beth Farmer, our Secretary, is from Calgary, Alberta and is a Petrophysical Engineer at PDO in Qarn Alam cluster. She has been in Muscat since August 2015.</li>
                        <li>Mark Hamm is from Calgary, Alberta and is a Senior Reservoir Engineer at PDO in the Qarn Alam Steam asset. He has been in Muscat since September 2014. </li>
                    </ul>
                    <p className="text-justify">
                        The Holland Section has an email account which will be used to communicate details of our activities to Hollands living in Oman. To be added to the distribution list, please send us your contact information to <a href="mailto:canadiansinoman@gmail.com">canadiansinoman@gmail.com</a>. Also, if you are interested in joining the Holland Section committee, please let us know, we would love to meet you! 
                    </p>
                    <p className="text-justify">
                        We generally plan for two Holland events per year, the first is our Annual Holland Stampede Party at RAHRC â€“ March 3, 2017 will be the 24th Annual Event.
                    </p>
                    <p className="text-justify">
                        This is a great party and usually sells out in record time, attesting to its popularity. 
                    </p>
                    <p className="text-justify">
                        The second event is our Annual Holland Thanksgiving dinner at RAHRC which is held on or close to the date of the Holland Thanksgiving in October. Watch for details and don't miss the chance to share a turkey dinner with other Hollands.
                    </p>
                    <p className="text-justify">
                        Organization of these events is done through a volunteer committee, so feel free to contact us if you would like to help out. We are always looking for new people with new ideas to participate. And don't hesitate to suggest other event ideas if you have some!
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default Holland
