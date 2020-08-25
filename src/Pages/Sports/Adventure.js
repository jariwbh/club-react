import React from 'react'
import Layout from '../../Components/Layout';

function Adventure() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 animate-top text-center">
                            <h2 className="mrb30">Adventure</h2>
                        </div>
                    </div>
                    <div >
                        <p className="text-justify">
                            The RAS AL HAMRA RECREATION CENTRE (RAHRC) is  located in the Ras  al Hamra residential area. The RAHRC provides opportunities for social, recreational and sporting activities for the benefit of RAH staff and their families. Membership requires the payment of a modest monthly fee, which is automatically charged to the members’ account.
                    </p>
                        <p className="text-justify">
                            The Ras al Hamra  (RAH) Club boasts a number of facilities for both social and recreational activities. It has coffee shop and restaurant as well as swimming pools for  adults and children, private beaches, gymnasiums and nine-hole golf course which  are under construction. All payments, whether for food, or sports instruction, are made through an electronic membership card and recovered from the member’s salary.
                    </p>
                        <p className="text-justify">
                            Most activities at the Club are run by volunteer members who form "sections", such as the Ras al Hamra Amateur Dramatic Society, the Astronomy section, and so on. The sections can not only make full use of RAHRC facilities but also receive some financial support from the club. And if there is no section that covers your particular interest, you can start one up yourself!
                    </p>
                        <h6 className="text-justify"> Sports and Social Recreation facilities at the RAH Club:</h6>

                        <p className="text-justify">
                            Arts & Craft Centre, Boat Club, Book Library, Bulk Store, Cinema/Theatre Hall, Golf Club, Gym, Ladies Association, Snooker Room, Squash Courts, Swimming Pool,  Tennis Courts, Video Shop, Volleyball Court.
                    </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Adventure
