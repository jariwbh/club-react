import React, { Component } from "react";
import Home from './home';
import { Switch, Route } from 'react-router-dom';

class Default extends Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route strict exact path="/" component={Home} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Default;
