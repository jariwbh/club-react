import React, { Component } from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import BookableVenues from "./BookableVenues"
import Pricing from "./Pricing"
import AboutUs from "./Support/AboutUs"
import ChannelPartner from "./Support/ChannelPartner"
import ContactUs from "./Support/ContactUs"
import Gallery from "./Support/Gallery"
import Organisation from "./Support/Organisation"
import OurTeam from "./Support/OurTeam"

class Default extends Component {

    render() {
        return (
            <Switch>
                <Route strict exact path="/" component={Home} />
                <Route exact path="/bookablevenues" component={BookableVenues} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/channelpartner" component={ChannelPartner} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/organisation" component={Organisation} />
                <Route exact path="/ourTeam" component={OurTeam} />

            </Switch>
        );
    }
}

export default Default
