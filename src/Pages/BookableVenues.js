import React from 'react'
import '../Assets/Css/aboutus.css'
import Layout from '../Components/Layout'
import Cards from '../Components/cards'

export default function BookableVenues() {
    return (
        <Layout>
            <section class="common-block pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h2 class="mrb30">Bookable Venues</h2>
                            <h2 class="mrb30">Bookable Venues</h2>
                        </div>
                    </div>
                    <div >
                        <p className="text-justify">
                            It is possible to book venues at RAHRC for meetings, conferences, parties or other (private) gatherings.
                        </p>
                        <p className="text-justify">
                            Only members are able to book a venue. Entry fees for non-member guests are included in the venue charge (not more than the capacity mentioned).
                        </p>
                        <p className="text-justify">
                            Food and (non-alcoholic) drinks can be brought to those venues not located at the Clubhouse restaurant. Events at the Sports Bar or Restaurant Balcony will be catered by the Clubhouse restaurant.
                        </p>
                        <p className="text-justify">
                            These venues are available for bookings and require to call the Front office on 24677321 or write to rahrc@pdo.co.om
                        </p>
                        <p className="text-justify">
                            Please provide the pre-requisites information mentioned below before booking the the venue and familiarise yourself with our rules and regulations.
                        </p>
                    </div>
                </div>
            </section>
            <Cards />
            <section class="common-block pb-0">
                <div class="container">
                <div >
                        <h5>Pre-Requisites</h5>
                        <p> Kindly fill in the below details and send them back to us.</p>
                        <ol>
                            <li>NAME OF THE MEMBER:</li>
                            <li>MEMBERSHIP NUMBER:</li>
                            <li>GSM NUMBER:</li>
                            <li>EMAIL ID:</li>
                            <li>DATE OF THE EVENT:</li>
                            <li>TIME OF START &amp; END OF THE EVENT:</li>
                            <li>PDO DEPARTMENT:</li>
                            <li>TYPE OF EVENT:</li>
                            <li>NUMBER OF PEOPLE: *If guests exceed 100, then there is an additional charge of OMR. 50/- for set up.</li>
                            <li>PREFERRED VENUE:</li>
                            <li>SEATING ARRANGEMENT:</li>
                            <li>AV EQUIPMENT: Yes/ No</li>
                        </ol>
                        <p>For PDO department meetings,away days,etc please provide Department account No. WBS or CC.</p>
                        <p>If you would like to serve alcohol at your event an alcohol ROP license fee is to be paid of OMR 20.</p>
                        
                        <h5>Payment Terms:</h5>
                        <ul>
                            <li>For PDO members through their membership accounts.</li>
                            <li>For External members by cash or bank card.</li>
                        </ul>

                        <h5>Cancellation Policy:</h5>
                        <p>Cancellation of a venue will not be accepted later than 72 hours (3 days) of the event date. Therefore the member is liable to pay in full the amount charged for that venue.</p>

                        <h5>Rules:</h5>
                        <p>All members are requested to adhere to club rules.</p>
                        <p>Bringing alcohol from outside on to the club premises is prohibited by the  ROP.</p>
                        <p>All wedding celebrations(Henna, engagements, before wedding ceremonies, after wedding ceremonies,anniversary,etc) are not allowed.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}