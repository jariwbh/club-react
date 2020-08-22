import React from 'react'
import Layout from '../../Components/Layout'

export default function Organisation() {
    return (
        <Layout>
            <section class="common-block">
                <div class="container">
                    <div class="inner-text-main animate-top">
                        <h2 >Organisation</h2>
                    </div>
                    <br />
                    <h3>Main Committee:</h3>
                    <table class="table table-striped " >
                        <thead >
                            <tr>
                                <th scope="col"><h6>Position</h6></th>
                                <th scope="col"><h6>Name</h6></th>
                                <th scope="col"><h6>Tel. Office</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>President</td>
                                <td>Khalid AI-Khabouri (UDI)</td>
                                <td>24677366</td>
                            </tr>
                            <tr>
                                <td>Vice President</td>
                                <td>Adel AI-Foory (FPS1)</td>
                                <td>24674920</td>
                            </tr>
                            <tr>
                                <td>Honorary Treasurer</td>
                                <td>Shahram JahanBani (FFM)</td>
                                <td >-</td>
                            </tr>
                            <tr>
                                <td>Bar Secretary</td>
                                <td>Wayne Bryant (PCC)</td>
                                <td >24672255</td>
                            </tr>
                            <tr>
                                <td>Sport Secretary	</td>
                                <td>Simone Steuns</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Social Secretary</td>
                                <td>Hamoud Shaqsy (CTOD)</td>
                                <td>24678202</td>
                            </tr>
                            <tr>
                                <td>Community Member</td>
                                <td>Richad Winkel (OSGO6TI)</td>
                                <td>24679807</td>
                            </tr>
                            <tr>
                                <td>UIR RAH Liaison	</td>
                                <td>AMROO AL HINAI</td>
                                <td>24676210</td>
                            </tr>
                            <tr>
                                <td>Project Secretary</td>
                                <td>Emma Goelema (61607A)</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div >
                        <p className="text-justify">
                            The RAHRC shall be managed by the Main Committee of the following eight voting members, all of whom shall be PDO employees or their spouses.
                        </p>
                        <p className="text-justify">
                            President<br />
                            Vice President<br />
                            Honorary Treasurer<br />
                            Bar Secretary<br />
                            General Secretary<br />
                            Social Secretary<br />
                            Project Secretary<br />
                            Community Member<br />
                        </p>
                        <p className="text-justify">
                            There shall be no non-voting Members of the Committee.
                        </p>
                        <p className="text-justify">
                            In the absence of the President, the Vice President will act; and in the event that both the President and Vice President are absent, the Committee shall elect one of the voting Members to act.
                        </p>

                        <p className="text-justify">
                            All Members of the Committee shall hold the posts in an honorary capacity and, except for the President, the Vice President, the Honorary Treasurer, and the Bar Secretary, may resign by giving written notice to the President.
                        </p>
                        <p className="text-justify">
                            Any representative of Sections wishing to make a proposal to the Committee may be invited to attend the meeting by the General Secretary provided such proposal is presented to the General Secretary at least 3 days prior to the Committee Meeting.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
