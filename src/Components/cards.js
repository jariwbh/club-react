import React, { Component } from 'react'
import * as image from './Image'

class cards extends Component {
    render() {
        return (
            <React.Fragment>
                <section class="pb-0" style={{ padding: '30px 0 0px', position: 'relative' }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h2 class="mrb30"></h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.powerboatlogo} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"> Powerboat </h5>
                                        <p class="card-text">
                                            RAHRC owns a number of Powerboats that are used for various activities, these include diving, sailing support, fishing and safety afloat. </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.toastmasterlogo} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">  Toastmasters  </h5>
                                        <p class="card-text">RAHRC Toastmasters and Gavel Section” is functioning within Ras Al Hamra Recreation Club that helps its members to develop public speaking and leadership skills.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.bridgelogo} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"> Bridge </h5>
                                        <p class="card-text"> The Bridge section of PDO RAHRC organizes bridge on: Monday evening in the Palm Room of the RAH Club. Starting time is: 19.15 (sharp)  until approximately 22.15.</p>
                                        <a href="#" class="btn btn-primary">Read More</a>
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
