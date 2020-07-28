import React from 'react';
import logo from './Players-Tour-Finals-Logo.png';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Decks from './components/Decks';
import Carddetail from './components/Carddetail';
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

            <Route exact path="/" component={Decks}/>
            <Route exact path="/carddetail/:card_id" component ={Carddetail} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
