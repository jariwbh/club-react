import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import BookableVenues from "./BookableVenues"
import Pricing from "./Pricing"
import AboutUs from "./Support/AboutUs"
import ContactUs from "./Support/ContactUs"
import Gallery from "./Support/Gallery"
import Organisation from "./Support/Organisation"
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

                {/* Support section */}
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/organisation" component={Organisation} />

                {/* Sport section */}
                <Route exact path="/badminton" component={Badminton} />
                <Route exact path="/dance" component={Dance} />
                <Route exact path="/hockey" component={Hockey} />
                <Route exact path="/kayak" component={Kayak} />
                <Route exact path="/powerboat" component={Powerboat} />

                {/* social section */}
                <Route exact path="/bridge" component={Bridge} />
                <Route exact path="/toastmasters" component={Toastmasters} />
            </Switch>
        );
    }
}

export default Default
