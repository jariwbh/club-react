import React from 'react'
import Layout from '../../../Components/Layout'
import * as pdf from '../../../Components/pdf'

function RAHRCBulletin() {
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <h2 className="mrb30">RAHRC Bulletin</h2>
                        </div>
                    </div>
                    <div >
                        <h6 className="mrb10">
                            <a href={pdf.nov2019} target="_blank">Nov 2019</a>
                        </h6>
                        <h6 className="mrb10">
                            <a href={pdf.oct2019} target="_blank">Oct 2019</a>
                        </h6>
                        <h6 className="mrb10">
                            <a href={pdf.sep2019} target="_blank">Sep 2019</a>
                        </h6>
                        <h6 className="mrb10">
                            <a href={pdf.aug2019} target="_blank">Aug 2019</a>
                        </h6>
                        <h6 className="mrb10">
                            <a href={pdf.july2019} target="_blank">July 2019</a>
                        </h6>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default RAHRCBulletin
