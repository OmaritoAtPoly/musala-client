import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { theme } from './theme';
import { ApolloProvider } from "@apollo/react-hooks";
import client from './apolloClient';
import Routes from './routes/Routes';
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
