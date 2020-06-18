import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import SignupPage from './page/Signup';
import { theme } from './theme';
import { ProfilePage } from './page/Profile';

const App = () => (
  <ThemeProvider theme={theme} >
    <ProfilePage />
    {/* <SignupPage /> */}
  </ThemeProvider>
);

export default App;
