import React from 'react'
import Layout from '../../Components/Layout'
import { pic7, pic1, pic12, pic3, pic4, pic5, pic6, pic8, pic9, pic10 } from '../../Components/Image'

export default function Gallery() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="inner-text-main animate-top">
                        <h2>Gallery</h2>
                        <br />
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mb-3">
                                <div>
                                    <img src={pic1} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic3} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic4} className="zoom" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mb-3">
                                <div>
                                    <img src={pic5} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic6} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic7} className="zoom" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 mb-3">
                                <div>
                                    <img src={pic8} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic9} className="zoom" />
                                </div>
                                <br />
                                <div>
                                    <img src={pic10} className="zoom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
