import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import SignupPage from './page/Signup';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme} >
    <SignupPage />
  </ThemeProvider>
);

export default App;
