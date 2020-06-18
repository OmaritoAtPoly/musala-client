import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { theme } from './theme';
import { ProfilePage } from './page/Profile';

const App = () => (
  <ThemeProvider theme={theme} >
    <ProfilePage />
  </ThemeProvider>
);

export default App;
