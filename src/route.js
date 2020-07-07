import React, {Component } from "react";
import { HashRouter as Router, Switch, Route, createHistory } from "react-router-dom";

import template1 from "./template/template1";
import template2 from "./template/template2";
import App from "./App";
import history from './history';

export default class Routes extends Component{
    render() {
        return (
            <>
            <div>{console.log(process.env.PUBLIC_URL)}</div>
            
            <Router history={history} basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/template1' component={template1}></Route>
                    <Route path='/template2' component={template2}></Route>
                </Switch>
            </Router>
            </>
        )
    }
}