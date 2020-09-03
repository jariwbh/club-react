import React from 'react'
import Layout from '../../../Components/Layout'

function RAHLibrary() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mrb30">RAHLibrary</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h4 className="mrb30">LIBRARY OPENING TIMES - MARCH2020</h4>
                    <table className="table table-striped " >
                        <thead >
                            <tr>
                                <th scope="col"><h6>DAY</h6></th>
                                <th scope="col"><h6>AM</h6></th>
                                <th scope="col"><h6>Early PM</h6></th>
                                <th scope="col"><h6>PM</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sunday</td>
                                <td></td>
                                <td></td>
                                <td>4:00 - 6:00 PM</td>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td>9:30 - 11:30 AM</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>8:30 - 10:30 AM</td>
                                <td></td>
                                <td>5:30 - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td></td>
                                <td></td>
                                <td>5:00 - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>10:00 - 12:00 Noon</td>
                                <td>1:30 - 4:00 PM</td>
                                <td>5:00 - 7:00 PM</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Closed</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <h4 className="mrb10">Book Renewals &amp; Enquiries :</h4>
                    <p className="text-justify">
                        Email : Rahrclibrary@hotmail.com<br />
                        phone : 24677307
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default RAHLibrary 