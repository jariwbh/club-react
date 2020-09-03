import React from 'react'
import Layout from '../../../Components/Layout'
import * as image from '../../../Components/Image'

export default function OrangeMarkersBuoys() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="mrb30 text-center">
                        <img src={image.orangemarkersbuoysimg} className="img-fluid " />
                    </div>
                    <div >
                        <p className="text-justify">
                            Dear Fishermen and Powerboat owners,
                        </p>
                        <p className="text-justify">
                            There was a close call/near miss incident inside our RAH-Bay when a swimmer was almost run-over by a powerboat going at full speed.
                        </p>
                        <p className="text-justify">
                            The swimmer was well within the orange buoys. The boat was external to the club. He came inside the buoys about half way to the beach and went out again. All this at full speed, he missed the swimmer by about 1 meter. The driver was called and he apologized after the incident.
                        </p>
                        <p className="text-justify">
                            We stress again to all fisherman and powerboat owners to reduce your speeds within the bay inside the line of orange buoys to a MAXIMUM of 3 Knots (6 km/hr).
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}