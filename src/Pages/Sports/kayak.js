import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function Kayak() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">RAHRC Kayak Section</h2>
                        </div>
                    </div>
                    <img className="img-fluid mb-3" src={image.kayakimg1} />
                    <h4 className="mrb10">Thursday Evening Social Paddle</h4>
                    <p className="text-justify">
                        If you wish to increase your paddling confidence and stamina, why not join us on Thursday afternoons - this is where you gain experience and where the paddling plans are made. These regular Thursday afternoon paddles depart from the club beach. Usually we head out to Shatti, and be on the water for one hour or so. Meet at the kayak storage area. The departure time varies throughout the year according to sunset. Contact Kayak Section (rahkayaksection@gmail.com) for regular e-mail notices and further information.
                    </p>
                    <h4 className="mrb10">Weekend Day Trips</h4>
                    <p className="text-justify">
                        If you wish to increase your paddling confidence and stamina, why not join us on Thursday afternoons - this is where you gain experience and where the paddling plans are made. These regular Thursday afternoon paddles depart from the club beach. Usually we head out to Shatti, and be on the water for one hour or so. Meet at the kayak storage area. The departure time varies throughout the year according to sunset. Contact Kayak Section (rahkayaksection@gmail.com) for regular e-mail notices and further information.
                    </p>
                    <h4 className="mrb10">Independant Kayaking</h4>
                    <p className="text-justify">
                        RAHRC members may kayak from the beach with either their own or club equipment. Club-owned equipment is available to borrow from the Club Safety Post (CSP) on the waterfront. All paddlers must abide by the rules and guidance from the CSP staff.
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default Kayak
