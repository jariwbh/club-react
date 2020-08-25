import React, { Component } from 'react'
import * as image from './Image'
import { Link } from 'react-router-dom'

class cards extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="pb-0" style={{ padding: '30px 0 0px', position: 'relative' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="mrb30"></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="white-box background-transparent text-center mrb30" >
                                    <div className="cs-img justify-content-center">
                                        <img src={image.powerboatlogo} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Powerboat </h5>
                                        <p className="card-text">
                                            RAHRC owns a number of Powerboats that are used for various activities, these include diving, sailing support, fishing and safety afloat. </p>
                                        <Link className="btn btn-primary" to="/powerboat">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="white-box background-transparent text-center mrb30" >
                                    <div className="cs-img justify-content-center">
                                        <img src={image.toastmasterlogo} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">  Toastmasters  </h5>
                                        <p className="card-text">RAHRC Toastmasters and Gavel Section” is functioning within Ras Al Hamra Recreation Club that helps its members to develop public speaking and leadership skills.</p>
                                        <Link className="btn btn-primary" to="/toastmasters">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="white-box background-transparent text-center mrb30" >
                                    <div className="cs-img justify-content-center">
                                        <img src={image.bridgelogo} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Bridge </h5>
                                        <p className="card-text"> The Bridge section of PDO RAHRC organizes bridge on: Monday evening in the Palm Room of the RAH Club. Starting time is: 19.15 (sharp)  until approximately 22.15.</p>
                                        <Link className="btn btn-primary" to="/bridge">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default cards
