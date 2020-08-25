import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import BookableVenues from "./BookableVenues"
import Pricing from "./Pricing"
import AboutUs from "./Club/AboutUs"
import ContactUs from "./Club/ContactUs"
import Gallery from "./Club/Gallery"
import Organisation from "./Club/Organisation"
import Security from "./Club/Security"
import Login from "./Login"
import FAQs from "./FAQs"
import Blog from "./Blog"
import Register from "./Register"
import Badminton from '../Pages/Sports/Badminton'
import Dance from '../Pages/Sports/Dance'
import Hockey from '../Pages/Sports/Hockey'
import Kayak from '../Pages/Sports/Kayak'
import Powerboat from '../Pages/Sports/Powerboat'
import Bridge from '../Pages/Resources/SocialSecation/Bridge'
import Toastmasters from '../Pages/Resources/SocialSecation/Toastmasters'
import MarahTots from '../Pages/Resources/SocialSecation/MarahTots'
import Canadian from '../Pages/Resources/SocialSecation/Canadian'
import Hispanic from '../Pages/Resources/SocialSecation/Hispanic'
import Holland from '../Pages/Resources/SocialSecation/Holland'
import Pakistan from '../Pages/Resources/SocialSecation/Pakistan'
import Fish from '../Pages/Sports/Fish'
import GolfClub from '../Pages/Sports/GolfClub'
import RAHLibrary from '../Pages/Resources/Schedules/RAHLibrary'
import TennisCourtBooking from '../Pages/Resources/Schedules/TennisCourtBooking'
import SportsHallBooking from '../Pages/Resources/Schedules/SportsHallBooking'
import HSE from '../Pages/Resources/Information/HSE'
import OrangeMarkersBuoys from '../Pages/Resources/Information/OrangeMarkersBuoys'
import RAHRCBulletin from '../Pages/Resources/Information/RAHRCBulletin'
import Adventure from '../Pages/Sports/Adventure'

class Default extends Component {
    render() {
        return (
            <Switch>
                <Route strict exact path="/" component={Home} />
                <Route exact path="/bookablevenues" component={BookableVenues} />
                <Route exact path="/pricing" component={Pricing} />

                <Route exact path="/blogs" component={Blog} />
                <Route exact path="/faqs" component={FAQs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

                {/* club section */}
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/organisation" component={Organisation} />
                <Route exact path="/security" component={Security} />

                {/* Sport section */}
                <Route exact path="/badminton" component={Badminton} />
                <Route exact path="/dance" component={Dance} />
                <Route exact path="/hockey" component={Hockey} />
                <Route exact path="/kayak" component={Kayak} />
                <Route exact path="/powerboat" component={Powerboat} />
                <Route exact path="/fish" component={Fish} />
                <Route exact path="/golfclub" component={GolfClub} />
                <Route exact path="/adventure" component={Adventure} />

                {/* social section */}
                <Route exact path="/bridge" component={Bridge} />
                <Route exact path="/toastmasters" component={Toastmasters} />
                <Route exact path="/marahtots" component={MarahTots} />
                <Route exact path="/canadian" component={Canadian} />
                <Route exact path="/hispanic" component={Hispanic} />
                <Route exact path="/holland" component={Holland} />
                <Route exact path="/pakistan" component={Pakistan} />

                {/* Schedules section */}
                <Route exact path="/rahlibrary" component={RAHLibrary} />
                <Route exact path="/sportshallbooking" component={SportsHallBooking} />
                <Route exact path="/tenniscourtbooking" component={TennisCourtBooking} />

                {/* Schedules section */}
                <Route exact path="/orangemarkersbuoys" component={OrangeMarkersBuoys} />
                <Route exact path="/hse" component={HSE} />
                <Route exact path="/rahrcbulletin" component={RAHRCBulletin} />

            </Switch>
        );
    }
}

export default Default
