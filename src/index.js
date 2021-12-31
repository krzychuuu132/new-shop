import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
