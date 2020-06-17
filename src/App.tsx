import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Theme } from './theme';
import { Signup } from './domain/user/container/Signup';

const App = () => (
  <ThemeProvider theme={Theme} >
    <Signup />
  </ThemeProvider>
);

export default App;
