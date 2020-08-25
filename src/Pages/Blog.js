import React from 'react'
import Layout from '../Components/Layout'
import * as image from '../Components/Image'

export default function Blog() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mrb30">Blogs</h2>
                        </div>
                    </div>
                    <div className="mb-3 text-center" >
                        <img src={image.blogimg1} className="img-fluid" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
