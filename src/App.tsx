import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import client from './apolloClient';
import Routes from './routes/Routes';
import { theme } from './theme';
      
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
