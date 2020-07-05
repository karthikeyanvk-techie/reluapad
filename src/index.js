import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from "react-router-dom";


import Routes from './route';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router  basename={process.env.PUBLIC_URL}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();