import React from 'react'
import Layout from '../../../Components/Layout'
import * as image from '../../../Components/Image'
function Pakistan() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">Ras Al Hamra Pakistan Section News Update</h2>
                        </div>
                    </div>
                    <img className="img-fluid mb-4 pl-5" src={image.pakistan} />
                </div>
            </section>
        </Layout>
    )
}

export default Pakistan
