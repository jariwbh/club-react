import React from 'react'

function VenueTable() {
    return (
        <section class="mt-3 pb-0">
            <div class="container">
                <h3 class="h4 mb-4">Venue Charges</h3>
                <table class="table table-striped" >
                    <thead >
                        <tr>
                            <th scope="col"><h6>No.</h6></th>
                            <th scope="col"><h6>Venues</h6></th>
                            <th scope="col"><h6>PDO Department Event Fees (RO)</h6></th>
                            <th scope="col"><h6>Private Event fees (RO)</h6></th>
                            <th scope="col"><h6>Venue Accommodates</h6></th>
                            <th scope="col"><h6>Music System Charges When Requested (RO)</h6></th>
                            <th scope="col"><h6>Allowed Guest Passes</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Marlin Hall</td>
                            <td>100</td>
                            <td>200</td>
                            <td>100</td>
                            <td>50</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sohar Garden</td>
                            <td>150</td>
                            <td>300</td>
                            <td>300</td>
                            <td>50</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Falcon Room</td>
                            <td>50</td>
                            <td>50</td>
                            <td>30</td>
                            <td>50</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Palam Room</td>
                            <td>50</td>
                            <td>50</td>
                            <td>30</td>
                            <td>50</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Marlin/Sohar</td>
                            <td>250</td>
                            <td>450</td>
                            <td>450</td>
                            <td>50</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Boat Club Roof Top</td>
                            <td>50</td>
                            <td>75</td>
                            <td>20</td>
                            <td>50</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Cinema Hall</td>
                            <td>150</td>
                            <td>200</td>
                            <td>150</td>
                            <td>50</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Sport Bar</td>
                            <td>50</td>
                            <td>50</td>
                            <td>20</td>
                            <td>50</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Club House Balcony</td>
                            <td>Contact Front Office</td>
                            <td>Contact Front Office</td>
                            <td>70</td>
                            <td>50</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Golf Course Range</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1000</td>
                            <td>50</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </section>
    )
}

export default VenueTable
