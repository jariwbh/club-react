import React from 'react'
import { pic4, pic10, pic12, pic11, pic1, pic3, pic5, pic6, pic7, pic8 } from '../Image';

function VenueCards() {
    window.scrollTo(0, 0);
    return (
        <div class="container">
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic4} class="img-fluid" height='100%' />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Falcon Room</h3>
                        <p class="mb-0">Capacity: 30<br />
                            Purposes: Training and Section Classes,<br />
                            Conference & Meeting</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 50 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic1} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Palm Room</h3>
                        <p class="mb-0">Capacity: 30<br />
                            Purposes:  Training and Section Classes, Conference,<br />
                             Meeting,Lunch Party.</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 50 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic3} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Cinema Hall</h3>
                        <p class="mb-0">Capacity: 150<br />
                            Purposes:  Chamber Orchestra, Fitness, RAHADS Quiz Night<br />
                            & Theatrical  Production.</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 300 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic11} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Boat Club Roof Top</h3>
                        <p class="mb-0">Capacity: 20<br />
                            Purposes:  Facing the sea, can be used  for meetings &<br />
                            gatherings.</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 50 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic6} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Sohar Garden</h3>
                        <p class="mb-0">Capacity: 300<br />
                            Purposes:  Outdoor Parties, Section Events, Club Events<br />
                        </p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 300 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic7} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Marlin Hall</h3>
                        <p class="mb-0">Capacity: 100<br />
                            Purposes:  Meeting, Conference, Section Event, Party<br />
                            & Club Event.</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 200 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic8} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Sports Bar</h3>
                        <p class="mb-0">Capacity: 20<br />
                            Purposes:   For meetings, gatherings and parties.<br />
                            Bookable between 7:00 - 16:00 on Sunday, Wednesday, Thursday.
                            </p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 50 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic10} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Golf Course Range</h3>
                        <p class="mb-0">Capacity:  500 - 1000<br />
                            Purposes:   Golf Range for gatherings and weddings.<br />
                        </p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">RO 1500 </p>
                    </div>
                </div>
            </div>
            <div class="white-box p-3 mb-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 mb-3 mb-md-0">
                        <img src={pic3} class="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 mb-3 mb-md-0">
                        <h3 class="h4 mb-3">Club House Balcony</h3>
                        <p class="mb-0">Capacity: Sitting at table: 40 person; Standing 60 - 70 persons<br />
                            Purposes:  Dinners, Parties, etc<br />
                            Bookable from 6 pm on Sunday, Monday,<br />
                            Tuesday, Wednesday, Saturday.</p>
                    </div>
                    <div className="col-xl-4 offset-xl-2 col-lg-3 offset-lg-1 col-md-3">
                        <h3 class="h4 mb-3">Venue Charges</h3>
                        <p class="mb-0">Contact Front office</p>
                        <p>Email : rahrc@pdo.co.om</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VenueCards
