import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Search from './Search'
import Tracks from './Tracks'
import Playing from './Playing'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/Search" component={Search} />
            <Route path="/Tracks" component={Tracks} />
            <Route path="/Playing" component={Playing} />
        </div>
    </Router>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
