import React from 'react'
import Layout from '../../Components/Layout'
import * as image from '../../Components/Image'
function Badminton() {
    return (
        <Layout>
            <section class="common-block">
                <div className="container">
                    <div className="row">
                        <div class="col-12 animate-top text-center">
                            <h2 className="mrb30">Badminton</h2>
                        </div>
                    </div>
                    <img className="img-fluid mb-4 pl-5" src={image.badmintonimg1} />
                    <div >
                        <p className="text-justify">
                            The Badminton section is among the popular sports sections of the RAHRC.
                            Badminton is played in a shared, ‘multi-purpose’ facility in the RAHRC sports hall.
                            We have 6 courts and about 6 sessions of 2 – 3 hours each, every week.
                            The facilities are open to all members without prior booking.
                            All groups, the ladies, the children, the adults and families enjoy their own dedicated slots.
                            The section hosts an annual tournament for all categories,
                            which is played with a good mix of competition & fun.
                        </p>

                        <h3 className="mrb30 mt-4">Play Timings & Basic Guidelines</h3>
                        <h5>Timings</h5>
                        <p className="text-justify">
                            Badminton court is part of the multipurpose sports hall located in RAHRC, next to the Tennis courts. <br />
                        Please note the timeslots allocated by the club management for Badminton sessions as mentioned below:
                        </p>
                        <p className="text-justify">Note:</p>
                        <p className="text-justify">
                            1.  Any changes to the above may be announced by the club management / badminton section committee in Announcement section of this website<br />
                            2.  Adults:  Include children above 15 years of age<br />
                            3.  Saturdays sessions are only for RAHRC members. Guests are not allowed.<br />
                            4.  In addition to the above fixed slots, members may book the courts for badminton, during the ‘one-off’ slots available in the weekly sports hall schedule, by contacting the front desk directly

                        </p>
                        <h5 className="mrb10 mt-4">Basic Guidelines to be complied during the badminton sessions:</h5>
                        <p className="text-justify">
                            1.  Safety of yourself and all other members are foremost important to us. Please fully comply with the following safety rules:<br />
                                - Only non-marking shoes shall be used by all members<br />
                                - Walking / running inside the courts during play shall be avoided<br />
                                - Children below 8 years are not allowed inside the play area.<br />
                                - If you find any water / liquid spills, please contact the cleaning staff<br />
                                - No other games / sports activities allowed during the badminton session<br />
                                - Follow some warm-up / stretching exercises before you start your playing<br />
                            2.  Badminton Racquets to be brought by the members<br />
                            3. Shuttles will be provided by the badminton section. Members are kindly requested to use the shuttles consciously - considering the budget allotted.<br />
                            4. Allotted category of members in the above table (Adults OR Family) will be given first priority. If the court is vacant, other category members present can use. Ladies’ session is exclusive and male players are strictly not allowed.<br />
                            5. If all the badminton courts are occupied by the members, you are required to wait till the existing players complete 15 minutes (if not playing with points) or two games.<br />
                            6. Guests are not allowed on Saturdays.
                        </p>
                    </div>
                    <table class="table table-striped" border='5' >
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>08:00 AM TO 09:30 AM</td>
                                <td>LADIES ONLY</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>08:00 PM TO 10:0 PM</td>
                                <td>ADULTS</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>07:30 PM TO 10:0 PM</td>
                                <td>ADULTS</td>
                            </tr>
                            <tr>
                                <td>Thuesday</td>
                                <td>08:00 AM TO 11:00 AM</td>
                                <td>LADIES ONLY</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>02:00 PM TO 04:00 PM</td>
                                <td>CHILDREN ONLY</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>08:00 AM TO 10:00 AM</td>
                                <td>ADULTS</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>10:00 AM TO 11:30 AM</td>
                                <td>CHILDREN COACHING - 2 COURTS</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>10:00 AM TO 11:30 AM</td>
                                <td>CHILDREN FAMILIES - 4 COURTS</td>
                            </tr>
                            <tr>
                                <td>SATURDAY</td>
                                <td>11:30 AM TO 12:30 AM</td>
                                <td>CHILDREN FAMILIES - 6 COURTS</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </section>
        </Layout>
    )
}

export default Badminton
