import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { HomePage } from './page/Home';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme} >
    <HomePage />
  </ThemeProvider>
);

export default App;
