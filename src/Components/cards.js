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
                                <h2 class="mrb30">Success Stories</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.timesvacanza} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"> Times Vacanza </h5>
                                        <p class="card-text">Times Vacanza is part of hospitality business of Times group. They offer Holidays. </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.yogatopics} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">  Yoga Topics  </h5>
                                        <p class="card-text">Yogatopics is Mumbai based Yoga studio which offers various Yoga classes, Mind/Body  </p>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 d-flex">
                                <div class="white-box background-transparent text-center mrb30" >
                                    <div class="cs-img justify-content-center">
                                        <img src={image.yogatopics} alt="" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title"> Club Hozo </h5>
                                        <p class="card-text">Club Hozo is part of hospitality business. They offer best holiday services. </p>
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
