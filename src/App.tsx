import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { AdPage } from './page/AdPage';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme} >
    <AdPage />
  </ThemeProvider>
);

export default App;
