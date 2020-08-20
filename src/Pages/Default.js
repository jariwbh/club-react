import React, { Component } from "react";
import Home from './home';
import { Switch, Route } from 'react-router-dom';

class Default extends Component {

    render() {
        return (
            <Switch>
                <Route strict exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default Default;
