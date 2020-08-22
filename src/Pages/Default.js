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

class Default extends Component {
    render() {
        return (
            <Switch>
                <Route strict exact path="/" component={Home} />
                <Route exact path="/bookablevenues" component={BookableVenues} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/organisation" component={Organisation} />
                <Route exact path="/blogs" component={Blog} />
                <Route exact path="/faqs" component={FAQs} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

            </Switch>
        );
    }
}

export default Default
