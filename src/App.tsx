import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import SignupPage from './page/Signup';
import { theme } from './theme';
import { ApolloProvider } from "@apollo/react-hooks";
import client from './apolloClient';

const App = () => (
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme} >
    <SignupPage />
  </ThemeProvider>
  </ApolloProvider>
);

export default App;
