//import React, { Component } from "react";
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
// screens
import indexComponent from './screens/index'

function App() {
    return (
        <Router>
            <Route path="/" component={indexComponent} exact={true}/>
        </Router>
    );
}

export default App;