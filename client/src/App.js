//import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
// screens
import indexComponent from './screens/index'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    //useQuery,
    //gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Route path="/" component={indexComponent} exact={true}/>
            </Router>
        </ApolloProvider>
    );
}
export default App;