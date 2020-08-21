import React from 'react'
import Layout from '../Components/Layout'
export default function Pricing() {
    return (
        <Layout>
            <section class="common-block pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="mrb30">Club Activity Charges</h2>
                        </div>
                    </div>
                    <div >
                        <h5>Boat storage charges:</h5>
                        <ul>
                            <li>Power boats: OMR 100 per space per year.</li>
                            <li>Kayaks/Windsurf/SUP: OMR 10 per slot per year. This includes the opportunity to make use of a (shared) locker in the kayak area.</li>
                            <li>Sailing boats: OMR 20 per space per year.</li>
                        </ul>
                    </div>
                    <div >
                        <h5 >Tennis:</h5>
                        <p>Tennis court use will be OMR 1 per booking. Lessons will be charged at an extra 500 baiza per booking to cover the use of tennis courts for lessons.</p>
                    </div>
                    <div >
                        <h5>Boat usage charges:</h5>
                        <table>
                            <tr>
                                <th>Description</th>
                                <th>Charges</th>
                            </tr>
                            <tr>
                                <td>Kayak, paddle and lifejacket ‘rental’</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>SUP, paddle and lifejacket ‘rental’</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>Windsurf and lifejacket ‘rental’
                                (NOTE: same charge even if the member has their own lifejacket).</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>Loss of kayak</td>
                                <td>OMR 250</td>
                            </tr>
                            <tr>
                                <td>Loss of SUP</td>
                                <td>OMR 250</td>
                            </tr>
                            <tr>
                                <td>Loss of Windsurfer</td>
                                <td>OMR 300</td>
                            </tr>
                            <tr>
                                <td>Damage to kayak, SUP or windsurfer</td>
                                <td>OMR 100 or at Club discretion</td>
                            </tr>
                            <tr>
                                <td>Loss of paddle</td>
                                <td>OMR 25</td>
                            </tr>
                            <tr>
                                <td>Loss of lifejacket (NOTE: loss is also non-return or significant damage)</td>
                                <td>OMR 25</td>
                            </tr>
                            <tr>
                                <td>Hobie ‘rental’</td>
                                <td>OMR 5</td>
                            </tr>
                            <tr>
                                <td>Laser ‘rental’</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>Baha/Laser 2 ‘rental’</td>
                                <td>OMR 5</td>
                            </tr>
                            <tr>
                                <td>Topper ‘rental’</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>Optimist ‘rental’</td>
                                <td>OMR 2</td>
                            </tr>
                            <tr>
                                <td>Power Boat ‘rental’</td>
                                <td>OMR 15 (without Fuel)</td>
                            </tr>
                            <tr>
                                <td>Damage to sailing or power boat</td>
                                <td>OMR 150 or at Club discretion (e.g. Loss of boat may be higher)</td>
                            </tr>
                        </table>

                        <h6>NOTE: Pensioners will receive a 50% discount on all of the above charges.</h6>
                    </div>
                </div>
            </section>
        </Layout>
    )
}