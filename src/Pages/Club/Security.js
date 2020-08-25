import React from 'react'
import Layout from '../../Components/Layout'

export default function Security() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section class="common-block">
                <div className="container">
                    <h6 className="text-justify">Rules of Entry</h6>
                    <div >
                        <p className="text-justify">
                            All members must show their Membership Card to gain access to RAH . The manual sign-in of guests will be discontinued. All guests will be signed-in at the Security Gate through a swipe-card system.
                        </p>
                        <p className="text-justify">
                            Members with guests need their Membership cards to gain entry for their guests. Guests need to provide following identification before they can be signed-in at the gate:
                            Omani Nationals - National ID Card
                            Expatriate residents - Resident Card
                            Non-resident visitors - Passport or Photo ID cards
                        </p>
                        <p className="text-justify">
                            No more than 4 guests may be signed-in by a member in a 24 hour period and a guest may visit the club no more than 4 times in a calendar month.
                        </p>
                        <h6 className="text-justify"> Contact the RAHRC front office with any queries on 24677321.</h6>
                        <p className="text-justify">
                            Thank you!<br />
                        RAHRC Management
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
