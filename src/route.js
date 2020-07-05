import React, {Component } from "react";
import { BrowserRouter as Router, Switch, Route, createHistory } from "react-router-dom";

import template1 from "./template/template1";
import App from "./App";
import history from './history';

export default class Routes extends Component{
    render() {
        return (
            <>
            <div>{console.log(process.env.PUBLIC_URL)}</div>
            
            <Router history={history} >
                <Switch>
                    <Route path='/' exact component={App}></Route>
                    <Route path='/template1' component={template1}></Route>
                </Switch>
            </Router>
            </>
        )
    }
}