import React from 'react';
import logo from './Players-Tour-Finals-Logo.png';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Deck from './components/Deck';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <img
            src={logo}
            alt="Magic.GG Logo"
            style={{ width: 300, display: 'block', margin: 'auto' }} />

            <Route exact path="/" component={Deck}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
