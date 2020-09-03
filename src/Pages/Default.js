import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import Home from "./home"
import BookableVenues from "./bookableVenues"
import Pricing from "./pricing"
import AboutUs from "./Club/aboutUs"
import ContactUs from "./Club/contactUs"
import Gallery from "./Club/gallery"
import Organisation from "./Club/organisation"
import Security from "./Club/security"
import Login from "./login"
import FAQs from "./faqs"
import Blog from "./blog"
import Register from "./register"
import Badminton from './Sports/badminton'
import Dance from './Sports/dance'
import Hockey from './Sports/hockey'
import Kayak from './Sports/kayak'
import Powerboat from './Sports/powerboat'
import Bridge from './Resources/SocialSecation/bridge'
import Toastmasters from './Resources/SocialSecation/toastmasters'
import MarahTots from './Resources/SocialSecation/marahtots'
import Canadian from './Resources/SocialSecation/canadian'
import Hispanic from './Resources/SocialSecation/hispanic'
import Holland from './Resources/SocialSecation/holland'
import Pakistan from './Resources/SocialSecation/pakistan'
import Fish from './Sports/fish'
import GolfClub from './Sports/golfClub'
import RAHLibrary from './Resources/Schedules/rahlibrary'
import TennisCourtBooking from './Resources/Schedules/tenniscourtbooking'
import SportsHallBooking from './Resources/Schedules/sportshallbooking'
import HSE from './Resources/Information/hse'
import OrangeMarkersBuoys from './Resources/Information/orangemarkersbuoys'
import RAHRCBulletin from './Resources/Information/rahrcbulletin'
import Adventure from './Sports/adventure'

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
