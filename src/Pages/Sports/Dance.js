import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'

function Dance() {
    return (
        <Layout>
            <section class="common-block">
                <div className="container">
                    <div class="col-12 animate-top text-center">
                        <h2 className="mrb30">Dance for Childern & Pre Teens </h2>
                    </div>
                    <img class="img-fluid pl-5" src={image.danceimg1} />
                    <p className="text-justify">
                        Dance is a powerful impulse, but the art of dance is that impulse channeled by skillful performers into something that becomes intensely expressive and that may delight spectators who feel no wish to dance themselves. These two concepts of the art of dance—dance as a powerful impulse and dance as a skillfully choreographed art practiced largely by a professional few—are the two most important connecting ideas running through any consideration of the subject. In dance, the connection between the two concepts is stronger than in some other arts, and neither can exist without the other.
                    </p>
                    <h4 className="mrb10">Contact Us</h4>
                    <p>
                        Email : RAHDancesection@gmail.coom
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default Dance
