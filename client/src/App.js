import React from 'react';
import logo from './Players-Tour-Finals-Logo.png';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';
import Decks from './components/Decks';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="Magic.GG Logo"
          style={{ width: 300, display: 'block', margin: 'auto' }} />

          <Decks />
      </div>
    </ApolloProvider>
  );
}

export default App;
