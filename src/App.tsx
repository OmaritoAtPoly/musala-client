import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Theme } from './theme';

const App = () => (
  <ThemeProvider theme={Theme} >
    <div>Hello Polymita</div>
  </ThemeProvider>
);

export default App;
