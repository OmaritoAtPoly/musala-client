import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { HomePage } from './page/Home';
import { theme } from './theme';
import { ApolloProvider } from "@apollo/react-hooks";
import client from './apolloClient';

const App = () => (
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme} >
    <HomePage />
  </ThemeProvider>
  </ApolloProvider>
);

export default App;
