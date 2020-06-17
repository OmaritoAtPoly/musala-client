import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import SignupPage from './page/Signup';
import { Theme } from './theme';

const App = () => (
  <ThemeProvider theme={Theme} >
    <SignupPage />
  </ThemeProvider>
);

export default App;
