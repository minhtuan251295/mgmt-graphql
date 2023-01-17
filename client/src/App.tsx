import * as React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Clients from './components/Clients';

interface IAppProps {}

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
