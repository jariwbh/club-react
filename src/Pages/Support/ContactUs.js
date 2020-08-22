import React from 'react'
import Layout from '../../Components/Layout'
const MapURL = "//www.weebly.com/weebly/apps/generateMap.php?map=google&elementid=164065515217080376&ineditor=0&control=3&width=auto&height=350px&overviewmap=1&scalecontrol=1&typecontrol=0&zoom=15&long=58.498717&lat=23.6399467&domain=www&point=1&align=2&reseller=true";

export default function ContactUs() {
    return (
        <Layout>
            <section class="common-block">
                <div class="container">
                    <div class="inner-text-main animate-top">
                        <h2 >Contact Us</h2>
                    </div>
                    <br /><br />
                    <div class="row">
                        <div class="col-sm-6 col-md-4 mb-3">
                            <h3 class="h4 mb-3">Sultanate of Oman</h3>
                            <address>
                                <div class="cu-address">
                                    <p>
                                        Ras Al Hamra Recreation Centre.<br />
                                        PO Box 81 Muscat,<br />
                                        Postal Code 100<br />
                                        Sultanate of Oman</p>
                                </div>
                            </address>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3">
                            <h3 class="h4 mb-3">Email:</h3>
                            <address>
                                <div class="cu-address">
                                    <p><i class="custom-cu-envelope-icon"></i> <a href="mailto:rahrc@pdo.co.om">rahrc@pdo.co.om</a></p>
                                </div>
                            </address>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-3">
                            <h3 class="h4 mb-3">Telephone:</h3>
                            <address>
                                <div class="cu-address">
                                    <p>General Enquiries: 24677321<br />
                                    Accounts: 24678157 /24671086/ 24673260<br />
                                    Bar Administration: 24675436<br />
                                    Bulk Store: 24675815<br />
                                    General Manager: 24673188</p>
                                </div>
                            </address>
                        </div>
                    </div>

                    <div className="white-box-no-animate p-20">
                        <iframe src={MapURL} frameBorder="0" height="350" width="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </section>



        </Layout>
    )
}
