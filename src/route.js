import React, {Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import template1 from "./template/template1";
import App from "./App";
import history from './history';

export default class Routes extends Component{
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} exact component={App}></Route>
                    <Route path={process.env.PUBLIC_URL + '/template1'} exact component={template1}></Route>
                </Switch>
            </Router>
        )
    }
}