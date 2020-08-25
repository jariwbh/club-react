import React from 'react'
import Layout from '../../../Components/Layout'

function SportsHallBooking() {
    window.scrollTo(0, 0);
    return (
        <Layout>
            <section className="common-block pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mrb30">SPORTS HALL Booking</h2>
                        </div>
                    </div>
                    <p className="text-justify">
                        Sports hall bookings must be made in advance only through the RAHRC front office from Sunday to Thursday between 9:00am and 3.30pm.Members are not allowed to use the sports hall without prior booking from the front office.
                    </p>
                    <p className="text-justify">
                        Bookings can be made only by the Main Member or his/her Spouse by an email to <br />
                        <a href="mailto:rahrc@pdo.co.om">rahrc@pdo.co.om</a>
                    </p>
                    <h4 className="mrb10">Bookings CANNOT be made by phone</h4>
                </div>
            </section>
        </Layout>
    )
}

export default SportsHallBooking
